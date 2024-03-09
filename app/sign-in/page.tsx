import { getServerSession } from "next-auth";
import SignInBtns from "../components/SignInBtns";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await getServerSession(authOptions)
    if(session) {
        redirect("/dashboard")
    }
    return <div><SignInBtns/></div>
}