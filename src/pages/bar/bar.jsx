import React from 'react';
import { TodoItem } from '../../components/todo-item';
import { ErrorButton } from '../../components/error-button';
import './bar.css';

export class BarPage extends React.Component {
  async componentDidMount() {
    await this.props.fetchUsers();
    this.props.fetchTodos();
	}

	render() {
		const { todos, users, fetchError } = this.props;
		return (
      <>
        <ErrorButton handleClick={fetchError} label="Test error" />
        {todos.map(el => {
          const user =
            users &&
            users.length > 0 &&
            users.find(user => el.userId === user.id);
          return (
            <TodoItem
              key={el.id}
              title={el.title}
              user={user.name}
              completed={el.completed}
            />
          );
        })}
      </>
    );}
}
