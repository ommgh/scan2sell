import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="flex w-screen h-screen flex-col gap-5 items-center justify-center">
            this is a protected page by clerk
            <SignOutButton>
                <button>Sign out</button>
            </SignOutButton>
        </main>
    );
}
