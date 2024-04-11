"use client";

import { useRef, useState } from "react";
import { ID, Client, Storage } from "appwrite";import { UploadDropzone } from "@/utils/uploadthing";
;

// Accessing environment variable on the client-side
const storageId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID;
const projectId = process.env.NEXT_PUBLIC_PROJECT_STORAGE_ID;




export const GenerateImages = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File>();
    const updateFiles = () => {
        console.log(file);
        let temp = inputRef.current?.files as FileList;
        let ar = temp[0] as File;
        setFile(ar);
        
    };
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                
            }}
            className="flex flex-col items-center justify-between gap-5 px-10 h-full w-full select-none"
        >
            <div className="text-4xl font-semibold">Generate Images</div>

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
                <input type="text" className="p-2 rounded-md bg-[#18676d]/20" />
            </div>
            {/* end */}

            <UploadDropzone
            appearance={{
                button:
                  "ut-ready:bg-white ut-uploading:cursor-not-allowed rounded-r-none bg-white text-black bg-none after:bg-grey",
                container: "w-max flex-row rounded-md border-black bg-teal-800",
                allowedContent:
                  "flex flex-col items-center justify-center px-2 text-teal-800",
                label: "text-white",
              }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

            <span
                // onClick={() => file != undefined && saveImageToAppwrite(file)}
                className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white"
            >
                Generate Images
            </span>
        </form>
    );
};
