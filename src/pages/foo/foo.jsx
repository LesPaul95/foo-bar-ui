import React from "react";
import './foo.css';

export class FooPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
	}

	render() {
		const {users} = this.props;
		return (
			<div className='foo-page'>
				{users.map(el => (
      		<div className='user-item' key={el.id}>
      		  <div>{el.username}</div>
      		  <div>{el.name}</div>
      		  <div>{el.email}</div>
      		</div>
			))}
		</div>
	)}
}
