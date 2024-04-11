import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-screen h-[60px] flex items-center justify-between px-4 bg-[#18676d] text-[#fbfaef] z-10 shadow-xl">
            <Link href={"/product/uploadproduct"} className="text-2xl font-semibold">
                Scan2Sell
            </Link>

            <UserButton showName />
        </nav>
    )
}