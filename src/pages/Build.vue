<template>
  <b-card :title="title" style="max-width: 100%;" class="mb-2">
    <b-card-text></b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Build",
  components: {},
  data: function() {
    return {
      title: document.title
    };
  }
};
</script>

<style>
</style>