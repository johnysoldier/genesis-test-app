import { defineStore } from "pinia";
import { getData } from "../api/api";

export const useEntityStore = defineStore("entityStore", {
  state: () => ({
    entities: [],
    isLoading: false,
    isError: false,
    isCreated: false,
  }),
  getters: {
    totalCount: (state) => {
      return state.entities.length;
    },
  },
  actions: {
    async createEntity(selectEntity) {
      try {
        this.isLoading = true;
        this.isCreated = false;

        const data = await getData(selectEntity);

        const entity = {};
        entity.id = data.id;
        entity.title = data.title;

        this.entities.push(entity);

        this.isLoading = false;
        this.isError = false;
        this.isCreated = true;
      } catch (error) {
        this.isError = true;
        this.isLoading = false;
        console.log(error);
      }
    },
  },
});
