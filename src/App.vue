<template>
  <v-app>
    <Drawer/>

    <Toolbar/>

    <ViewContent/>

    <Footer/>
  </v-app>
</template>

<script>
import Drawer from './components/core/Drawer'
import Toolbar from './components/core/Toolbar'
import ViewContent from './components/core/View'
import Footer from './components/core/Footer'

export default {
  components: { Footer, ViewContent, Toolbar, Drawer }
}
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
