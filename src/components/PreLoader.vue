<template>
  <div class="loader">
    <span class="spinner"></span>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  padding: 0.5rem 1rem;
  background-color: #4c8bf7;
  color: #fff;
  border: #999999;
  border-radius: 0.2rem;
}

.spinner {
  width: 15px;
  height: 15px;
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-top-color: #fff;
  animation: spin 1s infinite linear;
  border-radius: 100%;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
