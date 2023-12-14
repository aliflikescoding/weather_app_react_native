import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={[styles.container, styles.safeArea]}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  }
});

export default UpcomingWeather;