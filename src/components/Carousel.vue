<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="10000"
      controls
      indicators
      style="text-shadow: 1px 1px 5px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
        class="slider"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=54"
        class="slider"
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=58"
        class="slider"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=55"
        class="slider"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
@media (min-width: 1200px) {
  .slider img {
    min-height: 379px !important;
    max-height: 379px !important;
  }
}
@media (min-width: 975px) {
  .slider img {
    min-height: 347px !important;
    max-height: 347px !important;
  }
}
@media (min-width: 500px) {
  .slider img {
    min-height: 300px !important;
    max-height: 300px !important;
  }
}
</style>