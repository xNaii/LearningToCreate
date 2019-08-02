<template>
  <div class="container-fluid">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "Container",
  components: {
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  margin-top: 18px;
  max-width: 94%;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1500px;
  }
}
</style>