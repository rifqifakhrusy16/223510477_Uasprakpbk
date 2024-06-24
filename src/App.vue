<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense to="/" exact>Home</q-btn>
        <q-btn flat dense>TUGAS RIFQI</q-btn>
        <q-menu>
          <q-list>
            <q-item v-for="task in tasks" :key="task.id">
              <q-item-section>
                <q-item-label>{{ task.name }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn @click="openTask(task.url)" icon="open_in_new"></q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-toolbar>
    </q-header>

    /
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [
        { id: 1, name: 'Tugas 1', url: 'https://rifqi-project-cv.netlify.app/' },
        { id: 2, name: 'Tugas 2', url: 'https://rifqifakhrusy-223510477.netlify.app/' },
        { id: 3, name: 'Tugas 3', url: 'https://rifqifakhrusy-tugas3pbk.netlify.app/' },
        { id: 4, name: 'Tugas 4', url: 'https://rifqifakhrusy-223510477-tugas4prakpbk.netlify.app/' },
        { id: 5, name: 'Tugas 5', url: 'https://rifqifakhrusy-223510477-tugas5prakpbk.netlify.app/' },
        { id: 6, name: 'Tugas 6', url: 'https://223510477-tugas6prakpbk.netlify.app/' },
        { id: 7, name: 'Tugas 7', url: 'https://223510477-tugas7prakpbk.netlify.app/' },
      ],
    };
  },
  methods: {
    openTask(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style>

</style>
