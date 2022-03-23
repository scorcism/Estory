import { useEffect, useState } from "react";
import { storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, timestamp } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'

const useStorage = (file,insta) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = ref(storage, `/Gallery/${file.name}`);
        const uplaodTask = uploadBytesResumable(storageRef, file);
        const galleryImage = collection(db, "Gallery");

        uplaodTask.on(
            "state_changed",
            (snapshot) => {
                const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(prog)
            },
            (erorr) => setError(error),
            () => {
                getDownloadURL(uplaodTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                     addDoc(galleryImage,{url: downloadURL, insta:insta,createdAt: timestamp})
                })
            }
        )
    }, [file])
    return { progress, url, error }
}

export default useStorage;