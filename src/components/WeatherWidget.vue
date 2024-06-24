<template>
    <q-card>
      <q-card-section class="weather-widget">
        <h2>Weather Widget</h2>
        
        <!-- Form untuk memasukkan nama kota -->
        <q-form @submit="fetchWeather">
          <q-input v-model="city" label="Enter City Name" outlined clearable></q-input>
          <q-btn type="submit" label="Get Weather" color="primary"></q-btn>
        </q-form>
        
        <div v-if="weatherData">
          <p>{{ weatherData.weather[0].description }}</p>
          <p>Temperature: {{ weatherData.main.temp }} °C</p>
          <p>Humidity: {{ weatherData.main.humidity }}%</p>
        </div>
        <div v-else-if="loading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <p>Please enter a city name to get weather information.</p>
        </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'WeatherWidget',
    setup() {
      const weatherData = ref(null);
      const loading = ref(false);
      const city = ref('');
  
      const fetchWeather = async () => {
        loading.value = true;
        const apiKey = 'd298c515fe18c45c2707834b3439d31d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          weatherData.value = await response.json();
        } catch (error) {
          console.error('Error fetching weather data:', error);
        } finally {
          loading.value = false;
        }
      };
  
      return {
        weatherData,
        loading,
        city,
        fetchWeather
      };
    },
  };
  </script>
  
  <style scoped>
  
  .weather-widget {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  </style>
  