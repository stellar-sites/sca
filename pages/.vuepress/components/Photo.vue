<template>
    <span class="inline">
        <img :src="src" :width="width" :height="height" :style="{float: float}" />
    </span>
</template>
<script>
export default {
    name: 'Photo',
    props: {
        src: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: null
        },
        height: {
            type: Number,
            default: null
        },
        float: {
            type: String,
            default: "right"
        }
    }
}
</script>
<style>
.inline img {
    padding: 15px;
}
</style>