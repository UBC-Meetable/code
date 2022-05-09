import { API, graphqlOperation } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable, { ZenObservable } from "zen-observable-ts";
import {
  OnCreateChatMessageSubscription, Event, SubscribeToEventsFromCourseGroupSubscription, CourseGroup,
} from "../API";
import fetchCourseGroupMessages from "../calls/fetchCourseGroupMessages";
import fetchEventsByCourse from "../calls/fetchEventsByCourse";
import { onCreateChatMessage, subscribeToEventsFromCourseGroup } from "../graphql/subscriptions";
import useCourseGroups from "../hooks/useCourseGroups";

type EventContextType = {
  events: Map<string, Event[]>;
  loading: boolean;
}

const EventsContext = React.createContext({
} as EventContextType);
export const EventsProvider = (props: { children?: ReactNode }) => {
  const { groups, loading: coursesLoading } = useCourseGroups();
  const [loading, setLoading] = useState(true);
  // Events maps groupID to that group's events
  const [events, setEvents] = useState<Map<string, Event[]>>(new Map());
  const eventsRef = useRef<Map<string, Event[]>>(events);
  eventsRef.current = events;
  const { children } = props;

  useEffect(() => {
    setLoading(true);
    const getExistingEvents = async () => {
      const promises = (groups as CourseGroup[]).map(
        async (group:CourseGroup) => ({
          groupId: group.groupID,
          events: await fetchEventsByCourse({ courseGroupEventsId: group.groupID }),
        }),
      );
      const results = await Promise.all(promises);
      const newEvents = new Map();
      results.forEach((result) => {
        newEvents.set(result.groupId, result.events);
      });
      setEvents(newEvents);
      console.log("fetched existing events", newEvents);
    };
    getExistingEvents().then(() => setLoading(false));
  }, [groups]);

  // Subscribe to events at the course group level
  const createSubscription = (groupId: string,
    success: (({ provider, value }: any) => void),
    error: (err: any) => void): ZenObservable.Subscription => {
    const observableObj = API.graphql(
      graphqlOperation(subscribeToEventsFromCourseGroup, {
        courseGroupEventsId: groupId,
      }),
    ) as Observable<Object>;

    return observableObj.subscribe({
      next: success,
      error,
    });
  };

  useEffect(() => {
    const subscriptions: ZenObservable.Subscription[] = [];

    for (let i = 0; i < groups.length; i += 1) {
      const group = groups[i];
      const subscription = createSubscription(group.groupID, ({ value }) => {
        const { data } = value as {data: SubscribeToEventsFromCourseGroupSubscription};
        if (!data.subscribeToEventsFromCourseGroup) return;
        const createdEvent = data.subscribeToEventsFromCourseGroup as Event;
        const newEvents:Map<string, Event[]> = eventsRef.current;
        newEvents.set(group.groupID, [...newEvents.get(group.groupID) || [], createdEvent]);
        setEvents(() => newEvents);
        console.log(newEvents.size);
      }, (err) => console.log(err));
      subscriptions.push(subscription);
    }

    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe());
    };
  }, [groups]);

  return (
    <EventsContext.Provider value={{
      loading,
      events,
    }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
