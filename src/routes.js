import React from 'react';
import { Content } from './modules/content';
import { FooPage } from './pages/foo';
import { BarPage } from './pages/bar';
import { Home } from "./pages/home";

export const routes = [
  {
    component:
      <Content
        title="/foo"
        render={props => (
          <FooPage users={props.users} fetchUsers={props.fetchUsers} />
        )}
      />
    ,
    path: "/foo"
  },
  {
    component: 
			<Content
        title="/bar"
        render={props => (
          <BarPage
            users={props.users}
            fetchUsers={props.fetchUsers}
            todos={props.todos}
						fetchTodos={props.fetchTodos}
						fetchError={props.fetchError}
				/>
			)}
		/>,
    path: "/bar"
  },
  {
    component: <Content title="/home" render={props => <Home />} />,
    path: "/"
  }
];