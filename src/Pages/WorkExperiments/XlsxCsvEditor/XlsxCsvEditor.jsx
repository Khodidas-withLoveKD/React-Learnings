import { useState } from "react";
import readXlsxFile from 'read-excel-file';

import CsvParser from './CsvParser';
import { extractDataFromCsvFile } from "./editorHelper";

const XlsxCsvEditor = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [showCsvParser, setCsvParserVisibility] = useState(false);

  const detectFileType = () => {
    debugger
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension === 'csv') {
      setCsvParserVisibility(true)
    } else if (fileExtension === 'xlsx') {
      setCsvParserVisibility(false)
    } else {
      console.log('Error')
    }
  } 

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0] 
    setFile(uploadedFile)
  }

  const parseCSVFile = () => {
    if (!file) {
      alert('No File Selected')
      return
    }

    // csv reading
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log('kd file: ', file)
      console.log('kd event:', event)
      console.log('kd event.target.result:', event.target.result)
      setFileData(event.target.result)
      const {columns, rows } = extractDataFromCsvFile(event.target.result)
      console.log('kd rows:', rows)
      console.log('kd columns:', columns)
      // pass rows and columns to reactDataGrid
    }
    reader.readAsText(file)
  }

  const paserXlsxFile = () => {
    if (!file) {
      alert('No File Selected')
      return
    }

    readXlsxFile(file).then((rows) => {
      console.log('kd file:', file)
      // Process the parsed rows here
      console.log('rows = ', rows);
    }).catch((error) => {
      // Handle any errors that occur during parsing
      console.error(error);
    });
  }


  return (
    <div>
      <h2>CSV / XLSX</h2>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={detectFileType}>Parse File</button>
      <hr />
      {showCsvParser ? <CsvParser file={file} /> : <></>}
    </div>  
    );
}
 
export default XlsxCsvEditor;