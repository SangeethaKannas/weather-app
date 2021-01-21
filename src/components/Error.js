import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
  console.log(error);

  return(<section>
    {error && error.length > 0 ? <div className="alert alert-danger" role="alert">
      {error}
    </div>
    : <div></div>}
  </section>);
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired
}

Error.defaultProps = {
  error: ''
}
