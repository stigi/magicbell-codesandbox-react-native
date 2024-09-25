import { Linking, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import NotificationHeader from "./NotificationHeader";
import UserAvatar from "./UserAvatar";

/**
 * Component that renders a notification.
 */
function Notification({ notification }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {
      if (notification.actionUrl) {
        Linking.openURL(notification.actionUrl)
      } else {
        alert("You tapped a notification that does not have an action URL")
      }
    }}>
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
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Notification;
