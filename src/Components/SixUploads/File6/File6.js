/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import './File6.css';

const File6 = ({ file6, setFile6 }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFile6(acceptedFiles);
        },
        [setFile6]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="upload-box">
            <h1>File 1 Here</h1>
            {file6 && file6.map((file, index) => <h4 key={index}>Name: {file?.name}</h4>)}
            <div className="area" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <Button style={{ background: 'transparent' }} variant="outline-dark">
                        Drag 'n' drop some files here, or Click to select files
                    </Button>
                )}
            </div>
        </div>
    );
};

export default File6;
