import React, { memo } from 'react';

import TableWrapper from './style';

function getAlign(align) {
  return {
    textAlign: align,
  };
}

function getTd(item, itemColumn) {
  if (itemColumn.render) {
    return itemColumn.render(item[itemColumn.dataIndex], item);
  }
  return item[itemColumn.dataIndex];
}

const Table = memo(({ columns, dataSource }) => (
  <TableWrapper cellSpacing="0">
    <thead>
      {columns.map(item => (
        <th style={getAlign(item.align)} key={item.key}>{item.title}</th>
      ))}
    </thead>
    <tbody>
      {dataSource.map(item => (
        <tr key={item.id}>
          {columns.map(itemColumn => (<td style={getAlign(itemColumn.align)}>{getTd(item, itemColumn)}</td>))}
        </tr>
      ))}
    </tbody>
  </TableWrapper>
));

export default Table;
