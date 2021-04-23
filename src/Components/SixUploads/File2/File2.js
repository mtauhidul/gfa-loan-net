/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const File2 = ({ file2, setFile2 }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFile2(acceptedFiles);
        },
        [setFile2]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <h1>File 2 Here</h1>
            {file2 && file2.map((file, index) => <h4 key={index}>Name: {file?.name}</h4>)}
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

export default File2;
