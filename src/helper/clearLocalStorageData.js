"use client";

const clearAllLocalStorageData = () => {
    if (typeof window !== "undefined") {
        localStorage.clear();
    }
};

export default clearAllLocalStorageData;
