"use client";

import { useRef, useState } from "react";
import { UploadDropzone } from "@/utils/uploadthing";

import { recognizeImage } from "@/app/api/images/recognition";
import { ClientUploadedFileData } from "uploadthing/types";
import { ProductProvider, useProductContext } from "@/contexts/ProductContext";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { prodLink } from "@/app/store/atoms/fileUrl";
import Modal from "./Modal";
import { barcodeUrl } from "@/app/store/atoms/fileUrl";


export const GenerateImages = () => {

    
    const { productName, setProductName } = useProductContext();
    const [file, setFile] = useState<string>('');
    const setProdName = useSetRecoilState(prodLink);
    const setBarcodeUrl = useSetRecoilState(barcodeUrl);

    async function handleImageRecognition(file: string) {
        const recognitionResult = await recognizeImage(file);
        if (recognitionResult) {
            console.log('Label:', recognitionResult.label);
            setProductName(recognitionResult.label);
            setProdName(recognitionResult.label);
            
            
            
        } else {
            console.log('Image recognition failed.');
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                
            }}
            className="flex flex-col items-center justify-between gap-5 px-10 h-full w-full select-none"
        >
            <div className="text-4xl font-semibold">Generate Image</div>

            <div className="flex flex-col items-center justify-center gap-2">
                <div className="font-medium text-lg">Select any one option</div>
                <div className="flex items-center justify-center gap-4">
                    <label>
                        <input
                            type="radio"
                            name="typeofimage"
                            value={"barcode"}
                            className="hidden peer"
                            required
                            
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Barcode
                            <Modal/>
                        </div>
                    </label>

                    <span>or</span>

                    <label>
                        <input
                            type="radio"
                            name="typeofimage"
                            value={"product"}
                            className="hidden peer"
                            required
                            defaultChecked
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Product
                        </div>
                    </label>

                    <span>or</span>

                    <label>
                        <input
                            type="radio"
                            name="typeofimage"
                            value={"customproduct"}
                            className="hidden peer"
                            required
                            
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Custom
                        </div>
                    </label>
                </div>
            </div>
            {/* only for PE-II review */}
            <div className="flex gap-[10px]">
                <label className="text-lg font-semibold select-none">Name Product </label>
                <input type="text" className="p-2 rounded-md bg-[#18676d]/20" value={productName}/>
            </div>
            {/* end */}

            <UploadDropzone
                appearance={{
                    button:
                    "ut-ready:bg-white ut-uploading:cursor-not-allowed rounded-r-none bg-white text-black bg-none after:bg-black",
                    container: "w-max flex-row rounded-md border-black bg-teal-800",
                    allowedContent:
                    "flex flex-col items-center justify-center px-2 text-teal-800",
                    label: "text-white",
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res: ClientUploadedFileData<{ uploadedBy: string; }>[]) => {
                    // Do something with the response
                    setFile(res[0]?.url || '');
                    setBarcodeUrl(res[0]?.url || '');
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
            <div className="flex items-center justify-center gap-2">
            <span
                onClick={() => handleImageRecognition(file)}
                className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white"
            >
                Detect Product
            </span>
            <span
                onClick={() => handleImageRecognition(file)}
                className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white"
            >
                Generate Images
            </span>
            </div>
        </form>
    );
};
