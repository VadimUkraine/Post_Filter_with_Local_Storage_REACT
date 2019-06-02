import React, { Component } from 'react';
import SinglePost from './subComponents/SinglePost/SinglePost';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/mainActions';
import * as uuid from 'uuid/v4';


class PostsList extends Component {

  componentDidMount() {
      this.props.getAllPosts();
  }

  constructor(){
    super();

    this.state = {
      search: '',
    };   
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };





  render() {

    const filterPosts = this.props.isPosts.filter(
        (post)=>{
          return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || post.body.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    );
 


    return (
         <main className="wrapper">
            <header>
              <h1>List of Posts</h1>
              <input type="text" placeholder="Search..." value ={this.state.search} onChange={this.handleChange('search')} />
            </header>
            {filterPosts.length ? (filterPosts.map(post => (
                <SinglePost
                  key={uuid()}
                  userID={post.userId}
                  postID={post.id}
                  title={post.title}
                />
              )))
              : null
            }
            {this.props.isError && <div className="error_msg">Error in data</div>}
          </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isPosts: state.isMainState.posts,
  isError: state.isMainState.error,

});

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(actions.getAllPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);   