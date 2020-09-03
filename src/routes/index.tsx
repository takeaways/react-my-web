/**
 *
 * React-Router-Dom
 * - Route Config 방식으로 라우팅을 한다.
 *
 */
import React from 'react'




const routes = [
  {
    path: '/main',
    component: '',
    routes: [],
    props: {},
  },
  {
    path: '/movie',
    component: '',
    routes: [
      {
        path: '/movie/:id',
        component: '',
      },
    ],
    props: {},
  },
  {
    path: '/skill',
    component: '',
    routes: [],
    props: {},
  },
  {
    path: '/work',
    component: '',
    routes: [],
    props: {},
  },
  {
    path: '/contact',
    component: '',
    routes: [],
    props: {},
  },
]

export default routes
