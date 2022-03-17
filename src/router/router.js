export default [
  {
    path: '/',   
    component: () => import('@/views/User/index')
  },
  {
    path: '/pair-up/:groupName',   
    component: () => import('@/views/PairUp/index')
  },
  {
    path: '/bidding/:groupName',   
    component: () => import('@/views/Bidding/index')
  }  
];


    