/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const File4 = ({ file4, setFile4 }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFile4(acceptedFiles);
        },
        [setFile4]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <h1>File 4 Here</h1>
            {file4 && file4.map((file, index) => <h4 key={index}>Name: {file?.name}</h4>)}
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

export default File4;
