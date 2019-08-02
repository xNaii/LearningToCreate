<template>
  <footer>
    <!-- As a link -->
    <b-navbar :sticky="true" variant="faded" type="light">
      <b-navbar-brand>{{siteName}}</b-navbar-brand>
      <ul class="navbar-nav justify-content-center" style="width: 60% !important; margin: 0 auto;">
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
      </ul>
      <div class="collapse navbar-collapse flex-grow-2 text-right">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item">
            <a class="nav-link">&copy; {{ moment.format("YYYY") }}</a>
          </li>
        </ul>
      </div>
    </b-navbar>
  </footer>
</template>

<script>
import { settings } from "../Variables";
import moment from "moment";

export default {
  name: "Footer",
  components: {},
  data: function() {
    return {
      siteName: settings.siteName,
      moment: moment()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>