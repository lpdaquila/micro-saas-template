import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return <div className="flex h-screen items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">Protected Dashboard</h1>
        <p>
            {session.user?.name ? `Hello ${session.user.name}` : "Hello User"}
        </p>
        {
            session?.user?.email && (
                <form action={handleAuth}>
                    <button 
                    type="submit"
                    className="border rounded-md"
                    >Logout</button>
                </form>
            )
        }
    </div>;
}