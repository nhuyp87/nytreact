// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// // Create the Main component
// var Saved = React.createClass({

//     // Here we render the component
//     render: function () {

//         return (
//             <div className="container">

//                  <div className="panel panel-default">
//                     <div className="panel-heading">
//                         <h3 className="panel-title">Saved Articles</h3>
//                     </div>
//                     <div className="panel-body">
//                         Panel content
//                     </div>
//                 </div>
//             </div> // Closes container
//         );
//     }
// });

var Saved = React.createClass({

  // // GrandChild has a state that follows the number of clicks
  // getInitialState: function() {
  //   return {
  //     number: 0
  //   };
  // },
  
  render: function() {
    return (
 
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Saved</h3>
        </div>
        <div className="panel-body text-center">

          {/* This component will multiply it's own number on "this.state" with it's parent's
          number on "this.props" and then display the result in the <h1> tag */}
          <h1>Test test</h1>
        </div>
      </div>

    );
  }
});


// Export the component back for use in other files
module.exports = Saved;
