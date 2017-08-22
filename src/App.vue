<!-- src/App.vue -->
<template>
    <div class="container">

        <header class="app-header">
          <app-nav></app-nav>
        </header>

        <!-- <main class="container">
          <router-view></router-view>
        </main> -->

        <manage-products></manage-products>
    </div>

</template>

<script>
// import ProductList from './components/ProductList';
import AppNav from './components/AppNav';
import ManageProducts from './components/ManageProducts';

export default {
  components: {
      AppNav,
      ManageProducts
  }
}
</script>
