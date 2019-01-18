<template>
  <v-footer app inset class="elevation-2" color="#f5f5f5">
    <span class="ml-3">&copy; 2019 - Aham Learning Hub</span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/dashboard' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
