<template>
  <v-navigation-drawer id="app-drawer" v-model="inputValue" app dark floating persistent mobile-break-point="991"
                       width="260">
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
      <v-list-tile avatar>
        <v-list-tile-avatar
          color="white"
        >
          <v-img
            :src="logo"
            height="34"
            contain
          />
        </v-list-tile-avatar>
        <v-list-tile-title class="title">
          Aham Learners Hub
        </v-list-tile-title>
      </v-list-tile>
      <v-divider/>
      <v-list-tile
        v-if="responsive"
      >
        <v-text-field class="purple-input search-input" label="Search..." color="purple"/>
      </v-list-tile>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :active-class="color"
        avatar
        class="v-list-item"
      >
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title
          v-text="link.text"
        />
      </v-list-tile>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Drawer',
  data: () => ({
    logo: './img/vuetifylogo.png',
    links: [
      {
        to: '/profile',
        icon: 'mdi-view-dashboard',
        text: 'Profile',
        children: [
          {
            to: '/personal-information',
            icon: 'mdi-view-dashboard',
            text: 'Personal Information'
          },
          {
            to: '/education',
            icon: 'mdi-view-dashboard',
            text: 'Education'
          },
          {
            to: '/interested-subjects',
            icon: 'mdi-view-dashboard',
            text: 'Interested Subjects'
          },
          {
            to: '/certified-topics',
            icon: 'mdi-view-dashboard',
            text: 'Certified Topics'
          }
        ]
      },
      {
        to: '/class',
        icon: 'mdi-view-dashboard',
        text: 'Class'
      },
      {
        to: '/goals',
        icon: 'mdi-view-dashboard',
        text: 'Goals'
      },
      {
        to: '/aham-credits',
        icon: 'mdi-view-dashboard',
        text: 'Aham Credits'
      },
      {
        to: '/browse-catalogue',
        icon: 'mdi-view-dashboard',
        text: 'Browse Catalogue'
      }
    ],
    items: [
      {
        to: '/profile',
        icon: 'mdi-view-dashboard',
        text: 'Profile',
        children: [
          {
            to: '/personal-information',
            icon: 'mdi-view-dashboard',
            text: 'Personal Information'
          },
          {
            to: '/education',
            icon: 'mdi-view-dashboard',
            text: 'Education'
          },
          {
            to: '/interested-subjects',
            icon: 'mdi-view-dashboard',
            text: 'Interested Subjects'
          },
          {
            to: '/certified-topics',
            icon: 'mdi-view-dashboard',
            text: 'Certified Topics'
          }
        ]
      },
      {
        to: '/class',
        icon: 'mdi-view-dashboard',
        text: 'Class'
      },
      {
        to: '/goals',
        icon: 'mdi-view-dashboard',
        text: 'Goals'
      },
      {
        to: '/aham-credits',
        icon: 'mdi-view-dashboard',
        text: 'Aham Credits'
      },
      {
        to: '/browse-catalogue',
        icon: 'mdi-view-dashboard',
        text: 'Browse Catalogue'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState(['color']),
    inputValue: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
