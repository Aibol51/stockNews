<template>
  <div>
    <n-form :model="formData" :rules="loginRules" ref="loginRef">
      <n-form-item-row label="手机号码" path="phone">
        <n-input
          clearable
          maxlength="11"
          placeholder="手机号码"
          v-model:value="formData.phone"
          :allow-input="onlyAllowNumber"
        />
      </n-form-item-row>
      <n-form-item-row label="密码" path="password">
        <n-input
          clearable
          placeholder="密码"
          v-model:value="formData.password"
          type="password"
          show-password-on="click"
          :maxlength="8"
        />
      </n-form-item-row>
      <n-form-item-row label="验证码" path="captcha">
        <n-input
          clearable
          placeholder="验证码"
          v-model:value="formData.captcha"
        >
          <template #suffix>
            <img
              :src="formData.imgPath"
              alt=""
              class="w-[90px] cursor-pointer"
              @click="getCaptchaCode"
            />
          </template>
        </n-input>
      </n-form-item-row>
    </n-form>
    <n-button color="#3189f5" block strong @click="loginUser"> 登录 </n-button>
  </div>
</template>
<script setup lang="ts">
import { getCaptcha } from "@/api/getCaptcha.ts";
import { login } from "@/api/stockUser.ts";
import { reactive, ref } from "vue";
import { useMessage } from "naive-ui";
import { useUserStore, useLoginModalStore } from "@/stores/index";
const loginModal = useLoginModalStore();
const message = useMessage();

const userStore = useUserStore();

const loginRef = ref<any>(null);

const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);

const formData = reactive({
  phone: "",
  password: "",
  captcha: "",
  imgPath: "",
  captchaId: "",
});

const loginRules = {
  phone: [
    {
      required: true,
      message: "请输入手机号",
      key: "phone",
      trigger: "blur",
      max: 11,
      min: 11,
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的手机号码",
      trigger: ["blur", "change"],
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 8, message: "长度在 6 到 8 个字符", trigger: "blur" },
  ],
  captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
};

async function getCaptchaCode() {
  const captcha = await getCaptcha();
  if (captcha.code === 0) {
    formData.captchaId = captcha.data.captchaId;
    formData.imgPath = captcha.data.imgPath;
  }
}

async function loginUser() {
  loginRef.value?.validate(async (errors: any) => {
    if (!errors) {
      const res = await login({
        mobile: formData.phone,
        password: formData.password,
        captchaId: formData.captchaId,
        captcha: formData.captcha,
      });
      if (res.code === 0) {
        userStore.setUserInfo(res.data);
        message.success(res.msg);
        loginModal.closeLoginModal();
      } else if (res.msg === "验证码错误") {
        message.warning(res.msg);
        getCaptchaCode();
      } else {
        message.warning(res.msg);
      }
    }
  });
}


getCaptchaCode();
</script>
<style lang="scss" scoped></style>
