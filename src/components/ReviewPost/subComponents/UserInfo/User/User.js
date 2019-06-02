import React from 'react';

const User = ({name, username, phone, website, email, company, city, suite, zipcode}) => (
      			<div className="user_info">
					<div className="user_content">
						<p><span>Name: </span>{name}</p>
						<p><span>Username: </span>{username}</p>
						<p><span>Phone: </span>{phone}</p>
						<p><span>Website: </span>{website}</p>
						<p><span>Email: </span>{email}</p>
					</div>
					<div className="user_content">
						<p><span>Company: </span>{company}</p>
						<p><span>City: </span>{city}</p>
						<p><span>Suite: </span>{suite}</p>
						<p><span>Zipcode: </span>{zipcode}</p>
					</div>
				</div>
);

export default User;