import { useState } from "react";
import readXlsxFile from 'read-excel-file';

import { extractDataFromCsvFile } from "./editorHelper";
import ReactDataGrid from "./ReactDataGrid";
import RenderTable from "./RenderTable";

const XlsxCsvEditor = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const parseCSVFile = () => {
    if (!file) {
      alert('No File Selected')
      return
    }

    // csv reading
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log('kd event.target.result:', event.target.result)
      setFileData(event.target.result)
      const {columns, rows } = extractDataFromCsvFile(event.target.result)
      console.log('kd rows:', rows)
      console.log('kd columns:', columns)
    }
    reader.readAsText(file)
  }

  const paserXlsxFile = () => {
    if (!file) {
      alert('No File Selected')
      return
    }

    readXlsxFile(file).then((rows) => {
      // Process the parsed rows here
      console.log('rows = ', rows);
    }).catch((error) => {
      // Handle any errors that occur during parsing
      console.error(error);
    });
  }


  return (
    <div>
      <h2>CSV</h2>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={parseCSVFile}>Parse File</button>
      {/* {fileData.length && <pre><RenderTable fileData={fileData} /></pre>} */}
      <hr />
      <h2>XLSX</h2>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={paserXlsxFile}>Parse File</button>
      {/* {fileData.length && <pre><RenderTable fileData={fileData} /></pre>} */}
      <hr />
      <h2>react-data-grid</h2>
      <ReactDataGrid/>
    </div>  
    );
}
 
export default XlsxCsvEditor;