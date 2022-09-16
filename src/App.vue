
<template >
  <div id="app">
    <div id="nav">
      <router-link class="mx-1 fw-bold" to="/">Home</router-link>
      <div class="vr"></div>
      <router-link class="mx-1 fw-bold" to="/signUp">Sign Up</router-link>
      <div class="vr"></div>
      <router-link class="mx-1 fw-bold" to="/login">Log In</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a:visited,
a:focus {
  color: #fff;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #47525d;
}

#nav {
  padding: 22px;
  color: #fff;
}

#nav a {
  font-size: 18px;
  padding: 5px 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ffc107;
  color: #000000;
}
</style>
