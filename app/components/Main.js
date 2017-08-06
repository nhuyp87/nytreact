// Include React & Axios
import React from ("react");
import axios from ("axios");


class Main extends React.Component{
  // Here we render the function
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2><strong>NYT Article Scrubber</strong></h2>
          <p><em>Search and annotate articles of interest.</em></p>
        </div>
        <div className="row">
          {/* This code will dump the correct Child Component */}
          {this.props.children}
        </div>
      </div>
    );
  }
};
// Export the component back for use in other files
export default Main;


