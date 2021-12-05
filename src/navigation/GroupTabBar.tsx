/* eslint-disable */

import { Layout } from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const GroupTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [text, setText] = useState(state.routes[state.index].name);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const [translateWidth, setTranslateWidth] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    setText(state.routes[state.index].name);
    
    if (state.index === 0) {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      } as any).start();
    }
    if (state.index === 1) {
      Animated.spring(pan, {
        toValue: { x: translateWidth * .5 + 4, y: 0 },
        useNativeDriver: true,
      } as any).start();
    }
  }, [state]);


  return (
    <Layout style={styles.root}>
      <Layout style={styles.container} onLayout={(e) => {
        setTranslateWidth(e.nativeEvent.layout.width);
      }}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableWithoutFeedback
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabChild]}
            >
              <Text
                style={[
                  styles.tabChildText,
                  { color: isFocused ? "black" : Colors.theme.brightOrange },
                ]}
              >
                {route.name}
              </Text>
            </TouchableWithoutFeedback>
          );
        })}
        <Animated.View
        style={[styles.tabChild, styles.animatedBG,  {left: 0, transform: [{translateX: pan.x}]}]}>
          {/* Dummy text to fit to the same size as Real Text */}
          <Text style={[{ color: "transparent"}, styles.tabChildText]}>{text}</Text>
        </Animated.View>
      </Layout>
      {/* Animated BG Color */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    position: "relative",
    borderColor: Colors.theme.brightOrange,
    borderRadius: 50,
    flex: 1,
  },
  tabChild: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  tabChildText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins_700Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    backgroundColor: "transparent",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  animatedBG: {
    position: "absolute",
    height: "100%",
    zIndex: -1,
    backgroundColor: Colors.theme.brightOrange,
  },
});

export default GroupTabBar;
