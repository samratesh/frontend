import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = ({className}) => {
	const [file, setFile] = useState([]);
	const onDrop = useCallback((acceptedFiles) => {
		setFile(file.length ? acceptedFiles : file.concat(acceptedFiles));
	}, [file]);
	const { getRootProps, getInputProps } = useDropzone({ onDrop , accept: {'text/csv' : '.csv'}});

	return (
		<div style={{border : file.length ? '3px solid #D41C2C' : 'null',
					 outline : file.length ? '2px solid #FCCC44' : 'null'}} 
			{...getRootProps({className: 'dropzone'})}>

				<input {...getInputProps()} />
				<div>
					{
						file.length ? (file.map((file, index) => (
							<div key={index}>
								<h1>{file.name}</h1>
							</div>
						))) : (
						<div>
							<h1>Upload {className} File</h1>
						</div>)
					}
				</div>
		</div>
	);
}

export default DropZone;