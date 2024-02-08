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
    const stageIndex1 = e.dataTransfer.getData('stageIndex')
    const taskIndex = e.dataTransfer.getData('taskIndex')
    const editTask = rootStore.stages[0].columns[stageIndex1].tasks.splice(taskIndex, 1)
    const aa = JSON.parse(JSON.stringify(editTask))
    aa.forEach((el) => {
        rootStore.stages[0].columns[stageIndex].tasks.push(el)
        rootStore.stages[0].columns[stageIndex].tasks.forEach(el => el.stageTask = stageIndex)
    })
}
</script>
<style scoped></style>