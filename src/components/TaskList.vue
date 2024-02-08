<template>
    <TaskItem v-for="(task, taskIndex) in props.stage.tasks" :key="task.stageTask" :task="task" :index="taskIndex"
        :stageIndex="props.stage.stageIndex" @dragstart="onDragstart($event, task, props.stage.stageIndex, taskIndex)"
        draggable="true" @dragover.prevent @dragenter.prevent />
    <button class="self-start mt-4 py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600"
        @click="showModalTask()"> Создать задачу</button>
</template>
<script setup>
import TaskItem from './TaskItem.vue';
import { ref } from 'vue';
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'


const rootStore = useRootStore()
const props = defineProps({
    stage: {
        type: Object,
        required: true
    }
})
// const stage = props.stage
const draggedTask = ref(null)
// const indexX = rootStore.getCurrentStage
function showModalTask() {
    // console.log(e);
    // console.log(e);
    rootStore.curr = props.stage.stageIndex
    rootStore.modalVisibleTask = true
}
// const { stages } = storeToRefs(rootStore)
function onDragstart(e, task, stageIndex, taskIndex) {
    draggedTask.value = {
        el: e.target,
        task,
        stageIndex,
        taskIndex
    }
    // console.log(draggedTask.value);
    // rootStore.stages[0].columns[stageIndex].tasks.splice(taskIndex, 1)
    // console.log(task.stageTask);
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('el', e.target.toString())
    e.dataTransfer.setData('task', task.toString())
    e.dataTransfer.setData('stageIndex', stageIndex.toString())
    e.dataTransfer.setData('taskIndex', taskIndex.toString())
    // console.log(e);
}

</script>
<style scoped></style>