import { lazy } from "react";
// const routers = [
//   {
//     path: "/home",
//     name: "home",
//     component: lazy(() => import("../pages/Home/index")),
//     meta: {
//       title: "home",
//     },
//     children: [
//       {
//         path: '/topList',
//         name: 'topList',
//         component: lazy(() => import('../pages/topList/index'))
//       },
//       {
//         path: '/playList',
//         name: 'playList',
//         component: lazy(() => import('../pages/playList/index'))
//       }
//     ],
//     hidden: false,
//   },
//   {
//     path: '/',
//     redirect: '/music',
//     hidden: true
//   },
//   // {
//   //   path: "/user/:id",
//   //   name: "user",
//   //   component: lazy(() => import("../pages/User/index")),
//   //   meta: {
//   //     title: "user",
//   //   },
//   //   hidden: false
//   // },
//   // {
//   //   path: '/music',
//   //   name: 'music',
//   //   component: lazy(() => import('../pages/music/index')),
//   //   meta: {
//   //     title: 'music'
//   //   },
//   //   hidden: false
//   // },
//   {
//     path: "/*",
//     name: "404",
//     component: lazy(() => import("../pages/NoMatch/index")),
//     meta: {
//       title: "404",
//     },
//     hidden: true
//   }
// ]
const routers = [
  {
    path: "/music",
    meta: {
      hidden: true,
      title: '音乐'
    },
    component: lazy(() => import('../pages/music/index')),
    name: "music",
    children: [
      { path: "/playList", name: "playList", exact: true, component: lazy(() => import('../pages/playList/index')) },
      { path: "/topList", name: "topList", exact: true, component: lazy(() => import('../pages/topList/index')) },
      { path: "/search", name: "search", exact: true, component: lazy(() => import('../pages/search/index')) },
      { path: "/historyList", name: "historyList", exact: true, component: lazy(() => import('../pages/historyList/index')) },
      { path: "/userList", name: "userList", exact: true, component: lazy(() => import('../pages/userList/index')) }
    ],
  },
  { path: '/demo', name: 'demo', component: lazy(() => import('../pages/demo/index.jsx')) },
  { path: "/", name: "home", component: lazy(() => import('../pages/Home/index')) },
];
export default routers;
