<template>
  <form @submit.prevent="handleSubmit">
    <div class="custom-select">
      <select v-model="entity">
        <option>Не выбрано</option>
        <option>Сделка</option>
        <option>Контакт</option>
        <option>Компания</option>
      </select>
    </div>

    <CustomButton v-if="!entityStore.isLoading" :choice="entity" />
    <PreLoader v-else />

    <p v-if="entityStore.isError">Ошибка. Не удалось создать сущность.</p>
    <p v-else-if="!entityStore.isError && entityStore.isCreated">
      Сущность
      {{ entityStore.entities[entityStore.entities.length - 1].title }} создана
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import CustomButton from "./CustomButton.vue";
import PreLoader from "./PreLoader.vue";
import { useEntityStore } from "../stores/entity";

const entityStore = useEntityStore();

const entity = ref("Не выбрано");
const handleSubmit = async () => {
  await entityStore.createEntity(entity.value);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  padding: 1rem;
  border-right: 1px solid #999999;
}

.custom-select {
  position: relative;
  width: 250px;
}

select {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #999999;
  border-radius: 0.2rem;
  color: #000;
  cursor: pointer;
}

.custom-select::after {
  --size: 0.3rem;
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.custom-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  top: 50%;
}
</style>
