import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{
          padding: 50,
          textAlign: "center"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginVertical: "2em"
          }}
        >
          MagicBell on React Native
        </Text>
        <Text>Open the notifications tab</Text>
      </View>
    </View>
  );
}
