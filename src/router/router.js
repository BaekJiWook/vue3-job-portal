// createRouter : 라우터를 생성하는 함수
import { createRouter, createWebHashHistory } from 'vue-router';
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
// createWebHashHistory: Hash로 바꿈
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//main.js에서 사용하기 위해 내보내기 
export default router