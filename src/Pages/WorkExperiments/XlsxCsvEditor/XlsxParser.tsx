import { useEffect, useState } from "react"
import React from "react"
import { textEditor } from "react-data-grid"
import readXlsxFile from 'read-excel-file';

import ReactDataGrid from "./ReactDataGrid"

interface IXlsxParser {
  file: File
}

interface IColumnForReactDataGrid {
  key: string;
  name: string;
  
}

const XlsxParser = (props: IXlsxParser) => {
  const { file } = props
  console.log('kd file:', file)

  const [columns, setColumns] = useState<Array<any>>([])
  const [rows, setRows] = useState<Array<any>>([])

  useEffect(() => {
    extractDataFromXlsxFileAndGenerateRowsAndColumns()
  }, [])

  const extractDataFromXlsxFileAndGenerateRowsAndColumns = () => {
    readXlsxFile(file).then((fileRows) => {
      // Process the parsed rows here
      const extractedColumns:any = fileRows[0]
      const extractedRows:any = fileRows.slice(1)
      // console.log('kd INSIDE extractedRows:', extractedRows)
      generateRowAndColumsForReactDataGrid(extractedRows, extractedColumns);
    }).catch((error) => {
      // Handle any errors that occur during parsing
      console.error("kd error: ", error);
    })
  }

  const generateRowAndColumsForReactDataGrid = (rows: Array<any>, columns:any) => {

    const generateColumns = () => {
      const columnsForReactDataGrid = [{
        key: 'rowNo', name: '', frozen: true, width: 'max-content'
      }]
      
      columns.forEach((columnName:any) => {
        const columnObject = {
          key: columnName,
          name: columnName,
          width: 'max-content',
          resizable: true,
          editable: false,
          editor: textEditor,
          frozen: false
        }
        columnsForReactDataGrid.push(columnObject)
      })
      setColumns(columnsForReactDataGrid)
    }

    const generateRows = () => {
      const rowsForReactDataGrid:any = []
      rows.forEach((row: [], rowIndex: number) => {
        // const cellValues = row.split(',')
        const rowObject:any = {}
        row.forEach((cellValue: string, index:number) => {
          rowObject[columns[index]] = cellValue
        })
        rowObject['rowNo'] = rowIndex + 1
        rowsForReactDataGrid.push(rowObject)
      })
      setRows(rowsForReactDataGrid)
    }

    generateColumns()
    generateRows()
  }

  return (<ReactDataGrid columns={columns} rows={rows} setRows={setRows}/>)
}
 
export default XlsxParser;
