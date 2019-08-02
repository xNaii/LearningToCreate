<template>
  <div>
    <div class="divider">
      <b-row style>
        <b-col md="4"></b-col>
        <b-col md="4">
          <center>
            <h2 class="title">{{siteName}}</h2>
          </center>
        </b-col>
        <b-col md="4">
          <center>
            <b-button variant="light" class="login">LOGIN IN</b-button>
          </center>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col md="12" class="links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/build">Build</router-link>
          </li>
          <li>
            <router-link to="/Contact">Contacts</router-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { settings } from "../Variables";

export default {
  name: "Navbar",
  data() {
    return {
      siteName: settings.siteName
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,500&display=swap");

.title {
  font-family: "Open Sans", sans-serif;
}

.login {
  color: rgba(0, 0, 0, 0.87);
  padding: 4px 8px;
  font-size: 0.8125rem;
  min-width: 64px;
  /*box-sizing: border-box;*/
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  letter-spacing: 0.02857em;
  text-transform: uppercase;
}

.divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.links {
  min-height: 48px;
  margin-top: 12px;
  margin-bottom: -3px;
}

.links li {
  display: inline-flex;
  flex-wrap: nowrap;
  padding: 5px;
}

.links a {
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 8px;
  font-size: 14px;
  color: #6c757d;
  border-radius: 6px;
  background-color: #f8f9fa;
}

.links a:hover {
  background-color: #e2e6ea;
  text-decoration: none;
}

.links a:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.col-md-4 {
  align-self: center;
}
</style>