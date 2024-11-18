import { createRouter, createWebHistory } from 'vue-router'
const Dashboard = () => import('@/views/Dashboard.vue');
const Others = () => import('@/views/Others.vue');

const routes =  [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/team',
    name: 'Team',
    component: Others
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Others
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Others
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Others
  },
  {
    path: '/report',
    name: 'Report',
    component: Others
  },
  {
    path: '/design',
    name: 'Design',
    component: Others
  },
  {
    path: '/engineering',
    name: 'Engineering',
    component: Others
  },
  {
    path: '/report/month-to-date',
    name: 'ReportMonthToDate',
    component: Others
  },
  {
    path: '/report/year-to-date',
    name: 'ReportYearToDate',
    component: Others
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
