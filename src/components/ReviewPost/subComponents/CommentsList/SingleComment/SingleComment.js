import React from 'react';

const SingleComment = ({creator, text}) => (
      <div className="comments">
         <p className="comments_creator"><span>Author:</span> {creator}</p>
         <p className="comments_text"><span>Comment:</span> {text}</p>
      </div>
);

export default SingleComment;