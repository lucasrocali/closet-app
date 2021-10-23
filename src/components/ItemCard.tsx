import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "tailwind";
import { Item } from "~/store/data";

interface ItemCardProps {
  item: Item;
}
export default function ItemCard({ item }: ItemCardProps) {
  return (
    <View style={tailwind("bg-white p-2 border-2 border-indigo-50")}>
      <Text style={tailwind("font-normal text-l text-base-900")}>
        {item.id}
      </Text>
    </View>
  );
}
