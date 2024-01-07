<template>
  <div>
    <n-form :model="formData" :rules="registerRules" ref="registerRef">
      <n-form-item-row label="用户名" path="username">
        <n-input
          clearable
          placeholder="用户名"
          v-model:value="formData.username"
        />
      </n-form-item-row>
      <n-form-item-row label="手机号" path="phone">
        <n-input
          maxlength="11"
          clearable
          placeholder="手机号"
          v-model:value="formData.phone"
          :allow-input="onlyAllowNumber"
        />
      </n-form-item-row>
      <n-form-item-row label="验证码" path="captcha">
        <n-input
          clearable
          placeholder="验证码"
          v-model:value="formData.captcha"
          :allow-input="onlyAllowNumber"
        >
          <template #suffix>
            <span v-show="showAuth" @click="getCode" class="text-[#3189f5]">
              获取验证码
            </span>
            <span v-show="!showAuth" @click="tryAgain" class="text-[#3189f5]"
              >{{ countAuth }}s后重新获取</span
            >
          </template>
        </n-input>
      </n-form-item-row>
      <n-form-item-row label="密码" path="password">
        <n-input
          v-model:value="formData.password"
          type="password"
          show-password-on="click"
          placeholder="密码"
          :maxlength="8"
        />
      </n-form-item-row>
      <n-form-item-row label="确认密码" path="confirmPassword">
        <n-input
          v-model:value="formData.confirmPassword"
          type="password"
          show-password-on="click"
          placeholder="密码"
          :maxlength="8"
        />
      </n-form-item-row>
    </n-form>
    <n-button color="#3189f5" block strong @click="registerUser">
      注册
    </n-button>
  </div>
</template>
<script setup lang="ts">
import { getSmsCaptcha } from "@/api/getCaptcha.ts";
import { register } from "@/api/stockUser.ts";
import { reactive, ref } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();

const emit = defineEmits(["registration-successful"]);

const formData = reactive({
  username: "",
  phone: "",
  password: "",
  confirmPassword: "",
  captchaId: "",
  imgPath: "",
  captcha: "",
});

const showAuth = ref<boolean>(true);
const countAuth = ref<number>(0);
const timerAuth = ref<any>(null);

const registerRef = ref<any>(null);

const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);

const validateConfirmPassword = (_rule: any, value: string) => {
  if (value !== formData.password) {
    return new Error("两次输入的密码不一致");
  }
  return true;
};

const registerRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
  ],
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
  confirmPassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    { min: 6, max: 8, message: "长度在 6 到 8 个字符", trigger: "blur" },
    { validator: validateConfirmPassword, trigger: "blur" },
  ],
  captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
};

function getCode() {
  const TIME_COUNT = 60;
  if (!timerAuth.value) {
    registerRef.value?.validate(
      async (errors: any) => {
        if (!errors) {
          const res = await getSmsCaptcha(formData.phone);
          if (res.code === 0) {
            message.success("验证码已发送");
          } else {
            message.warning(res.msg);
          }
          countAuth.value = TIME_COUNT;
          showAuth.value = false;
          timerAuth.value = setInterval(() => {
            if (countAuth.value > 0 && countAuth.value <= TIME_COUNT) {
              countAuth.value--;
            } else {
              showAuth.value = true;
              clearInterval(timerAuth.value);
              timerAuth.value = null;
            }
          }, 1000);
        }
      },
      (rule: { key: string }) => {
        return rule?.key === "phone";
      }
    );
  }
}

function tryAgain() {
  message.loading("倒计时结束后再试");
}

async function registerUser() {
  registerRef.value?.validate(async (errors: any) => {
    if (!errors) {
      const res = await register({
        username: formData.username,
        phoneNumber: formData.phone,
        password: formData.password,
        captcha: formData.captcha,
      });
      if (res.code === 0) {
        message.success(res.msg);
        emit("registration-successful");
      } else if (res.msg === "验证码错误") {
        message.warning(res.msg);
      } else {
        message.warning(res.msg);
      }
    }
  });
}
</script>
<style lang="scss" scoped></style>
