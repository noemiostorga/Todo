var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ListBox= React.createClass({
	render: function () {
		return (
			<div className="commentbox">
			<h1>comments</h1>
			<CommentList />
			<CommentForm />
			</div>


		)
	}


});

module.exports= ListBox;
