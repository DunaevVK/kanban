<script setup>
import { useRootStore } from './stores/root';
import { storeToRefs } from 'pinia';
import MyModal from './components/UI/MyModal.vue'
import StageEditForm from './components/StageEditForm.vue'
import TaskEditForm from './components/TaskEditForm.vue'
import TaskDetailForm from './components/TaskDetailForm.vue'
import StageForm from './components/StageForm.vue'
import StageList from './components/StageList.vue'
import TaskForm from './components/TaskForm.vue'

const rootStore = useRootStore()
const { modalVisibleStage, modalVisibleTask, stages, modalVisibleEditStage, modalVisibleDetailTask } = storeToRefs(rootStore)
function showModalStage() {
  modalVisibleStage.value = true
}
function showModalTask() {
  rootStore.curr = 0
  modalVisibleTask.value = true
}
</script>

<template>
  <div class="ml-5">
    <h1 class="text-4xl">Создание доски Kanban</h1>
    <button @click="showModalStage"
      class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600">Создать
      стадию
    </button>
    <MyModal v-model:show="modalVisibleStage">
      <StageForm />
    </MyModal>
    <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600 ml-4"
      @click="showModalTask"> Создать задачу</button>
    <MyModal v-model:show="modalVisibleTask">
      <TaskForm />
    </MyModal>
    <MyModal v-model:show="modalVisibleEditStage">
      <StageEditForm />
    </MyModal>
    <MyModal v-model:show="rootStore.modalVisibleEditTask">
      <TaskEditForm />
    </MyModal>
    <MyModal v-model:show="rootStore.modalVisibleDetailTask">
      <TaskDetailForm />
    </MyModal>
    <h1 class="mt-12 text-3xl" v-if="stages[0].columns.length > 0">Список стадий:</h1>
    <h2 class="mt-12 text-3xl" v-else>Список стадий пустой</h2>
    <StageList />

  </div>
</template>

<style scoped></style>
