<script setup>
import { ref } from 'vue';
import supabase from '../supabase';
import { useRouter } from 'vue-router';
const router = useRouter();

const email = ref('');
const password = ref('');
const tel = ref('');
const name = ref('');
const address = ref('');
const text = ref('');
const isLoading = ref(false);

const handlesignup = async () => {
  isLoading.value = true; //서버 요청 시작
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if(error) {
    alert(error.message)
  }else {
    console.log('회원가입 성공')
    const { error } = await supabase
    .from('user_table') //테이블 명
    // 자료추가
    // id는 회원가입한 사용자의 정보 auth.user 테이블에서 외래키로 자동 가져옴
    // 자료명: 값 만 추가하면 된다
    .insert({ 
      tel: tel.value,
      name: name.value,
      address: address.value,
      text: text.value,
     })
     if(error) { 
        alert('에러')
        console.log(error)
     } else {
      alert('회원가입 성공')
      isLoading.value = false; // 서버 요청 완료
      router.push('/')
     }
  }
};
</script>

<template>
  <div class="loading_info" v-if="isLoading">회원가입 처리중...</div>
  <h1>SignUp</h1>
  <div class="form-container">
    <form @submit.prevent="handlesignup">
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
      <div class="form-group">
        <label for="tel">Phone</label>
       <!-- 타입이 tel이라는게 있음, 변수명이 아니라 -->
        <input 
          type="tel" 
          id="tel" 
          placeholder="010-1234-5678"
          required
          v-model="tel"
        />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="이름 입력"
          required
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input 
          type="text" 
          id="address" 
          placeholder="주소 입력"
          required
          v-model="address"
        />
      </div>
      <div class="form-group">
        <label for="text">자기소개</label>
        <textarea 
          type="text" 
          id="text" 
          v-model="text"
        />
      </div>
      <!-- type을"submit"으로 하면 제출이 됨 -->
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<style lang="scss">
 @use "../style/form.scss";

.loading_info {
  position: fixed;//화면 고정
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.7);
  color: #fff;
  display: grid;
  place-items: center;
}
</style>
