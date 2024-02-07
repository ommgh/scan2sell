"use client"
export const ProductDetails = () => {
    return (
        <form
            onSubmit={(e) => {e.preventDefault()}}
            className="flex flex-col items-start gap-3 h-full w-full"
        >
            <div className="text-3xl font-semibold mb-4 mt-2 select-none">
                Enter Product Details
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
                <label className="text-lg font-semibold select-none">Name Product</label>
                <input type="text" className="p-2 rounded-md bg-[#18676d]/20" />
            </div>

            <div className="flex flex-col justify-center gap-[2px]">
                <label className="text-lg font-semibold select-none">Rate</label>
                <div className="flex justify-center items-center gap-4">
                    <input
                        type="number"
                        min="1"
                        max="5"
                        className="p-2 rounded-md bg-[#18676d]/20"
                    />
                    <select
                        className="bg-[#18676d]/20 p-2 rounded-md"
                        name="metric"
                    >
                        <option value="kg">kg</option>
                        <option value="lt">lt</option>
                        <option value="cm">cm</option>
                        <option value="pd">pd</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[2px]">
                <label className="text-lg font-semibold select-none">Size</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    className="p-2 rounded-md bg-[#18676d]/20"
                />
            </div>

            <div className="flex flex-col justify-center gap-[2px] h-full w-full">
                <label className="text-lg font-semibold select-none">Description</label>
                <textarea className="h-full p-2 rounded-md bg-[#18676d]/20" />
            </div>
        </form>
    );
};
