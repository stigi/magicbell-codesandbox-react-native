import React from "react";
import { Image } from "react-native";

/**
 * Render the avatar of the notification sender (through
 * custom attributes).
 */
export default function UserAvatar({ notification }) {
  const uri = notification.customAttributes?.sender?.profile?.thumb128;

  if (!uri) return null;
  return (
    <Image
      source={{ uri }}
      style={{ width: 30, height: 30, borderRadius: "50%" }}
    />
  );
}
