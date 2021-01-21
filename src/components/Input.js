import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Input = ({handleChange}) => {

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <section className="input-group input-group-lg mb-3">
      <input
          type="text"
          className="form-control"
          autoFocus
          ref={textInput}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Search By City"
          onChange={e => handleChange(e)}
        />
    </section>
  );
}

export default Input;

Input.propTypes = {
  handleChange: PropTypes.func.isRequired
}