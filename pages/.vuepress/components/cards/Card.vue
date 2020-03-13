<template>
  <div class="card">
    <img v-if="image" :src="image" :alt="title" style="width:100%">
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="card-title">{{ subtitle }}</p>
    <p v-if="subtext">{{ subtext }}</p>
    <a class="card-link" v-for="icon in icons" :href="icon.link"><i :class="icon.class"></i></a>
    <p v-if="action"><a :href="action.link" class="card-action">{{ action.text }}</a></p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    subtext: {
      type: String,
      default: ''
    },
    icons: {
      type: Array,
      default: () => []
    },
    action: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.card-title {
  color: grey;
  font-size: 18px;
}

.card-action {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a.card-link {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
