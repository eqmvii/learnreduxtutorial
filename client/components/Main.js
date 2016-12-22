import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <div id="instagram">
        <h1>
          <Link to="/">Ericstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
        </div>
        <div id="footer">
          <p>Page designed from learnredux.com tutorial</p>
        </div>

      </div>
    )
  }
});

export default Main;
