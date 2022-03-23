import React, { useContext } from 'react'
import userContext from '../context/userContext';
import SingleImage from './SingleImage';


function ImageGrid() {
    const context = useContext(userContext);
    const { gallery } = context;

    return (
        <>
            <div className="container w-80 mt-5">
                <div className="text-center mt-2 mb-2">
                    <div className="row">

                    {gallery.map((img) => {
                        return   <SingleImage img={img} key={img.id} />
                    })}
                    </div>
                    </div>
            </div>
        </>
    )
}

export default ImageGrid