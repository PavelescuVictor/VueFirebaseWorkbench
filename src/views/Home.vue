<template>
  <div class="home">
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
// import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  }
};
</script>
