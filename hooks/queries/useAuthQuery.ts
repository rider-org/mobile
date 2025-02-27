import type { ApiDefault, Session, User } from "@rider/models";

import { apiFetch } from "@/lib/apiFetch";
import { s } from "@rider/packages";
import { useQuery } from "@tanstack/react-query";

/**
 * Used to validate whether the user is authenticated or not.
 */
export const useAuthQuery = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: validateAuth,
  });
};

/**
 * Checks whether or not the user is logged in or not, shaping
 * the data in a way that is easier for the frontend to analyze from.
 */
async function validateAuth() {
  const res = await apiFetch("/api/auth/v1/validate");
  const data = s.parse(await res.text()) as ApiDefault<{
    user: User;
    session: Session;
  }>;

  if (!data.success) {
    return { user: null, session: null };
  }

  const { user, session } = data.data;
  return { user, session };
}
