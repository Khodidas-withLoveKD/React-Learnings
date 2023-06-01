// import { useState } from "FileAPI";
import { useState } from "react";

import RenderTable from "./RenderTable";
import ReactDataGrid from "./ReactDataGrid";

const XlsxCsvEditor = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    console.log('kd event.target.files[0]:', event.target.files[0])
  }

  const parseFile = () => {
    if (!file) {
      alert('No File Selected')
      return
    }

    // csv reading
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log('kd event.target.result:', event.target.result)
      setFileData(event.target.result)
    }
    reader.readAsText(file)
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange}/>
      <br />
      <button onClick={parseFile}>Parse File</button>
      {fileData.length && <pre><RenderTable fileData={fileData} /></pre>}
      <ReactDataGrid/>
    </div>  
    );
}
 
export default XlsxCsvEditor;