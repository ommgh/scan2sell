"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ID, Client, Storage } from "appwrite";

const saveImageToAppwrite = (image: File) => {
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1');
    client.setProject('ProjectID');

    const storage = new Storage(client);
    try {
        const promise = storage.createFile(
            '#StorageId',
            ID.unique(),
            image // Pass the file data as an object
        );
         // Success
         console.log(promise)
    } catch (error) {
        console.log(error)
    }
};


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
                // saveImageToAppwrite(file);
                
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
                            defaultChecked
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
                            value={"barcode"}
                            className="hidden peer"
                            required
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Product
                        </div>
                    </label>
                </div>
            </div>

            <label className="flex flex-col items-center justify-center w-3/4 h-3/4 bg-gray-500/40 outline-dashed outline-2 outline-offset-2 rounded-xl p-4 my-4">
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/jpeg, image/webp"
                    className="peer hidden"
                    onChange={updateFiles}
                />
                <div className="text-2xl font-semibold text-center">
                    Upload your image
                </div>
                {<span>{file?.name}</span>}
            </label>

            <Link
                href={"/uploadproduct"}
                // onClick={() => file != undefined && saveImageTOAppwrite(file)}
                className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white"
            >
                Generate Images
            </Link>
        </form>
    );
};
