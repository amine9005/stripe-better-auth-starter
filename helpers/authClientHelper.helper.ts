import { authClient } from "@/lib/auth-client";

export async function getUser() {
  return (await authClient.getSession()).data;
}
