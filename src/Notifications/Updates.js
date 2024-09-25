import React from "react";
import NotificationInbox from "./NotificationInbox";
import { View } from "react-native";

/**
 * Wrapper for the Updates view. Renders both the Bell and the
 * list of notifications.
 *
 * Notice that the components are wrapped with the headless
 * `MagicBellProvider` component.
 */
export default function Updates() {
  return (
    <View style={{ marginVertical: 50 }}>
      <NotificationInbox />
    </View>
  );
}
