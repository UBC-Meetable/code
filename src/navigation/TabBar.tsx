/* eslint-disable */

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MyTabBar({ state, descriptors, navigation }: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false ) {
    return null;
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#0000",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: "80%",
          borderRadius: 9999,
          marginBottom: 20,
          backgroundColor: "#FBBA82",
        }}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          let Label;
          if (options.tabBarIcon) {
              Label = options.tabBarIcon;
          }

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
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0000",
              }}
            >
              <Text style={{ color: isFocused ? "#CE6206" : "#fff" }}>
                <Label />
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <SafeAreaView />
    </View>
  );
}

export default MyTabBar;
