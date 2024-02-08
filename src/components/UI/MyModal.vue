<template>
    <div class="top-0 bottom-0 right-0 left-0 bg-black/50 fixed flex" v-if="show" @click="$emit('update:show', false)">

        <div @click.stop class="m-auto bg-white rounded-xl min-h-12 min-w-72 p-5">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
})

</script>
<style scoped></style>