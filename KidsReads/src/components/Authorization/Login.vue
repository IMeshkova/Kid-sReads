<template>
  <div class="flex flex-row">
    <div
      class="h-[100vh] w-1/3 bg-[#FFA500] flex justify-end items-center relative"
    >
      <div class="flex flex-col text-right gap-y-4 items-end relative z-10">
        <div
          :class="[
            showLogin ? 'bg-white' : 'bg-transparent',
            'transition-bg',
            'w-fit',
            'p-4',
            'rounded-l-full',
            'outward-rounded',
          ]"
        >
          <button
            @click="
              showLogin = true;
              showRegister = false;
            "
          >
            <span
              :class="[
                showLogin ? 'text-black' : 'text-white',
                'text-[32px]',
                'font-[700]',
              ]"
              >Вхід</span
            >
          </button>
        </div>
        <div
          :class="[
            showRegister ? 'bg-white' : 'bg-transparent',
            'transition-bg',
            'p-4',
            'rounded-l-full',
            'outward-rounded',
          ]"
        >
          <button
            @click="
              showLogin = false;
              showRegister = true;
            "
          >
            <span
              :class="[
                showRegister ? 'text-black' : 'text-white',
                'text-[32px]',
                'font-[700]',
              ]"
              >Реєстрація</span
            >
          </button>
        </div>
      </div>
    </div>
    <div class="h-[100vh] w-2/3 bg-[#FFFFFF] flex justify-center items-center">
      <div
        v-if="showRegister"
        class="w-[50%] h-screen flex flex-col gap-y-8 justify-center items-left"
      >
        <div class="flex flex-col">
          <span class="text-[32px] font-[700]">Реєстрація</span>
          <span class="text-[18px] font-[500]"
            >З поверненням! Будь ласка введіть свої дані.</span
          >
        </div>
        <form
          class="bg-backdrop flex flex-col gap-y-3 items-left"
          @submit.prevent="Register"
        >
          <label for="name" class="font-bold">Ім’я</label>
          <input
            id="name"
            placeholder="Введіть своє ім’я"
            class="h-16 border-2 border-[#B2B2B2] rounded-2xl p-4"
            v-model.trim="name"
          />
          <label for="email" class="font-bold">Email</label>
          <input
            id="email"
            placeholder="Введіть свій email"
            class="h-16 border-2 border-[#B2B2B2] rounded-2xl p-4"
            v-model.trim="email"
          />
          <label for="pass" class="font-bold">Пароль</label>
          <input
            id="pass"
            type="password"
            placeholder="Придумайте пароль"
            class="h-16 border-2 border-[#B2B2B2] rounded-2xl p-4"
            v-model.trim="password"
          />
          <button
            class="p-4 mt-12 bg-[#FFA500] text-white rounded-2xl text-[20px] font-[500]"
          >
            Зареєструватись
          </button>
        </form>
        <button
          type="submit"
          class="p-1 bg-transparent border-2 border-[#B2B2B2] font-[700] text-[18px] rounded-2xl flex justify-center items-center gap-x-6"
        >
          <img src="/public/google.svg" /> Реєстрація разом з Google
        </button>
      </div>
      <div
        v-else-if="showLogin"
        class="w-[50%] h-screen flex flex-col gap-y-8 justify-center items-left"
      >
        <div class="flex flex-col">
          <span class="text-[32px] font-[700]">Вхід</span>
          <span class="text-[18px] font-[500]"
            >З поверненням! Будь ласка введіть свої дані.</span
          >
        </div>
        <form
          class="bg-backdrop flex flex-col gap-y-3 items-left"
          @submit.prevent="Login"
        >
          <label for="email" class="font-bold">Email</label>
          <input
            id="email"
            placeholder="Введіть свій email"
            class="h-16 border-2 border-[#B2B2B2] rounded-2xl p-4"
            v-model.trim="email"
          />
          <label for="pass" class="font-bold">Пароль</label>
          <input
            id="pass"
            type="password"
            placeholder="Придумайте пароль"
            class="h-16 border-2 border-[#B2B2B2] rounded-2xl p-4"
            v-model.trim="password"
          />
          <button
            class="p-4 mt-12 bg-[#FFA500] text-white text-[20px] font-[500] rounded-2xl"
          >
            Увійти
          </button>
        </form>
        <button
          type="submit"
          class="p-1 bg-transparent border-2 border-[#B2B2B2] font-[700] text-[18px] rounded-2xl flex justify-center items-center gap-x-6"
        >
          <img src="/public/google.svg" /> Вхід разом з Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const BASE_API = import.meta.env.VITE_BASE_API;

const email = ref("");
const password = ref("");
const name = ref("");
const showLogin = ref(true);
const showRegister = ref(false);

const emailError = ref("");
const passwordError = ref("");
const nameError = ref("");

function validateForm() {
  let isValid = true;

  if (!name.value.trim()) {
    nameError.value = "Please enter your name";
    isValid = false;
  } else {
    nameError.value = "";
  }

  if (!email.value.trim()) {
    emailError.value = "Please enter your email";
    isValid = false;
  } else {
    emailError.value = "";
  }

  if (!password.value.trim()) {
    passwordError.value = "Please enter your password";
    isValid = false;
  } else {
    passwordError.value = "";
  }

  return isValid;
}

function Login() {
  router.push("/");
}

function Register() {
  if (validateForm()) {
    router.push("/");
  }
}
</script>

<style scoped>
.bg-transparent {
  background-color: transparent;
}

.bg-white {
  background-color: #ffffff;
}

.transition-bg {
  transition: background-color 0.5s ease;
}
</style>
