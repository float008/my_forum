"use client";

import * as action from "@/app/action";
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@heroui/react";
import { useSession } from "next-auth/react";

export default function SignInfo() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "loading") {
    return <Spinner />;
  } else if (session) {
    return (
      <Popover color="secondary" placement={"bottom"}>
        <PopoverTrigger>
          <Avatar src={session.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <form action={action.SignOutAction}>
            <Button type="submit" color="secondary" href="#" variant="flat">
              Sign Out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    return (
      <form action={action.SignInAction}>
        <Button type="submit" color="secondary" href="#" variant="flat">
          Sign In
        </Button>
      </form>
    );
  }
}
