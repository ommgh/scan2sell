"use client";

import Link from "next/link";

export const ProductImages = () => {
    const photoar = [
        "https://m.media-amazon.com/images/I/81lIJ1udLXL.AC_UF1000,1000_QL80.jpg",
        "https://m.media-amazon.com/images/I/61mwWhBFZiL.AC_UF1000,1000_QL80.jpg",
        "https://kumaribasket.com/wp-content/uploads/2020/08/Banana-Palayankodan7.jpg",
        "https://kumaribasket.com/wp-content/uploads/2020/08/Banana-Palayankodan1-1200x1308.jpg",
    ];
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="flex flex-col items-center justify-between gap-3 h-full w-full select-none"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="text-lg text-left font-semibold">
                    Select Images
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-7">
                    {photoar.map((imgsrc, id) => (
                        <label key={id}>
                            <input
                                type="radio"
                                name="prod-image"
                                value={id}
                                className="hidden peer"
                                defaultChecked
                            />
                            <div className="w-[154px] h-[154px] rounded-lg flex items-center justify-center overflow-hidden cursor-pointer outline outline-[3px] outline-transparent outline-offset-4 hover:outline-black peer-checked:outline-black">
                                <img
                                    src={imgsrc}
                                    className="h-full object-cover"
                                />
                            </div>
                        </label>
                    ))}
                </div>

                <span>or</span>

                <Link href={"/product/generate-images"} className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white">
                    Generate Images
                </Link>
            </div>

            <div className="border-b-2 border-dashed border-black w-1/2"/>
            <button className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white">
                Add your product
            </button>
        </form>
    );
};
