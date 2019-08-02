<template>
  <div>
    <b-card :title="title" style="max-width: 100%;" class="mb-2">
      <b-card-text>
        <p>
          Email:
          <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
          <br>Phone:
          <a href>+37060000000</a>
        </p>
        <table>
          <tr>
            <td colspan="2">
              <center>Work Hours</center>
            </td>
          </tr>
          <tr>
            <td style="width: 50px;">I</td>
            <td>| 8 - 17</td>
          </tr>
          <tr>
            <td>II</td>
            <td>| 8 - 17</td>
          </tr>
          <tr>
            <td>III</td>
            <td>| 8 - 17</td>
          </tr>
          <tr>
            <td>IV</td>
            <td>| 8 - 17</td>
          </tr>
          <tr>
            <td>V</td>
            <td>| 8 - 17</td>
          </tr>
          <tr>
            <td>VI</td>
            <td>| Closed</td>
          </tr>
          <tr>
            <td>VII</td>
            <td>| Closed</td>
          </tr>
        </table>
        <a href></a>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Contact",
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