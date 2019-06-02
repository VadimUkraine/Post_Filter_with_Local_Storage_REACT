import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './subComponents/UserInfo/UserInfo'
import CommentsList from './subComponents/CommentsList/CommentsList'


class ReviewPost extends Component {

  constructor(){
    super();

    this.state = {
      
    };
   
  }


  render() {
    
    return (
      <div className="review">
        {this.props.isloadComments && <UserInfo />}
        {this.props.isloadComments && <CommentsList/>}
        {this.props.isError && <div className="error_msg">Error in data</div>}
        {!this.props.isloadComments && <div className={!this.props.isloadComments ? "error_msg error_show" : "error_msg"}>Choosed a post?</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isComments:  state.isMainState.comments,
  isIdPost: state.isMainState.postID,
  isloadComments: state.isMainState.loadComments,
  isError: state.isMainState.error,
});

export default connect(mapStateToProps, null)(ReviewPost);