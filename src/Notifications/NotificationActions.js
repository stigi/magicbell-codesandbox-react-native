// import { observer } from "@magicbell/react-headless";
import React from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";

function NotificationActions({ notification }) {
  if (!notification.customAttributes?.action) return null;
  return (
    <View>
      <Button
        type="clear"
        title={notification.customAttributes?.action?.title}
        titleStyle={{ fontSize: 13 }}
      />
    </View>
  );
}

export default NotificationActions;
