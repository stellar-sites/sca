<template>
  <div v-if="loaded">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"></script>
    <div class="fb-page" :data-href="url" :data-tabs="tabs" :data-width="width" :data-height="height" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
      <blockquote :cite="url" class="fb-xfbml-parse-ignore">
        <a :href="url">{{ title }}</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
// import LoadScript from '@module/vue-plugin-load-script';
// import Vue from 'vue';
// Vue.use(LoadScript);
// var FBOOK_SOURCE = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"

export default {
  name: 'Events',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tabs: {
      type: String,
      default: "events"
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 800
    }
  },
  created () {
    setInterval(() => this.loaded = true, 800);
//    Vue.LoadScript(FBOOK_SOURCE).then(() => this.loaded = true).catch((e) => console.warning("Could not load " + FBOOK_SOURCE + ": " + e));
  },
  data () {
    return {
      loaded: false
    }
  }
}
</script>
