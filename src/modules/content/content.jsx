import React from 'react';
import { connect } from "react-redux";
import { Title } from '../../components/title';
import { fetchUsers, fetchTodos, fetchError, resetStore } from './content-actions';
import './content.css';

class ContentComponent extends React.Component {
  render() {
		return (
      <>
        {!!this.props.error && (
          <div className="content">
            <h1>Sorry</h1>
            <p>We have an error</p>
            <p>Description: {this.props.error.message}</p>
            <button className="btn-error" onClick={this.props.resetStore}>
              Reload
            </button>
          </div>
        )}
        {!this.props.error && (
          <div className="content">
            <Title title={this.props.title} />
            {this.props.loading && <h2>Loading...</h2>}
            {this.props.render(this.props)}
          </div>
        )}
      </>
    );}
};

const mapStateToProps = state => ({
  users: state.content.users,
  todos: state.content.todos,
  loading: state.content.loading,
  error: state.content.error
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTodos: () => dispatch(fetchTodos()),
    fetchError: () => dispatch(fetchError()),
    resetStore: () => dispatch(resetStore())
  };
};

export const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent);
