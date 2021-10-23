import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "tailwind";

interface NavBarProps {
  text: string;
}
export default function NavBar({ text }: NavBarProps) {
  return (
    <View style={tailwind("bg-white p-2 border-b-2 border-indigo-50")}>
      <Text style={tailwind("font-semibold text-2xl text-indigo-800")}>
        {text}
      </Text>
    </View>
  );
}
