import React, { PropTypes } from 'react';

// app is a presentational component here

const App =  ({ onClick }) => {
    return (
      <div className = "main-div" onClick = {onClick}>
        Click anywhere to dispatch an action
      </div>
    );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default App;
