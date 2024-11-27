import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Page not Found"
}

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-4 rounded-xl flex flex-col gap-4 items-center border border-white">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <div className="w-full flex justify-between">
          <Button asChild>
            <Link href="/">Return start</Link>
          </Button>
          <Button asChild>
            <Link href="/home">Or Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
