<template>
  <div id="app">
    <Container/>
  </div>
</template>

<script>
import Container from "./components/Container";

export default {
  name: "App",
  components: {
    Container
  }
};
</script>

<style>
body {
  background-color: #fafafa;
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
</style>
