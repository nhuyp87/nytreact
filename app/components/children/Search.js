// Include React & Axios
import React from ("react");
import axios from ("axios");


// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


// Create the Main component
class Search extends React.Component {
   
  // Here we set a generic state associated with the text being searched for
    getInitialState() {
        return { term: "" };
    }

    handleChange(event) {
        this.setState({ term: event.target.value });
    }

    handleSubmit(event){
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(this.state.term);
        this.setState({ term: "" });
    }

    // Here we render the component
    render() {


        return (
            <div className="container">
                {/* Panel Heading */}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search</h3>
                    </div>
                    {/* Panel body & Beginning of form */}
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input type="email" className="form-control" id="newsTopic" placeholder="Enter News Topic" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-year">Start Year</label>
                                <input type="text" className="form-control" id="startYear" placeholder="Start Year" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-year">End Year</label>
                                <input type="text" className="form-control" id="endYear" placeholder="End Year" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div> // Closes container
        );
    }
};

// Export the component back for use in other files
export default Search;
