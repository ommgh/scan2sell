import { GenerateImages } from "@/components/gene-images";

export default function Page() {
    return (
        <main className="h-full w-full flex items-center justify-between gap-5 px-7">
            <GenerateImages />
        </main>
    );
}