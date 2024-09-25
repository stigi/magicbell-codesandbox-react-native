import React from "react";
import { View, Text } from "react-native";

/**
 * Component that renders the title of the notification and its
 * creation date.
 */
function NotificationHeader({ notification }) {
  return (
    <View>
      <Text>
        <Text style={{ fontWeight: "bold" }}>
          {notification.customAttributes?.sender?.name}
        </Text>{" "}
        {notification.title}
      </Text>
      <Text style={{ color: "#939da8", fontSize: 13 }}>
        {notification.sentAtDate?.format("DD MMM, YYYY")}
      </Text>
    </View>
  );
}

export default NotificationHeader;
