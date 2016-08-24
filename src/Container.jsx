var React = require('react');

var Container = require('./Nav.jsx');
var Container = require('./Main.jsx');
var Container = require('./Fotter.jsx');





      var Container = React.createClass({
          render: function(){
            var bg = {background:'pink',padding:'10px'}
              return (
                <div>
                  this is Container
                </div>

              );
          }
      });

module.exports = Container;
