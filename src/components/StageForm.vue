<template>
    <form @submit.prevent class="flex flex-col">
        <h1 class="text-4xl">Создание стадии</h1>
        <input v-focus v-model="inp" class="w-80 border border-solid border-green-600 py-2.5 px-4 mt-4" type="text"
            placeholder="Название стадии">
        <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
            @click="addStage">Создать стадию</button>
    </form>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
const inp = ref("")
const stage = reactive({
    titleStage: inp,
    stageIndex: rootStore.stages[0].columns.length,
    tasks: [],

})
const addStage = () => {
    if (stage.titleStage) {
        rootStore.stages[0].columns.push(stage)
        rootStore.modalVisibleStage = false
    }

    rootStore.modalVisibleStage = false
}
</script>
<style scoped></style>