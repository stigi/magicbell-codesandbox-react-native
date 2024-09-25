import { MagicBellProvider } from "@magicbell/react-headless";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import HomeTabIcon from "./HomeTabIcon";
import Bell from "./Notifications/Bell";
import NotificationsScreen from "./NotificationsScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <MagicBellProvider
      apiKey="df24a28e8921181f6c4220fc306ba76701592d21"
      userEmail="demo@magicbell.io"
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => <HomeTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color }) => <Bell color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MagicBellProvider>
  );
}
