<template>
  <div class="images">
    <div class="image" v-for="img in images">
      <img :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  props: {
    images: {
      type: Array,
      default: () => []
    } 
  }
}
</script>

<style>
.images {
  display: flex;
}

.image {
  flex: 25%;
  padding: 5px;
}
</style>
