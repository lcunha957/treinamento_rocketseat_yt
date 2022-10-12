import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, uploadMessage } from './styles.css';

 class Upload extends Component {
    render()
    {

        return (<Dropzone accept ="image/*" onDropAccepted={null}
        > {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
        < div class ="DropContainer" 
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject ={isDragReject}
            > <input {...getInputProps()} />
            <p> Jogue seus arquivos aqui...</p>
        </div> 
        )}

        </Dropzone>);
    }
}


export default Upload;