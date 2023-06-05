import { useStyletron } from 'baseui';
import { useState } from 'react';
import DataGrid, { Column, textEditor } from 'react-data-grid';

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

const ReactDataGrid = (props: IReactDataGrid) => {
  const { columns, rows, setRows } = props
  const [css, theme] = useStyletron()

  const  {COLOR, BACKGROUND_COLOR, BORDER_COLOR, ROW_HOVER_BACKGROUND_COLOR, HEADER_BACKGROUND_COLOR, FONT_SIZE } = reactDataGridCssKeys
  // const columns: Column<Row>[] = [
  //   { key: 'serialNo', name: '', frozen: true},
  //   { key: 'id', name: 'ID', width: 'max-content', resizable: false},
  //   { key: 'title', name: 'Title', width: 'max-content',
  //     resizable: true,
  //     // editable: false,
  //     editor: textEditor,
  // },
  //   { key: 'key4', name: 'key4',editor: textEditor,},
  //   { key: 'key5', name: 'key5'},
  //   { key: 'key6', name: 'key6'},
  // ];
  
  // const [rows, setRows] = useState<Array<any>>([
  //   { serialNo: '1', id: 0, title: 'Example' },
  //   { serialNo: '2', id: 1, title: 'Demo' },
  //   { serialNo: '1', id: 2, title: 'Exampleeeeeeeeeeee' },
  //   { serialNo: '2', id: 3, title: 'Demo' },
  //   { serialNo: '1', id: 4, title: 'Example' },
  //   { serialNo: '2', id: 5, title: 'Demo' },
  //   { serialNo: '1', id: 6, title: 'Example' },
  //   { serialNo: '2', id: 7, title: 'Demo' },
  //   { serialNo: '1', id: 8, title: 'Example' },
  //   { serialNo: '2', id: 9, title: 'Demo' },
  //   { serialNo: '1', id: 10, title: 'Example' },
  //   { serialNo: '2', id: 11, title: 'Demo' }
  // ]);


  const goodCss = css({
    [COLOR]: 'green',
    [BACKGROUND_COLOR]: 'cyan',
    [BORDER_COLOR]: 'grey',
    [ROW_HOVER_BACKGROUND_COLOR]: 'pink',
    [HEADER_BACKGROUND_COLOR]: 'lime',
    [FONT_SIZE]: '20px',
    width: '1000px',
  })

  return <DataGrid 
    className={goodCss} columns={columns} rows={rows}
    onRowsChange={setRows}
    />;
}
 
export default ReactDataGrid;