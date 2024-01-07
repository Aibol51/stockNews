// useModal.ts
import { ref, readonly } from 'vue';

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

export function useModal() {
  return {
    showModal: readonly(showModal),
    openModal,
    closeModal
  };
}
