import React, { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage';

function UploadForm() {

    const [file, setFile] = useState(null);
    const [insta, setInsta] = useState("scor.cism")
    const [error, setError] = useState(null);
    const [submit, setSubmit] = useState(false);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];


    return (
        <>
            <div className="d-flex align-items-center justify-content-center">

                <div className="border p-3 rounded w-50 ">
                    <div className="mb-3">
                        <label htmlFor="insta" className="form-label">1: Instagram handle</label>
                        <input onChange={(e) => { setInsta(e.target.value) }} type="text" className="form-control" id="insta" name="insta" placeholder="scor.cism" />
                    </div>
                    <form >
                        <div className="mb-3">

                            <label htmlFor="formFileSm" className="form-label">2: Your Image </label>
                            <input onChange={(e) => {
                                let selected = e.target.files[0];
                                if (selected && types.includes(selected.type)) {
                                    setFile(selected)
                                    setError("");
                                } else {
                                    setFile(null);
                                    setError("Please select a image file (png or jpeg or jpg)")
                                }
                            }} className="form-control form-control-sm" id="file" type="file" />
                        </div>
                        <button type="button" onClick={(e) => {
                            e.preventDefault();
                            setSubmit(true);
                        }} className="btn btn-dark text-center align-center justify-center">Submit Image</button>
                    </form>
                    <div className="output">
                        {error && <div className="error mt-3 mb-3 alert alert-warning" role="alert">{error} !</div>}
                        {submit && file && <ProgressBar setInsta={setInsta} insta={insta} file={file} setFile={setFile} />}
                    </div>
                </div>
            </div>
        </>
    )
}

const ProgressBar = ({ file, setFile, insta }) => {
    const { url, progress } = useStorage(file, insta);
    const message = " Window will reload soon !";
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    
    if (Math.floor(progress) === 100) {
        setTimeout(() => {
            window.location.reload()
        }, 2500);
    }
    return (
        <>
            <div style={{ width: progress + "%" }} className="progress-bar"></div>
            <p className='text-center'> {Math.floor(progress)}% Uploaded - {message}</p>
        </>
    )
}

export default UploadForm