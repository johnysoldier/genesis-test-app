<template>
  <div class="entity-container">
    <div v-if="entityStore.totalCount === 0">Нет созданных сущностей</div>
    <ul v-else class="entity-list">
      <li
        class="entity-items"
        v-for="entity in entityStore.entities"
        :key="entity.id"
      >
        <span>{{ entity.id }}</span>
        <span>{{ entity.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useEntityStore } from "../stores/entity";

const entityStore = useEntityStore();
</script>

<style scoped>
.entity-container {
  padding: 1rem;
}

.entity-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.entity-items {
  display: flex;
  gap: 0.5rem;
}
</style>
