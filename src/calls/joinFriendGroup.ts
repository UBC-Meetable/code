import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { CreateFriendGroupInput, FriendGroup } from "../API";
import { createFriendGroupConnection } from "../graphql/mutations";
import createFriendGroup from "./createFriendGroup";
import fetchFriendGroup from "./fetchFriendGroup";

const joinFriendGroup = async (
  userID: string,
  groupID: string | undefined | null,
) => {
  let foundGroup: FriendGroup;

  try {
    foundGroup = (await fetchFriendGroup({ groupID: groupID as string }));
  } catch (e) {
    try {
      foundGroup = await createFriendGroup({ input: { groupID: groupID || uuid() } });
    } catch (err) {
      console.error("Failed to create friend group");
      throw new Error(err);
    }
  }

  if (foundGroup!.users!.items!.find((user) => user?.userID === userID)) return foundGroup;

  try {
    await API.graphql({
      query: createFriendGroupConnection,
      variables: {
        input: {
          groupID,
          userID,
        },
      },
    });
    return foundGroup;
  } catch (e) {
    console.error("Failed to join friend group, ", e);
    throw new Error(e);
  }
};

export default joinFriendGroup;
