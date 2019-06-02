import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import User from './User/User';

class UserInfo extends Component {

  constructor(){
    super();

    this.state = {
   
    };
   
  }


  render() {

    const filterUsers = this.props.isUsers.filter(
        (user)=>{
          return Number(this.props.isCreator) === Number(user.id);
        }
    );
    
    return (
      <div className="user_wrapper">
      	<h2 className="user_title">User Info</h2>
        {filterUsers.map(item => (
        	<User 
        		key={uuid()}
    				name={item.name}
    				username={item.username}
    				phone={item.phone}
    				website={item.website} 
    				email={item.email}
    				company={item.company.name}
    				city={item.address.city}
    				suite={item.address.suite}
    				zipcode={item.address.zipcode}
        	/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isUsers: state.isMainState.users,
  isCreator: state.isMainState.userCreator,
});

export default connect(mapStateToProps, null)(UserInfo);