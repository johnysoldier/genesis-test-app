<template>
  <div>
    <button :disabled="choice === 'Не выбрано'">Создать</button>
  </div>
</template>

<script setup>
defineProps({
  choice: {
    type: String,
    default: "Не выбрано",
  },
});
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-color: #4c8bf7;
  color: #fff;
  border: #999999;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button[disabled] {
  border: 1px solid #999999;
  background-color: #fff;
  color: #666666;
  cursor: not-allowed;
}
</style>
