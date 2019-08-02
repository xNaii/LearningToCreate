<template>
  <div class="container-fluid">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "Container",
  components: {
    Navbar, Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  margin-top: 18px;
  max-width: 85%;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1600px;
  }
}
</style>