import { Navbar } from "@/components/navbar";

export default function ProductLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-screen h-screen relative bg-[#fbfaef] pt-[80px] pb-5">
            <Navbar />
            {children}
        </main>
    );
}
