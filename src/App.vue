<template>
  <div id="app">
    <NavbarView />
    <router-view />
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue';

export default {
  components: {
    NavbarView
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: #41B883;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
