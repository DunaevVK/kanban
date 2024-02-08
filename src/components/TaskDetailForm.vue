<template>
    <div class="flex flex-col">
        <h1 class="text-4xl">Детальное описание задачи</h1>
        <p class="pt-4">Имя задачи: <br><strong>{{ titleTask }}</strong></p>
        <p class="pt-4">Описание задачи: <br><strong>{{ bodyTask }}</strong></p>
        <p class="pt-4 max-w-md w-full">Детальное описание задачи: <br><strong>{{ detailTask }}</strong></p>
        <p class="pt-4 ">Дата создания: {{ create }}</p>
        <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
            @click="closeDetail">Закрыть</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRootStore } from '../stores/root'
const rootStore = useRootStore()

const titleTask = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].titleTask)
const bodyTask = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].bodyTask)
const detailTask = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].detailTask)
const create = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].create)
function closeDetail() {
    rootStore.modalVisibleDetailTask = false
}
</script>
<style></style>