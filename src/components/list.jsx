var React = require('react');
var listitem = require('./listitem.jsx');


var ingredient = [{"id":1 , "text":"Mango"},{"id":2 , "text":"Mango"}];

  var list = react.createClass({
      render:function(){
        var listitem = ingredient.map(function(item){
          return<listitem key={item.id} ingredient={item.text}/>;

        });

        return(<ul>{listitem}</ul> );
      }

  });
module.exports = list;
