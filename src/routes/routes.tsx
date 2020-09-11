/**
 *
 * React-Router-Dom
 * - Route Config 방식으로 라우팅을 한다.
 *
 */
import { lazy } from 'react'

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('../pages/Main')),
    routes: [],
    state: {},
  },
  {
    path: '/movie',
    label: 'Movie',
    component: lazy(() => import('../pages/Movie')),
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
    label: 'Skill',
    component: lazy(() => import('../pages/Skill')),
    routes: [],
    props: {},
  },
  {
    path: '/work',
    label: 'Work',
    component: lazy(() => import('../pages/Work')),
    routes: [],
    props: {},
  },
  {
    path: '/contact',
    label: 'Contact',
    component: lazy(() => import('../pages/Contact')),
    routes: [
      {
        path: '/contact',
        exact: true,
        isPrivate: true,
        label: 'Contact/Home',
        component: lazy(() => import('../pages/Contact/containers/Home')),
      },
      {
        path: '/contact/auth',
        label: 'Contact/Auth',
        component: lazy(() => import('../pages/Contact/containers/Auth')),
      },
      {
        path: '/contact/editProfile',
        label: 'Contact/EditProfile',
        isPrivate: true,
        component: lazy(
          () => import('../pages/Contact/containers/EditProfile'),
        ),
      },
      {
        path: '/contact/profile',
        label: 'Contact/Profile',
        isPrivate: true,
        component: lazy(() => import('../pages/Contact/containers/Profile')),
      },
    ],
    props: {},
  },
]

export default routes
