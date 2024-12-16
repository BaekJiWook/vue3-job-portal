// createRouter : 라우터를 생성하는 함수
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../view/Login.vue'
import SignUp from '../view/SignUp.vue'
import JobPost from '../view/JobPost.vue'
import JobList from '../view/JobList.vue'
import JobDetail from '../view/JobDetail.vue'
import UserProfile from '../view/UserProfile.vue'
import JobPostUpdated from '../view/JobPostUpdated.vue';

// path: 경로(소문자,하이픈 이용), component:연결할 컴포넌트 명
const routes = [
  { 
    path: '/', 
    component: Login 
  },
  { 
    path: '/signup', 
    component: SignUp 
  },
  { 
    path: '/job-post', 
    component: JobPost
  },
  { 
    path: '/job-list', 
    component: JobList
  },  
  { 
    path: '/job-detail/:id', 
    component: JobDetail
  },
  { 
    path: '/user-profile', 
    component: UserProfile
  },
  { 
    path: '/job-post-updated/:id', 
    component: JobPostUpdated
  },
]
//라우터 생성
// createWebHistory: 다이나믹 라우팅 사용(기본 옵션) 경로와 컴포넌트를 연결
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//main.js에서 사용하기 위해 내보내기 
export default router
