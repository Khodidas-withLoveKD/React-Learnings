import { useEffect, useState } from "react"
import React from "react"
import { textEditor } from "react-data-grid"

import ReactDataGrid from "./ReactDataGrid"

interface ICsvParser {
  file: File
}

interface IColumnForReactDataGrid {
  key: string;
  name: string;
  
}

const CsvParser = (props: ICsvParser) => {
  const { file } = props

  const [columns, setColumns] = useState<Array<any>>([])
  const [rows, setRows] = useState<Array<any>>([])

  useEffect(() => {
    // const startTime = performance.now()
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target) {
        const { extractedRows, extractedColumns } = extractDataFromCsvFile(event.target.result as string)

        generateRowAndColumsForReactDataGrid(extractedRows, extractedColumns)
        // console.log(`Time taken = ${(startTime - performance.now()) / 1000} seconds`)
      }
    }
    reader.readAsText(file)
  }, [])

  const extractDataFromCsvFile = (fileData: string) => {
    const fileRows = fileData.split('\n')
    // console.log('kd fileRows:', fileRows)
  
    const extractedColumns = fileRows[0].split(',')
    // console.log('kd columns:', columns)
    const extractedRows = fileRows.splice(1)
    // console.log('kd rows:', rows)
  
    return {extractedRows, extractedColumns}
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
      rows.forEach((row: string, rowIndex: number) => {
        const cellValues = row.split(',')
        const rowObject:any = {}
        cellValues.forEach((cellValue: string, index:number) => {
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
 
export default CsvParser;
