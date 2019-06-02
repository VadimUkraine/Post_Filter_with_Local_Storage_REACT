import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/mainActions';


class SinglePost extends Component {

  constructor(){
    super();

    this.state = {
   
    };
   
  }

  handleClick = () => () => {
  	this.props.getUserCreator(this.props.userID);
    this.props.setPostID(this.props.postID);
  }


  render() {

    
    return (
      	<Link to={`/${this.props.postID}`} onClick={this.handleClick()}className="link" >{this.props.title}</Link>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserCreator: (id) => dispatch(actions.getUserCreator(id)),
    setPostID: (id) => dispatch(actions.setPostID(id)),
  };
}

export default connect(null, mapDispatchToProps)(SinglePost)