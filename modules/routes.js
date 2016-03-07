import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute, lazy } from 'react-project'

import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import loadClassrooms from 'bundle?lazy!./components/Classrooms'
import loadClassroom from 'bundle?lazy!./components/Classroom'
import { listClassrooms, createClassroom, getClassroom, updateClassroom, destroyClassroom } from './api/classrooms'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="classrooms" getComponent={lazy(loadClassrooms)}/>
      <Route path="classroom/:id" getComponent={lazy(loadClassroom)}/>
    </Route>
    <Route path="/api">
      <ServerRoute path="classrooms"
        get={listClassrooms}
        post={createClassroom}
      >
        <ServerRoute path=":id"
          get={getClassroom}
          patch={updateClassroom}
          delete={destroyClassroom}
        />
      </ServerRoute>
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
