<template>
  <Header id="header" />
  <!-- <nav>
	 <router-link to="/">Home</router-link> |
	 <router-link to="/about">About</router-link>
	 </nav> -->
  <router-view style="margin: auto" />
  <Footer id="footer" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    const name = ref("taro");
    return { name };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#header {
}
#footer {
  position: absolute;
  bottom: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
