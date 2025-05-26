import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";

const session = await auth()

export default function Login() { // Just a contribution test 
    return <div className="flex h-screen items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Login</h1>
      <form
        action={handleAuth}>
        <button 
          type="submit" 
          className="border rounded-md px-2 py-1 cursor-pointer"
        >
          Signin with Google
        </button>
      </form>
    </div>;
}