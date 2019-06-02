import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import SingleComment from './SingleComment/SingleComment';
import LeaveComment from './LeaveComment/LeaveComment';

class CommentsList extends Component {


  constructor(){
    super();

    this.state = {
      comments: [],
    };
   
   this.addNewComment = this.addNewComment.bind(this);

  }  


  static getDerivedStateFromProps(nextProps, prevState) { 
      if (JSON.parse(localStorage.getItem('comments'))){
      let localComments = JSON.parse(localStorage.getItem('comments'));
      let filterlocalComments = localComments.filter(
            (item)=>{
              // console.log('item -- ', item)
              return String(item.postId).indexOf(nextProps.isIdPost) !== -1;
            }
      );
      let newComments = filterlocalComments.concat(nextProps.isComments);
      return {
          comments: newComments
        }
 
    }else{
      return {
        comments: nextProps.isComments
      }
    }
  }

  


  addNewComment(comment){
    if(JSON.parse(localStorage.getItem('comments'))){
      let localComments = JSON.parse(localStorage.getItem('comments'));
      localComments.unshift(comment);
      localStorage.setItem("comments", JSON.stringify(localComments));
    }else{
      localStorage.setItem("comments", JSON.stringify([comment]));
    }
    this.setState({ comments: this.state.comments}); 
  }


  render() {

    return (
      <div className="comments_wrapper">
        <h2>Comments</h2>
        <LeaveComment addNewComment={this.addNewComment}/>
        {this.props.isComments.length > 0 ? this.state.comments.map(comment => (
            <SingleComment
              key={uuid()}
              creator={comment.email}
              text={comment.body}
            /> 
        )) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isComments:  state.isMainState.comments,
  isIdPost: state.isMainState.postID,
});

export default connect(mapStateToProps, null)(CommentsList);