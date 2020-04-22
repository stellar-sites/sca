<template>
    <span :class="klass">
        <img :src="src" :width="width" :height="height" :style="{float: float}" />
        <br>
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
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        },
        float: {
            type: String,
            default: "right"
        },
        klass: {
            type: String,
            default: "inline"
        }
    }
}
</script>
<style>
.inline img {
    padding: 15px;
}
.block img {
    padding: 15px;
    margin: 15px;
}
.center img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>