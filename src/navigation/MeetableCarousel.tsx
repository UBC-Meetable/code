import React, {
  forwardRef, ReactElement, useState,
} from "react";
import {
  Dimensions, StyleProp, View, ViewStyle,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

type MySlideComponentProps = {
  data: ReactElement;
};

  type MeetableCarouselProps = {
  children: any[] | any;
  style?: StyleProp<ViewStyle>;
  containerStyle?: any;
  slideState?: [number, React.Dispatch<React.SetStateAction<number>>];
  layout?: "tinder" | "default" | "stack"
};

const MySlideComponent = (props: MySlideComponentProps) => props.data;

const MeetableCarousel = forwardRef((props: MeetableCarouselProps, ref: any) => {
  let activeSlide: number;
  let setActiveSlide: React.Dispatch<React.SetStateAction<number>>;

  if (props.slideState) {
    [activeSlide, setActiveSlide] = props.slideState;
  } else {
    [activeSlide, setActiveSlide] = useState(0);
  }
  const renderItem = ({
    item,
  }: {
    item: ReactElement;
    index: number;
  }) => <MySlideComponent data={item} />;

  const { style, layout = "default" } = props;
  return (
    <View
      style={
        style
      }
    >
      <Carousel
        ref={ref}
        layout={layout}
        slideStyle={props.containerStyle}
        data={props.children}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={Dimensions.get("screen").width}
        itemWidth={Dimensions.get("screen").width}
      />
      <Pagination
        dotsLength={props.children.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "orange",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
  // }
});

export default MeetableCarousel;
