<template>
  <div class="container-fluid">
    <header class="d-flex">
      <h3 class="logo mb-0">DJ Store</h3>
      <nav class="animate__animated animate__bounceInRight">
        <router-link to="/">Home</router-link> |
        <router-link to="/wishList">WishList</router-link> |
        <router-link to="/checkout">Checkout</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
section {
  padding: 40px 20px;
}
header {
  padding: 7px 20px;
  background: #000;
  color: #fff;
}
.logo {
  margin-right: auto;
}
.container-fluid {
  padding: 0px !important;
  margin: 0px !important;
}

nav {
  padding: 7px;

  a {
    font-weight: bold;
    color: #ccc; text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
