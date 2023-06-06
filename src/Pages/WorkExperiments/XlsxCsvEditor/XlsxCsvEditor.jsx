import { useState } from "react";

import CsvParser from './CsvParser';
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

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0] 
    setFile(uploadedFile)
  }

  return (
    <div>
      <h2>CSV / XLSX</h2>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={detectFileType}>Parse File</button>
      <hr />
      {parseFile && (showCsvParser ? <CsvParser file={file} /> : <XlsxParser file={file}/>)}
    </div>  
    );
}
 
export default XlsxCsvEditor;