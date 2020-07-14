import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  thead {
    background: #ff9b8c;
    color: #222;
    th {
      font-size: 16px;
      font-weight: 700;
    }
  }
  td,
  th {
    padding: 8px;
  }
  tbody {
    tr {
      td {
        color: #464646;
        border-bottom: 1px solid #c7bfbf;
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  }
`;

export default TableWrapper;
