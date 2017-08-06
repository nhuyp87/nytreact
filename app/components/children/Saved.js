// Include React & Axios
import React from ("react");
import axios from ("axios");


// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
class Saved extends React.Component {

    getInitialState(){

    }

    // Here we render the component
    render() {

        return (
            <div className="container">

                 <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Saved Articles</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            </div> // Closes container
        );
    }
};



// Export the component back for use in other files
export default Saved;
