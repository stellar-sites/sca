<template>
    <div class="tips-container">
        <slot></slot>

        <!-- The dots/circles -->
        <div style="text-align:center">
            <span v-for="(n, i) in this.size" :class="i === activeIndex ? 'active dot' : 'dot'" @click="setIndex(i)"></span>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'TipBar',
    data () {
        return {
            activeIndex: 0,
            size: 0
        }
    },
    props: {
        delay: {
            type: Number,
            default: 6000
        },
        blockSelector: {
            type: String,
            default: '.custom-block'
        }
    },
    methods: {
        setIndex (i) {
            this.stop()
            this.activeIndex = i
            this.refresh();
            this.start()
        },
        refresh () {
            let nodelist = this.$el.querySelectorAll(this.blockSelector);
            for (let i = 0; i < nodelist.length; i++) {
                if (this.activeIndex == i) {
                    nodelist[i].style.display = "";
                } else {
                    nodelist[i].style.display = "none";
                }
            }
        },
        start () {
            this.size = this.$el.querySelectorAll(this.blockSelector).length
            this.timeout = setTimeout(() => {
                if (this.activeIndex >= this.size -1) {
                    this.activeIndex = 0;
                } else {
                    this.activeIndex += 1;
                }
                this.refresh();
                this.start();
            }, this.delay)
        },
        stop () {
            clearTimeout(this.timeout)
        }
    },
    mounted () {
        this.start()
    },
    beforeDestroy () {
        this.stop()
    }
}
</script>
<style>
.custom-block {
    color: black;
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
</style>