import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: relative;
  .loading-fade {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.6);
  }
  .loader {
    border: 5px solid #ddd;
    border-radius: 50%;
    border-top: 5px solid #f16550;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 25%;
    left: 45%;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingWrapper;
