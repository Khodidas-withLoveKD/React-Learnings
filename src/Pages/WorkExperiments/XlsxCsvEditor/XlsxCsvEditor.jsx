import { useState } from "react";

import CsvParser from './CsvParser';
import ReactDataGrid from "./ReactDataGrid";
import XlsxParser from "./XlsxParser";

const XlsxCsvEditor = () => {
  const [file, setFile] = useState(null);
  const [showCsvParser, setCsvParserVisibility] = useState(false);
  const [parseFile, setParseFile] = useState(false);

  const detectFileType = () => {
    // debugger
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension === 'csv') {
      setCsvParserVisibility(true)
      setParseFile(true)
    } else if (fileExtension === 'xlsx') {
      setCsvParserVisibility(false)
      setParseFile(true)
    } else {
      console.log('kd Error')
    }
  } 

  function decodeBase64(base64String) {
		const binaryData = window.atob(base64String);
		const uint8Array = new Uint8Array(binaryData.length);
		for (let i = 0; i < binaryData.length; i++) {
			uint8Array[i] = binaryData.charCodeAt(i);
    }
		return uint8Array;
	}

  const createFile = () => {
    const binaryData = `cGhvbmVfbm8sY3VzdF9uYW1lfHxURVhULGN1c3RfZW1haWx8fFRFWFQsbmV3X2NpdHl8fFRFWFQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsdXNlcm5hbWUsY2l0eSxzdGF0ZSxjb3VudHJ5LENvbW1lbnQNCjkxNzUwNjE3NzUwMCxBQkMsQUJDQHh5ei5jb20sTG9uZG9uLEFCQyxERUYsQUJDQHh5ei5jb20sYWJjMSxMb25kb24sV2FsZXMsVUssU3VjY2Vzcw0KOTE3NTAsWFlaLFhZWkBhYmMuY29tLFRva3lvLFhZWixQUVIsWFlaQGFiYy5jb20seHl6MSxUb2t5byxLeW90byxTLFtNb2JpbGUgbnVtYmVyIHZhbGlkYXRpb24gZmFpbGVkIF0NCjEzMjQ1LEFCQywxMjMsTmV3IFlvcmssS0QsLERzZixQZGYsUGRmLFBkZixQZGYsIltNb2JpbGUgbnVtYmVyIHZhbGlkYXRpb24gZmFpbGVkICwgSW5jb3JyZWN0IHZhbHVlIGluIGNvbHVtbiBlbWFpbF0iDQoiIiwsLCwsLCwsLCwsW01pc3NpbmcgdmFsdWUgaW4gY29sdW1uIHBob25lX25vXQ0KIiIsLCwsLCwsLCwsLFtNaXNzaW5nIHZhbHVlIGluIGNvbHVtbiBwaG9uZV9ub10NCiIiLCwsLCwsLCwsLCxbTWlzc2luZyB2YWx1ZSBpbiBjb2x1bW4gcGhvbmVfbm9dDQoiIiwsLCwsLCwsLCwsW01pc3NpbmcgdmFsdWUgaW4gY29sdW1uIHBob25lX25vXQ0KIiIsLCwsLCwsLCwsLFtNaXNzaW5nIHZhbHVlIGluIGNvbHVtbiBwaG9uZV9ub10NCiIiLCwsLCwsLCwsLCxbTWlzc2luZyB2YWx1ZSBpbiBjb2x1bW4gcGhvbmVfbm9dDQo=`
    const uint8Array = decodeBase64(binaryData);
		console.log('kd uint8Array:', uint8Array);

		const blob = new Blob([uint8Array], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});

		// Create a File object from the Blob
		const file = new File([blob], 'data.xlsx', { type: blob.type });
		console.log('kd file:', file);
    return file
  }

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0] 

    
    // setFile(uploadedFile)
    setFile(createFile)
  }

  return (
    <div>
      <h2>CSV / XLSX</h2>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={detectFileType}>Parse File</button>
      <hr />
      {parseFile && (showCsvParser ? <CsvParser file={file} /> : <XlsxParser file={file}/>)}
      <ReactDataGrid />
    </div>  
    );
}
 
export default XlsxCsvEditor;