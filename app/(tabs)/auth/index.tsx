import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function TabTwoScreen() {
  // const { data, status } = useAuthQuery();

  return (
    <View className="p-10 bg-background w-screen h-screen">
      <ScrollView>
        <View className="bg-primary rounded-md w-full flex flex-col justify-center p-8">
          <Text className="text-white">You are not authenticated.</Text>
          <Link href={"/auth/google"} asChild>
            <Pressable className="bg-tertiary w-24 p-2 m-2 mx-0 rounded-lg">
              <Text className="text-white">Log In</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}
