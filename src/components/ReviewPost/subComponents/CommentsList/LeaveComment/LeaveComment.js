import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';

class LeaveComment extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	 		email:'',
	 		emailLabel: 'Write an email',
	 		emailLabelError: false,
	 		text: '',
	 		emailValidation: false,
	    }

	}

	handleChangeEmail = name => event => {
		  this.setState({ [name]: event.target.value });   
		  let emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		  if(emailValid === null){
		  	this.setState({
		  		emailLabel: 'Email is required',
		  		emailLabelError: true,
		  	}); 
		  }else{
		  	this.setState({
		  		emailLabel: 'Write an email', 
		  		emailValidation: true,
		  		emailLabelError: false,
		  	});
		  }
		  if(!event.target.value.length){
		  		this.setState({
		  		emailLabel: 'Write an email', 
		  		emailValidation: false,
		  		emailLabelError: false,
		  	})
		  }  
	};

	handleChangeText = name => event => {
		this.setState({ [name]: event.target.value });   	 
	};

	handleAddComment = () => () =>{
		if (this.state.emailValidation === true && this.state.text.length){
			let comment = {
				postId: this.props.isPostID,
				id: uuid(),
				email: this.state.email,
				body: this.state.text,
			};
			this.props.addNewComment(comment);
			this.setState({
		 		email:'',
		 		emailLabel: 'Write an email',
		 		emailLabelError: false,
		 		text: '',
		 		emailValidation: false,
		    })
		}
		
	}

  render() {

    return (
        <div className="leaveComment_wrap">
        	<div className="email_wrap">
		        <label className={this.state.emailLabelError ? "email_error" : "email"} htmlFor="comment_email">{this.state.emailLabel}</label>
		        <input 
		        	id="comment_email" 
		        	value={this.state.email} 
		        	type="email"
					onChange={this.handleChangeEmail('email')}
		        	/>
	        </div>
	        <div className="text_wrap">
		        <label className="" htmlFor="comment_text">Write a comment</label>
		        <input 
		        	id="comment_text" 
		        	value={this.state.text} 
		        	type="text"
					onChange={this.handleChangeText('text')}
		        	/>
	        </div>
	        <button onClick={this.handleAddComment()}className="comment_btn" type="button">Add a comment</button>

      	</div>
    );
  }
}


const mapStateToProps = (state) => ({
  isPostID: state.isMainState.postID,
});

export default connect(mapStateToProps, null)(LeaveComment);