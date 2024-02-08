<template>
    <div class="flex flex-col">
        <h1 class="text-4xl">Редактирование стадии</h1>
        <input v-focus v-model="inp1" class="w-80 border border-solid border-green-600 py-2.5 px-4 mt-4" type="text"
            placeholder="Название стадии">
        <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
            @click="editStage">Изменить имя стадии</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRootStore } from '../stores/root'

const rootStore = useRootStore()
const inp1 = ref(rootStore.stages[0].columns[rootStore.curr].titleStage)
const editStage = () => {
    rootStore.stages[0].columns[rootStore.curr].titleStage = inp1
    rootStore.modalVisibleEditStage = false
}
</script>
<style scoped></style>