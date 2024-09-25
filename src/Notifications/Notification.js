import { Text, View } from "react-native";
import React from "react";
import NotificationActions from "./NotificationActions";
import NotificationHeader from "./NotificationHeader";
import UserAvatar from "./UserAvatar";

/**
 * Component that renders a notification.
 */
function Notification({ notification }) {
  return (
    <View
      style={{
        padding: 15,
        borderBottom: "1px solid #e6e9eb",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <UserAvatar notification={notification} />
        <View style={{ marginLeft: 15 }}>
          <NotificationHeader notification={notification} />
          <Text
            style={{ marginTop: 15, marginBottom: 15, flex: 1 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {notification.content}
          </Text>
          <NotificationActions notification={notification} />
        </View>
      </View>
    </View>
  );
}

export default Notification;
