//  hooks for getting image form db
import { useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react';

const useImags = (collectionn) => {
    const [gallery, setGallery] = useState([]);

    // getting all the images
    useEffect(() => {
        const galleryCol = collection(db, collectionn);
        const getImages = async () => {
            const img = await getDocs(galleryCol)
            setGallery(img.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getImages();
    }, [collectionn])

    return { gallery };

}

export default useImags;