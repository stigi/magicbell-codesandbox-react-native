import { useNotifications } from "@magicbell/react-headless";
import React from "react";
import { FlatList } from "react-native";
import Notification from "./Notification";

/**
 * List of notifications.
 *
 * Gets the notifications from MagicBell using the `useNotifications`
 * hook.
 */
function NotificationInbox() {
  const store = useNotifications();

  if (!store) return null;
  return (
    <FlatList
      data={store.items}
      keyExtractor={(notification) => notification.id}
      renderItem={({ item }) => <Notification notification={item} />}
    />
  );
}

export default NotificationInbox;
