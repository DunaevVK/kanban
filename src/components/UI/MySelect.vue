<template>
    <select :value="title" @change="changeOption($event.target.value, $event.target.selectedIndex)"
        class=" py-2.5 px-4 bg-transparent text-green-600 border border-solid border-green-600 mr-7">
        <option disabled value="" selected>Выберите стадию</option>
        <option v-for="(name, stageIndex) in rootStore.getStagesNames">
            {{ name }}

        </option>
    </select>
</template>
<script setup>
import { useRootStore } from '../../stores/root'
import { ref } from 'vue'
const rootStore = useRootStore()
const ind = ref(0)
const title = ref(null)
const emit = defineEmits(['changeOption'])

const changeOption = (n, e) => {
    emit('changeOption', n, e)

}
</script>
<style scoped></style>