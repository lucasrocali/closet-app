import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { tailwind } from "tailwind";
import ItemCard from "~/components/ItemCard";
import NavBar from "~/components/NavBar";
import { Item } from "~/store/data";

export default function Home() {
  const items: Item[] = [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];

  const renderItem = ({ item }: { item: Item }) => {
    return <ItemCard item={item} />;
  };

  return (
    <SafeAreaView style={tailwind("flex-1 bg-white")}>
      <NavBar text={"Home"} />
      <FlatList data={items} renderItem={renderItem} />
    </SafeAreaView>
  );
}

// export default function Home() {
//   const [image, setImage] = useState(null);
//   const items = useAppSelector(selectItems);
//   const dispatch = useAppDispatch();

//   console.log({ items });

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== "web") {
//         const { status } =
//           await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need camera roll permissions to make this work!");
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     dispatch(
//       addItem({
//         id: `${items.length + 1}`,
//       })
//     );
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//       )}
//       {items && items.map((item) => <Text key={item.id}>{item.id}</Text>)}
//     </View>
//   );
// }
