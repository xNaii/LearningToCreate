<script>
/* Pages */
import Main from "./pages/Main.vue";
import Build from "./pages/Build.vue";
import Contact from "./pages/Contact.vue";
import Login from "./pages/auth/Login.vue";

var siteName = "Your Website";
export const settings = {
  siteName: siteName,
  routes: [
    {
      path: "/",
      component: Main,
      meta: { title: siteName + " - Main" }
    },
    {
      path: "/build",
      component: Build,
      meta: { title: siteName + " - Build" }
    },
    {
      path: "/contact",
      component: Contact,
      meta: { title: siteName + " - Contacts" }
    },
    {
      path: "/login",
      component: Login,
      meta: { title: siteName + " - Login" }
    }
  ]
};
</script>