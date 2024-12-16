<script setup>
import { ref } from 'vue';
import supabase from '../supabase';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoading = ref(false);
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  isLoading.value = true; //서버 요청 시작
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if(error) {
    alert(error.message)
  }else {
    alert('로그인 성공')
    isLoading.value = false; // 서버 요청 완료
    router.push('/job-list')
  }
}
</script>

<template>
  <div class="loading_info" v-if="isLoading">로그인 처리중...</div>
  <h1>Login</h1>
  <div class="form-container">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <!-- for라는 속성은 id를 가리킴(접근성 정보) -->
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="이메일 입력" 
          required
          v-model="email"
          />
        <!-- required는 필수입력 항목이라는 뜻 -->
      </div>

      <div class="form-group">
        <label for="password">Password</label>
       
        <input 
          type="password" 
          id="password" 
          placeholder="비밀번호 입력"
          required
          v-model="password"
        />
      </div>
      <!-- type을"submit"으로 하면 제출이 됨 -->
      <button type="submit">로그인</button>
      <!-- router-link는 다이나믹 링크, 새로고침없이 빠르게 이동 
      하이퍼링크로도 대체가능 -->
      <router-link to="/signup">회원가입</router-link>
    </form>
  </div>
</template>

<style scoped lang="scss">
  @use "../style/form.scss" 
</style>
