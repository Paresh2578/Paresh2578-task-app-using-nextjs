"use client";

const clearAllLocalStorageData = () => {
    console.log("Clearing all local storage data");
    if (typeof window !== "undefined") {
        localStorage.clear();
    }
};

export default clearAllLocalStorageData;
