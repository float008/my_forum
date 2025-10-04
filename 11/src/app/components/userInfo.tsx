import { auth } from "@/auth";
import Image from "next/image";

export async function UserInfo() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>User Info</h1>
      <Image
        src={session?.user?.image || ""}
        alt="User Image"
        width={300}
        height={300}
      />
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
