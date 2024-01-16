import { useStyletron } from 'baseui';
import { useState } from 'react';
import DataGrid, { Column, textEditor } from 'react-data-grid';

// import 'react-data-grid/dist/react-data-grid.css';
import 'react-data-grid/lib/styles.css';

enum reactDataGridCssKeys {
  FONT_SIZE = '--rdg-font-size',
  COLOR = '--rdg-color',
  BACKGROUND_COLOR = '--rdg-background-color',
  BORDER_COLOR = '--rdg-border-color',
  ROW_HOVER_BACKGROUND_COLOR = ' --rdg-row-hover-background-color',
  HEADER_BACKGROUND_COLOR = '--rdg-header-background-color'
}

interface Row {
  id: number;
}

interface IReactDataGrid {
  columns: Array<any>;
  rows: Array<any>;
  setRows: (rows: any[]) => void;
  // setRows: typeof useState;
}

// const ReactDataGrid = (props: IReactDataGrid) => {
const ReactDataGrid = (props: IReactDataGrid) => {
  // const { columns, rows, setRows } = props
  const [css, theme] = useStyletron()

  const  {COLOR, BACKGROUND_COLOR, BORDER_COLOR, ROW_HOVER_BACKGROUND_COLOR, HEADER_BACKGROUND_COLOR, FONT_SIZE } = reactDataGridCssKeys

  const goodCss = css({
    [COLOR]: 'green',
    [BACKGROUND_COLOR]: 'cyan',
    [BORDER_COLOR]: 'grey',
    [ROW_HOVER_BACKGROUND_COLOR]: 'pink',
    [HEADER_BACKGROUND_COLOR]: 'lime',
    [FONT_SIZE]: '20px',
    width: '1000px',
  })

  const completedCss = css({
    color: 'green',
    backgroundColor: 'lime'
  })

  const pendingCss = css({
    color: 'red',
    backgroundColor: 'orange'
  })

  const columns: Array<Column<any>> = [
    {
      key: 'status',
    name: 'Status',
    // cellClass: ({ value } : {value:any}) => {
    formatter: ({row}) => {
      console.log('kd row:', row)
      let cellClass
      if (row.status === 'Completed') {
        cellClass = completedCss;
      } else if (row.status === 'Pending') {
        cellClass = pendingCss;
      }

      return <div className={cellClass}>{row.status}</div>;
    },
  },
  ]

  const rows = [
    { id: 1, status: 'Completed' },
    { id: 2, status: 'Pending' },
    // Add more data rows as needed
  ];

  return <DataGrid 
    className={goodCss} columns={columns} rows={rows}
    // onRowsChange={setRows}
    />;
}
 
export default ReactDataGrid;