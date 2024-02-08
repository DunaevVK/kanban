<template>
    <div>
        <div class="flex items-center justify-between">
            <a>
                <!-- @click="changeTitleStage" -->
                <h1>{{ stage.titleStage }}</h1>
            </a>
            <!-- {{ index + 1 + '. ' }} -->
            <button class="btn__remove btn" @click="$emit('remove', stage)">Удалить стадию</button>
        </div>
        <!-- <TaskList :tasks="tasks" @removeTask="$emit('removeTask', task)" /> -->

    </div>
</template>
<script setup>
const props = defineProps({
    stage: {
        type: Object,
        required: true,
    },
})
// export default {
//     props: {
//         stage: {
//             type: Object,
//             required: true,
//         }
//     }
// }
</script>
<style></style>