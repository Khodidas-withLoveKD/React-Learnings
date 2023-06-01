import { useStyletron } from 'baseui';
import DataGrid from 'react-data-grid';

import 'react-data-grid/lib/styles.css';

enum reactDataGridCssKeys {
  FONT_SIZE = '--rdg-font-size',
  COLOR = '--rdg-color',
  BACKGROUND_COLOR = '--rdg-background-color',
  BORDER_COLOR = '--rdg-border-color',
  ROW_HOVER_BACKGROUND_COLOR = ' --rdg-row-hover-background-color',
  HEADER_BACKGROUND_COLOR = '--rdg-header-background-color'
}

const ReactDataGrid = () => {
  const [css, theme] = useStyletron()

  const  {COLOR, BACKGROUND_COLOR, BORDER_COLOR, ROW_HOVER_BACKGROUND_COLOR, HEADER_BACKGROUND_COLOR, FONT_SIZE } = reactDataGridCssKeys
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];
  
  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];

  const goodCss = css({
    [COLOR]: 'green',
    [BACKGROUND_COLOR]: 'cyan',
    [BORDER_COLOR]: 'grey',
    [ROW_HOVER_BACKGROUND_COLOR]: 'blue',
    [HEADER_BACKGROUND_COLOR]: 'lime',
    [FONT_SIZE]: '20px'
  })

  return <DataGrid className={goodCss} columns={columns} rows={rows} />;
}
 
export default ReactDataGrid;