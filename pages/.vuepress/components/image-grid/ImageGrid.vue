<template>
  <div class="images">
    <div class="image" v-for="img in images" :title="img">
      <img :src="dir + img" :alt="img" style="width:100%">
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
    },
    dir: {
      type: String,
      default: ''
    } 
  }
}
</script>

<style>
.images {
  display: flex;
}

.image {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.images::after {
  content: "";
  clear: both;
  display: table;
}

@media screen and (max-width: 4196px) {
  .image {
    width: 20%;
  }
}
</style>
