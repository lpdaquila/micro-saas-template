import { handleAuth } from "@/app/actions/handle-auth";

export default function Home() {
    return <div className="flex h-screen items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Login</h1>
      <form
      action={handleAuth}
    >
      <button type="submit" className="border rounded-md">Signin with Google</button>
    </form>
    </div>;
  }