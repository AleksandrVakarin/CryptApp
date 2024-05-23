import { cryptoAssets, cryptoData } from "./data";

export default function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 200);
    });
}

export function fetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 200);
    });
}
