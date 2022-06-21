<template>
<div id="app">
  <HeaderNavBar/>
  <router-view></router-view>
</div>
</template>

<script>
  import HeaderNavBar from "./components/layout/HeaderNavBar"
  export default {
    name: "app", 
    components: {
      HeaderNavBar,
    }
  }
</script>