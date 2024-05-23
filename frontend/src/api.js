// can use real api(now using data.js)
import { cryptoAssets, cryptoData } from "./data";

export default function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 500);
    });
}

export function fetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 500);
    });
}
