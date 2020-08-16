<template>
    <span :class="klass">
        <a v-if="href" :href="href" target="_blank">
            <img :src="src" :width="width" :height="height" :style="{float: float}" />
        </a>
        <img v-else :src="src" :width="width" :height="height" :style="{float: float}" />
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
        },
        href: {
            type: String,
            default: ""
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