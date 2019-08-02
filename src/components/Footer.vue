<template>
  <footer>
    <!-- As a link -->
    <b-navbar :sticky="true" variant="faded" type="light">
      <a href="/" class="navbar-brand d-flex w-50 mr-auto">{{siteName}}</a>
      <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="navbar-nav w-100 justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item">
            <a class="nav-link">{{moment.format("YYYY")}} &copy; All rights reserved.</a>
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