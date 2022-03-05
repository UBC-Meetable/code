import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import EventScreen from "./screens/EventScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  /*
  return (
    <SafeAreaProvider>
      <EventScreen />
      <StatusBar style="dark"/>
    </SafeAreaProvider>
  )
  */
  
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
