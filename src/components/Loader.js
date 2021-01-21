import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  display: block;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const SpinnerSmall = styled.div`
  border: 5px solid #f3f3f3;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Loader = ({showSpinner}) => {
  console.log(showSpinner);
  return(<section>
    { showSpinner ? <Overlay><Spinner /> </Overlay>: '' }
  </section>);
}
export default Loader;

Loader.propTypes = {
  showSpinner: PropTypes.bool.isRequired
}

Loader.defaultProps = {
  showSpinner: false
}