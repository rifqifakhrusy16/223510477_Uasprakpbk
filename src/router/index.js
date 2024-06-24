import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/task1',
    name: 'Task1',
    component: { template: '<iframe src="https://rifqi-project-cv.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task2',
    name: 'Task2',
    component: { template: '<iframe src="https://rifqifakhrusy-223510477.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task3',
    name: 'Task3',
    component: { template: '<iframe src="https://rifqifakhrusy-tugas3pbk.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task4',
    name: 'Task4',
    component: { template: '<iframe src="https://rifqifakhrusy-223510477-tugas4prakpbk.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task5',
    name: 'Task5',
    component: { template: '<iframe src="https://rifqifakhrusy-223510477-tugas5prakpbk.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task6',
    name: 'Task6',
    component: { template: '<iframe src="https://223510477-tugas6prakpbk.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  },
  {
    path: '/task7',
    name: 'Task7',
    component: { template: '<iframe src="https://223510477-tugas7prakpbk.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
