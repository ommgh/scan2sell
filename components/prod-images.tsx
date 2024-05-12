import React, { useEffect, useState } from 'react';
import { useProductContext } from '@/contexts/ProductContext';
import { requestGenerateImages } from '@/app/api/images/generation';
import { prodLink } from '@/app/store/atoms/fileUrl';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export const ProductImages = () => {
  const prodName = useRecoilValue(prodLink);
  console.log('Product Name:', prodName);
  const  objectName  = {prodName};
  const [photoar, setPhotoar] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const fetchImages = async () => {
    setLoading(true);
    console.log('Fetching images...');
    try {
      const imageUrls = await requestGenerateImages(prodName);
      console.log('Image URLs:', imageUrls);
      setPhotoar(imageUrls.slice(0, 4));
      setError('');
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to fetch images.');
    } finally {
      setLoading(false);
      console.log('Fetch complete.');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col items-center justify-between gap-3 h-full w-full select-none"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-lg text-left font-semibold">Select Images</div>
        {loading ? (
          <div className="text-lg text-gray-500">Loading images...</div>
        ) : error ? (
          <div className="text-lg text-red-500">{error}</div>
        ) : (
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
                    loading="lazy"
                    className="h-full object-cover"
                  />
                </div>
              </label>
            ))}
          </div>
        )}

        <span>or</span>

        <Link
          href="/product/generate-images"
          className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white"
        >
          Generate Images
        </Link>

        <span
          onClick={fetchImages}
          className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white cursor-pointer"
        >
          Refresh Images
        </span>
      </div>

      <div className="border-b-2 border-dashed border-black w-1/2" />
      <button className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white">
        Add your product
      </button>
    </form>
  );
};
