"use client";
import { ProductDetails } from "@/components/prod-details";
import { ProductImages } from "@/components/prod-images";
import { ProductProvider } from "@/contexts/ProductContext";

export default function Page() {
    return (
        <main className="h-full w-full flex items-center justify-between gap-5 px-7">
            <ProductProvider>
            <ProductDetails />
            <ProductImages />
            </ProductProvider>
        </main>
    );
}
