import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex w-screen h-screen flex-col gap-5 items-center justify-center relative text-white">
            <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center bg-black z-[-1] overflow-hidden">
                <img
                    src="/images/landing-bg.jpg"
                    className="w-full object-center opacity-40"
                />
            </div>
            <div className="text-5xl font-bold select-none">Scan2Sell</div>

            <SignInButton>
                <button className="border-2 rounded-2xl px-5 py-3 bg-black/25 font-bold text-white transition-opacity hover:bg-white hover:text-black">
                    Continue to Sign In{" "}
                </button>
            </SignInButton>

			<Link href={'/sign-up'} className="font-medium">Don't have an account? Let's create one...</Link>
        </main>
    );
}
