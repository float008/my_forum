"use server";

import { signIn } from "@/auth";

export async function SignInAction() {
  return signIn("github");
}
