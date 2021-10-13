import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useAppSelector, useAppDispatch } from "~/store/hooks";
import { addItem, selectItems } from "~/store/app";

export default function Home() {
  const [image, setImage] = useState(null);
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  console.log({ items });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    dispatch(
      addItem({
        id: `${items.length + 1}`,
      })
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {items && items.map((item) => <Text key={item.id}>{item.id}</Text>)}
    </View>
  );
}
