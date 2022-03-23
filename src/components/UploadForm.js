import React, { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage';

function UploadForm() {

    const [file, setFile] = useState(null);
    const [insta, setInsta] = useState("scor.cism")
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("");
        } else {
            setFile(null);
            setError("Please select a image file (png or jpeg or jpg)")
        }
    }

    return (
        <>
        <div className="d-flex align-items-center justify-content-center">

            <div className="border p-3 rounded w-50 ">
                <div class="mb-3">
                    <label for="insta" class="form-label">1: Instagram handle</label>
                    <input onChange={(e) => { setInsta(e.target.value) }} type="text" class="form-control" id="insta" name="insta" placeholder="scor.cism" />
                </div>
                <div class="mb-3">
                    <label for="formFileSm" class="form-label">2: Your Image </label>
                    <input onChange={changeHandler} class="form-control form-control-sm" id="file" type="file" />
                </div>
                <button type="button" class="btn btn-dark text-center align-center justify-center">Submit Image</button>
                <div className="output">
                    {error && <div className="error mt-3 mb-3 alert alert-warning" role="alert">{error} !</div>}
                    {file && <ProgressBar setInsta={setInsta} insta={insta} file={file} setFile={setFile} />}
                </div>
        </div>
            </div>
        </>
    )
}

const ProgressBar = ({ file, setFile, insta, setInsta }) => {
    const { url, progress } = useStorage(file, insta);
    console.log(progress, url)
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    const progressChange = () => {
        setInsta("");
    }
    return (
        <>
            <div onChange={progressChange} style={{ width: progress + "%" }} className="progress-bar"></div>
        </>
    )
}

export default UploadForm