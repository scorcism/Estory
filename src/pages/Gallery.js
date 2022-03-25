import React from 'react'
import ImageGrid from '../components/ImageGrid'
import UploadForm from '../components/UploadForm'

function Gallery() {


  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4 mb-2">Image Gallery</h3>
        <p className='text-center'>Share your Images here</p>
        <UploadForm/>
        <div className="mt-2 mb-2">
          <ImageGrid/>
        </div>
      </div>
    </>
  )
}

export default Gallery