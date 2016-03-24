import { Link } from 'react-router';
import React from 'react';

export default () => {
    return (
      <div>
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
};
