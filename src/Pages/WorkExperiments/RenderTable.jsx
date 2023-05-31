const RenderTable = ({ fileData }) => {
console.log('kd fileData:', fileData)

  const rows = fileData.split('\n')
  console.log('kd rows:', rows)

  const tableHeader = rows[0].split(',')
  console.log('kd tableHeader:', tableHeader)
  const tableBody = rows.splice(1)
  console.log('kd tableBody:', tableBody)

  const renderTableHeader = (
    <thead>
      <tr>
      {tableHeader.map((headerCell, index) => 
        <th key={`engt-inline-editor-header-${index}`}>{headerCell}</th>
        )}
        </tr>
    </thead>
  )

  const renderTableBody = (
    <tbody>
      {tableBody.map((tableRow, rowIndex) => 
        <tr key={`engt-inline-editor-row-${rowIndex}`}>
          {tableRow.split(',').map((cell, colIndex) => 
          <td key={`engt-inline-editor-row-${rowIndex}-col-${colIndex}`}>{cell}</td>)
        }
        </tr>
      )}
    </tbody>
  )

  return (  <>
    <table>
      {renderTableHeader}
      {renderTableBody}
    </table>
  </>);
} 
 
export default RenderTable;