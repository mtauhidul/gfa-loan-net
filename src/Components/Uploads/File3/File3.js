/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const File3 = ({ file3, setFile3 }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFile3(acceptedFiles);
        },
        [setFile3]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <h1>File 3 Here</h1>
            {file3 && file3.map((file, index) => <h4 key={index}>Name: {file?.name}</h4>)}
            <div className="area" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div>
        </div>
    );
};

export default File3;
