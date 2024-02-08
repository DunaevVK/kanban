<template>
    <form @submit.prevent class="flex flex-col">
        <h1 class="text-4xl">Создание задачи</h1>
        <input v-focus v-model="inp1" class="w-96 border border-solid border-green-600 py-2.5 px-4 mt-4" type="text"
            placeholder="Название задачи">
        <input v-model="inp2" class="w-96 border border-solid border-green-600 py-2.5 px-4 mt-4" type="text"
            placeholder="Тескт к задаче">
        <!-- Сделать проверки -->
        <div>
            <select v-model="stageTitle" @change="setStage($event.target.selectedIndex)"
                class="py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600 mr-7">
                <!-- $event.target.selectedIndex -->
                <option disabled value="" selected>Выберите стадию</option>
                <option v-for="(stage, index) in rootStore.getStages">
                    {{ stage.titleStage }}
                </option>
            </select>
            <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
                @click="createTask">Создать задачу</button>
        </div>


    </form>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { useRootStore } from '../stores/root'
import MySelect from './UI/MySelect.vue'

const rootStore = useRootStore()
// const index = ref(null)
const id = Date.now()
const stageTitle = ref("")
const inp1 = ref("")
const inp2 = ref("")
const create = ref(new Date().toUTCString())
// const areaInp = ref("")

// const sel = ref("")
// const stage = rootStore.curr
const taska = reactive({
    id: id,
    titleTask: inp1,
    bodyTask: inp2,
    detailTask: "",
    stageTask: rootStore.curr,
    create: create,

    // stageIndex: stage
})
function setStage(ind) {
    // console.log(ind);
    taska.stageTask = ind - 1
    // rootStore.curr = taska.stageTask
}
const createTask = () => {
    if (taska.titleTask || taska.bodyTask) {
        rootStore.stages[0].columns[taska.stageTask].tasks.push(taska)
        rootStore.modalVisibleTask = false
        rootStore.curr = 0
    }
    // rootStore.stages[0].columns[taska.stage].tasks.push(taska)
    rootStore.modalVisibleTask = false

}
</script>
<style scoped></style>