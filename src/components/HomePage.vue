<template>
    <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Check Bootstrap
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  
  <div class="header">
      <router-link to="/dashboard">Dashboard</router-link> | 
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>

export default {

}
</script>

<!-- <style scoped> 
    .header {
        color : white;
        background: lightgreen;
        display:flex;
        padding : 8px;
    }
    .header .router-link-exact-active {
        color: #35495e
    }
    .header a {
        color : white;
    } -->
<!-- </style> -->