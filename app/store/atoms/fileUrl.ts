// store/atoms/countState.jsx
import { atom } from 'recoil';

export const prodTitle = atom({
  key: 'prodTitle',
  default: "Rose",
});

export const prodLink = atom({
    key: 'prodLink',
    default: "Rose",
  });

  export const barcodeUrl = atom({
    key: 'barcodeUrl',
    default: "https://barcode-list.com/barcodeImage.php?barcode=6001067066613",
  });

