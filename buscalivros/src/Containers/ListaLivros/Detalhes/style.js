import styled from 'styled-components';

const DetalhesWrapper = styled.div`
  .autor-editora {
    margin-top: 5px;
    display: flex;
    > div {
      flex: 1;
    }
  }
  .caracteristicas {
    border-top: 1px solid #ddd;
    margin-top: 5px;
    padding-top: 5px;
    > div {
      display: flex;
      > div {
        flex: 1;
        margin-top: 5px;
      }
    }
  }
`;

export default DetalhesWrapper;
