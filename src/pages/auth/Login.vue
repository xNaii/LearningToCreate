<template>
  <center>
    <b-row>
      <b-col col sm="12" md="7" lg="4" style="margin: 0 auto;">
        <b-card title="Login" class="mb-2">
          <b-card-text>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group id="input-group-1" label="Login Code:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.code"
                  type="text"
                  required
                  placeholder="Enter Code"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter Passowrd"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="true">Remember Me</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button variant="light" type="submit" class="login">Login</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </center>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        code: "",
        password: "",
        checked: false
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
</style>
