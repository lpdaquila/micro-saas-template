import Link from "next/link";

export const metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function Home() {
  return <div className="flex h-screen items-center justify-center bg-gray-200">
    <h1 className="text-4xl font-bold text-gray-800">Landing Page</h1>
    <Link href="/login" className="ml-4 text-blue-500 hover:underline">
      Login
    </Link>
  </div>;
}
