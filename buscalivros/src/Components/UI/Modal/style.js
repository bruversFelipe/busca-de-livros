import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: center;

  .content-modal {
    width: 600px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: 2px 4px 10px #aaa;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        border-bottom: 1px solid #ddd;
        flex: 1;
        padding: 5px;
        margin-bottom: 5px;
        font-size: 18px;
      }

      i {
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .body {
      padding: 24px;
    }
  }
`;

export default ModalWrapper;
