<template>
    <q-page class="home">
      <h1>Selamat Datang Bro</h1>
      <WeatherWidget />
    </q-page>
  </template>
  
  <script>
  import WeatherWidget from '../components/WeatherWidget.vue';
  
  export default {
    name: 'Home',
    components: {
      WeatherWidget,
    },
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  