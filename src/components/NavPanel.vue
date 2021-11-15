<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
      
    
      <a class="navbar-brand" href="#"
        ><img src="..//assets/logo.png" alt="" class="navbar-img"
      /></a>
    
    <div class="nav-panel">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to='/'>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/post'>Post</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/about'>About</router-link>
        </li>
      </ul>
    </div>
    </div>
    </div>
  </nav>
</template>
<script>
export default {
  
};
</script>
<style scoped>
.navbar-img {
  width: 50px;
  max-width: 100%;
}
.nav-size {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
}
</style>