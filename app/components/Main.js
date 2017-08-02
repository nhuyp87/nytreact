// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

    // Here we render the component
    render: function () {

        return (
            <div className="container">

                <div className="jumbotron">
                    <h1>NYT Article Scrubber</h1>
                    <p><em>Search and annotate articles of interest.</em></p>
                    <Link to="/info"><button className="btn btn-default">Info</button></Link>
                </div>


                <div className="row">

                    {/* Added this.props.children to dump all of the child components into place */}
                    {this.props.children}

                </div>


            </div> // Closes container
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
