<template>
  <div>
    <n-form ref="profileRef" :model="profileModel" :rules="profileRules">
      <n-form-item label="头像" prop="avatar" path="avatar">
        <input
          type="file"
          accept="image/*"
          @change="handleFileChange"
          hidden
          ref="fileInput"
        />
        <n-avatar
          round
          size="large"
          :src="profileModel.avatar || '/img/avatar.svg'"
          @click="triggerFileInput"
        />
      </n-form-item>
      <n-form-item label="用户名" prop="nickname" path="nickname">
        <n-input placeholder="用户名" v-model:value="profileModel.nickname" />
      </n-form-item>
      <n-form-item label="手机号" prop="mobile">
        <n-input
          disabled
          placeholder="手机号"
          v-model:value="profileModel.mobile"
        />
      </n-form-item>
      <n-form-item label="邮箱" prop="email">
        <n-input placeholder="邮箱" v-model:value="profileModel.email" />
      </n-form-item>
    </n-form>
    <n-button color="#3189f5" block strong @click="handleValidateButtonClick">
      保存
    </n-button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore, useLoginModalStore } from "@/stores/index";
import { updateUserData } from "@/api/stockUser.ts";
import { ref } from "vue";
import { useMessage } from "naive-ui";

const message = useMessage();
const userStore = useUserStore();
const profileModal = useLoginModalStore();

const profileModel = ref({
  id: userStore.userInfo.id,
  nickname: userStore.userInfo.nickname,
  mobile: userStore.userInfo.mobile,
  email: userStore.userInfo.email,
  avatar: userStore.userInfo.avatar,
});

const profileRef = ref<any>(null);

const profileRules = ref({
  nickname: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
  ],
});

async function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
  profileRef.value?.validate(async (errors: any) => {
    if (!errors) {
      const res = await updateUserData(profileModel.value);
      if (res.code === 0) {
        userStore.setProfile(res.data);
        message.success("修改成功");
        profileModal.closeProfileModal();
      }
    } else {
      console.log(errors);
      console.log("验证失败");
    }
  });
}

const fileInput = ref<any>(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files) {
    const file = target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          profileModel.value.avatar = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
