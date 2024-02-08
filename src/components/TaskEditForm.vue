<template>
        <div class="flex flex-col">
                <h1 class="text-4xl">Редактирование задачи</h1>
                <label class="mt-4">Имя задачи<input v-focus v-model="inp1"
                                class="w-full border border-solid border-green-600 py-2.5 px-4" type="text"
                                placeholder="Название задачи"></label>
                <label class="mt-4">Описание задачи<input v-model="inp2"
                                class="w-full border border-solid border-green-600 py-2.5 px-4" type="text"
                                placeholder="Описание задачи"></label>
                <label class="mt-4">Дополнительное описание<textarea v-model="areaInp"
                                class="w-full border border-solid border-green-600 py-2.5 px-4 mt-4" name="detail" id="2"
                                cols="20" rows="5"></textarea></label>
                <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
                        @click="editTask">Изменить поля задачи</button>
        </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRootStore } from '../stores/root'

const rootStore = useRootStore()
const inp1 = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].titleTask)
const inp2 = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].bodyTask)
const areaInp = ref(rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].detailTask)

const editTask = () => {
        rootStore.modalVisibleEditTask = false
        rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].titleTask = inp1
        rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].bodyTask = inp2
        rootStore.stages[0].columns[rootStore.curr].tasks[rootStore.curT].detailTask = areaInp
}
</script>
<style scoped></style>