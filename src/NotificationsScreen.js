import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Updates from "./Notifications/Updates";
import { SafeAreaProvider } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default function NotificationsScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.app}>
        <Updates />
      </View>
    </SafeAreaProvider>
  );
}
