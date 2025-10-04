import SignIn from "@/app/components/sign-in";
import SignOut from "@/app/components/sing-out";
import { UserInfo } from "@/app/components/userInfo";

export default function Home() {
  return (
    <div>
      <SignIn />
      <SignOut />
      <UserInfo />
    </div>
  );
}
