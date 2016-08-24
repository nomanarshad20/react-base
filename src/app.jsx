var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container.jsx');


var App = React.createClass({
    render: function(){
      var bg = {background:'pink',padding:'10px'}
        return (
          <div>
            this is app from jsx:

            <Container />
            sdfkasdfjasldfjal
          </div>

        );
    }
});



ReactDOM.render(
    <App />,
    document.getElementById('app')
);
