import { useNotifications } from "@magicbell/react-headless";
import React from "react";
import { FlatList, Text } from "react-native";
import Notification from "./Notification";

/**
 * List of notifications.
 *
 * Gets the notifications from MagicBell using the `useNotifications`
 * hook.
 */
function NotificationInbox() {
  const store = useNotifications();

  if (!store) return <Text>Loading...</Text>;
  return (
    <FlatList
      data={store.notifications}
      keyExtractor={(notification) => notification.id}
      renderItem={({ item }) => <Notification notification={item} />}
    />
  );
}

export default NotificationInbox;
