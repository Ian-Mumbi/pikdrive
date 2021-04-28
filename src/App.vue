<template>
  <div class="container">
    <div class="nav">
      <router-link class="link" to="/orders">Orders</router-link>
      <router-link class="link" to="/topSales">Top Sales</router-link>
      <router-link class="link" to="/products">Products</router-link>
      <router-link class="link" to="/suppliers">Suppliers</router-link>
      <router-link class="link" to="/productSuppliers"
        >Product Suppliers</router-link
      >
    </div>

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
.container {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

.button {
  border: none;
  font-size: 1.8rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  backface-visibility: hidden;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
  transition: all 0.4s;
  display: inline-block;
}

.button:hover,
.button:active {
  background-color: var(--color-primary);
  color: #fff;
  padding: 0.8rem 1.5rem;
}

.title-page {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15rem;
}

.btn,
.btn:focus,
.btn:hover {
  outline: none;
  border-radius: 5rem;
  color: white;
  font-size: 2rem;
  padding: 1rem 5rem;
  background-color: var(--color-primary);
  margin-bottom: 2rem;
}

.link:focus,
.link:active {
  display: inline-block;
  font-weight: 600;
}

@media only screen and (max-width: 37.5em) {
  .nav {
    justify-content: flex-start;
    flex-direction: column;
  }

  .title-page {
    font-size: 3rem;
  }

  .link {
    margin-bottom: 2rem;
  }
}

.link:link,
.link:visited {
  text-decoration: none;
  color: var(--color-grey-dark-2);
  transition: all 0.3s;
}

.link:not(:last-child) {
  margin-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-size: 2rem;
  position: relative;
  background-image: linear-gradient(
    to bottom right,
    var(--color-grey-light-1),
    var(--color-grey-light-4)
  );
}

html {
  font-size: 62.5%;
}

*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

:root {
  --color-primary: #eb2f64;
  --color-primary-light: #ff3366;
  --color-primary-dark: #ba265d;

  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-white: #fff;
  --color-green: #7ed56f;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);

  --line: 1px solid var(--color-grey-light-2);

  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);
}
</style>
