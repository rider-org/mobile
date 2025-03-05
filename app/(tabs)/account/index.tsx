import RedirectView from "@/components/RedirectView";
import { Skeleton } from "@/components/ui/Skeleton";
import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function TabTwoScreen() {
  const { data, status } = useAuthQuery();

  if (status === "pending") {
    return (
      <View className="p-10 bg-background w-screen h-screen">
        <ScrollView>
          <Skeleton className="my-10 w-full h-24 p-8" />
        </ScrollView>
      </View>
    );
  }

  if (status === "error") {
    return <RedirectView to={"/404"} />;
  }

  const authenticated = !!data.user && !!data.session;

  if (!authenticated) {
    return (
      <View className="p-10 bg-background w-screen h-screen">
        <ScrollView>
          <View className="bg-primary rounded-md w-full flex flex-col justify-center p-8">
            <Text className="text-white">You are not authenticated.</Text>
            <Link href={"/(auth)/login"} asChild>
              <Pressable className="bg-tertiary w-24 p-2 m-2 mx-0 rounded-lg">
                <Text className="text-white">Log In</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </View>
    );
  }
}
