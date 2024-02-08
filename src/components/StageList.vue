<template>
    <div class="flex gap-16 mt-16 flex-wrap">
        <StageItem v-for="stage in rootStore.stages[0].columns" :key="stage.stageIndex" :stage="stage"
            @drop="onDrop($event, stage.stageIndex)" @dragover.prevent @dragenter.prevent>
            <TaskList :stage="stage" />
        </StageItem>
    </div>
</template>
<script setup>
import { useRootStore } from '../stores/root'
import StageItem from '../components/StageItem.vue'
import TaskList from '../components/TaskList.vue'
import { storeToRefs } from 'pinia';

const rootStore = useRootStore()
const { stages } = storeToRefs(rootStore)

function onDrop(e, stageIndex) {
    // console.log(e);
    // e.dataTransfer.setData('el', e.target.toString())
    // e.dataTransfer.setData('task', task.toString())
    // e.dataTransfer.setData('stageIndex', stageIndex.toString())
    // e.dataTransfer.setData('taskIndex', taskIndex.toString())
    // const el = e.dataTransfer.getData('el')
    // console.log(el);
    // const task = e.dataTransfer.getData('task')
    // console.log(task);
    const stageIndex1 = e.dataTransfer.getData('stageIndex')
    // console.log(stageIndex1);
    const taskIndex = e.dataTransfer.getData('taskIndex')
    // console.log(taskIndex);
    // console.log(stageIndex);
    const editTask = rootStore.stages[0].columns[stageIndex1].tasks.splice(taskIndex, 1)
    // console.log(editTask);

    const aa = JSON.parse(JSON.stringify(editTask))
    // console.log(aa);
    aa.forEach((el) => {
        rootStore.stages[0].columns[stageIndex].tasks.push(el)
        rootStore.stages[0].columns[stageIndex].tasks.forEach(el => el.stageTask = stageIndex)

    })
    // rootStore.stages[0].columns[stageIndex].tasks.push(aa)
    // const taskId = parseInt(e.dataTransfer.getData('taskId'))
    // rootStore.stages[0].columns[stageIndex].tasks = rootStore.stages[0].columns[stageIndex].tasks.map(el => {
    //     if (el.stageTask == taskId) {
    //         el.stageTask = stageIndex
    //     }
    //     return el
    // })
}
</script>
<style scoped></style>