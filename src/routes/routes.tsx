/**
 *
 * React-Router-Dom
 * - Route Config 방식으로 라우팅을 한다.
 *
 */
import {lazy}from 'react'




const routes = [
  {
    path: '/',
    label:"Home",
    exact:true,
    component: lazy(()=>import("../Pages/Main")),
    routes: [],
    state: {},
  },
  {
    path: '/movie',
    label:"Movie",
    component: lazy(()=>import("../Pages/Movie")),
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
    label:"Skill",
    component: lazy(()=>import("../Pages/Skill")),
    routes: [],
    props: {},
  },
  {
    path: '/work',
    label:"Work",
    component: lazy(()=>import("../Pages/Work")),
    routes: [],
    props: {},
  },
  {
    path: '/contact',
    label:"Contact",
    component: lazy(()=>import("../Pages/Contact")),
    routes: [],
    props: {},
  },
]

export default routes
