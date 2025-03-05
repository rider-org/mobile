import type { Href } from "expo-router";

import { useRouter } from "expo-router";
import { useEffect } from "react";

/**
 * Use this function to redirect within your JSX,
 * such as within React Query.
 *
 * @example
 * ```tsx
 * const { data, status } = useAuthQuery();
 *
 * if (status === "pending") {
 *   return (
 *     <View className="p-10 bg-background w-screen h-screen">
 *       <ScrollView>
 *         <Skeleton className="my-10 w-full h-24 p-8" />
 *       </ScrollView>
 *     </View>
 *   );
 * }
 *
 * if (status === "error") {
 *   return <RedirectView to={"/404"} />;
 * }
 * ```
 */
export default function RedirectView({ to }: { to: Href }) {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return <></>;
}
