import React from "react";
import { SafeAreaView, Text } from "react-native";
import { tailwind } from "tailwind";
import NavBar from "~/components/NavBar";

export default function Base() {
  return (
    <SafeAreaView style={tailwind("flex-1 bg-white")}>
      <NavBar text={"Base"} />
    </SafeAreaView>
  );
}
