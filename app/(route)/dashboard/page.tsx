import { register } from "@/actions/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (user.email && user.given_name) {
      register({
        email: user.email, 
        username: user.email.substring(0, user.email.indexOf("@")),
        image: user.picture || "https://avatar.iran.liara.run/public", 
        name: user.given_name, 
        surname: user.family_name || "",
      });
    } else {
      console.error("User email or given name is null");
    }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full">
      <p>Dashboard</p>
    </div>
  );
}
