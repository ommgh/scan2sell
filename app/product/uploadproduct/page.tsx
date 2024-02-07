import { ProductDetails } from "@/components/prod-details";
import { ProductImages } from "@/components/prod-images";

export default function Page() {
    return (
        <main className="h-full w-full flex items-center justify-between gap-5 px-7">
            <ProductDetails />
            <ProductImages />
        </main>
    );
}
