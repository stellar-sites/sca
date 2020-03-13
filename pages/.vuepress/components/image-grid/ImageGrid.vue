<template>
  <div>
    <div class="row">
      <div class="column" v-for="img in images" :title="img.title || img.link">
        <img :src="dir + img.link" :alt="img.title || img.link" style="width:100%">
      </div>
    </div>

    <details v-if="showsummary" class="custom-block details">
      <summary>{{ summary }}</summary>
      <p>
        <ul>
          <li v-for="img in images">{{ img.title }}</li>
        </ul>
      </p>
    </details>
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
    },
    summary: {
      type: String,
      default: 'Images'
    },
    showsummary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 10%; /* IE10 */
  flex: 10%;
  max-width: 10%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 20%;
    flex: 20%;
    max-width: 20%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 33%;
    flex: 33%;
    max-width: 33%;
  }
}
</style>
