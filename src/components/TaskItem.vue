<template>
    <div class="p-4 border-2 border-solid border-green-600 mt-4 min-w-72 flex my-0 m-auto">
        <div class="flex justify-between w-full">
            <div>
                <div><strong> {{ task.titleTask }}</strong></div>
                <div>{{ task.bodyTask }}</div>
                <button @click="detailTask" class=" self-start mt-4 px-4 bg-transparent text-green-600 border border-solid border-green-600
                text-sm">Подробнее
                    о задаче
                </button>
            </div>
            <div>
                <div class="flex gap-3 cursor-pointer">
                    <svg @click="editTask($event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                    <svg @click="deleteTask($event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRootStore } from '../stores/root'

const rootStore = useRootStore()
const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
    stageIndex: {
        type: Number,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
const showModalEditTask = () => {
    rootStore.modalVisibleEditTask = true
}
const showModalDetailTask = () => {
    rootStore.modalVisibleDetailTask = true
}
const setCurrentStageAndTask = () => {
    rootStore.curr = props.task.stageTask
    rootStore.curT = props.index
}
const detailTask = () => {
    setCurrentStageAndTask()
    showModalDetailTask()
}
const deleteTask = () => {
    setCurrentStageAndTask()
    // rootStore.curr = props.indexb
    // rootStore.curT = props.index
    rootStore.stages[0].columns[props.task.stageTask].tasks.splice(props.index, 1)
}
const editTask = (e) => {
    // console.log(e);
    setCurrentStageAndTask()
    rootStore.curr = props.stageIndex
    // rootStore.curT = props.index
    showModalEditTask()
    // rootStore.curr = e.target.__vueParentComponent.attrs.index
}
</script>
<style></style>
