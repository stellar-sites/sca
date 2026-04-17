<template>
  <div class="slideshow">
    <div class="slideshow-container">
      <div v-for="(img, i) in images" :class="i === currentIndex ? 'block fade' : 'hidden fade'">
        <div class="numbertext">{{ i + 1 }} / {{ images.length }}</div>
        <img :src="dir + img" style="width:100%">
        <div class="text"></div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click="prev()">&#10094;</a>
      <a class="next" @click="next()">&#10095;</a>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span v-for="(img, i) in images" :class="i === currentIndex ? 'active dot' : 'dot'" @click="currentIndex = i"></span>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Slideshow',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    },
    dir: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },
  mounted () {
    this.reset();
  },
  methods: {
    reset () {
      clearInterval(this.timer)
      this.timer = setInterval(this.next, 4000)
    },
    next () {
      this.reset()
      this.currentIndex = this.currentIndex >= this.images.length - 1 ? 0 : this.currentIndex + 1
    },
    prev () {
      this.reset()
      this.currentIndex = this.currentIndex <= 0 ? this.images.length - 1 : this.currentIndex - 1
    },
  }
}
</script>

<style>
.hidden { display: none}
.block { display: block }

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>
