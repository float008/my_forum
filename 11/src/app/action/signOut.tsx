"use server";

import { signOut } from "@/auth";

export async function SignOutAction() {
  return signOut();
}
