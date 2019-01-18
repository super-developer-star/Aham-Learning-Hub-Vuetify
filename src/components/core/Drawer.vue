<template>
  <v-navigation-drawer id="app-drawer" v-model="inputValue" app dark floating persistent mobile-break-point="991"
                       width="260">
    <v-list expand>
      <template v-for="(item, i) in menus">
        <!--group with subitems-->
        <v-list-group v-if="item.items" :key="item.name" :group="item.name" :prepend-icon="item.icon" no-action>
          <v-list-tile slot="activator" ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-for="(subItem, i) in item.items">
            <v-list-tile :key="i" :to="{name: subItem.name}">
              <v-list-tile-action v-if="subItem.icon">
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list-group>
        <!--top-level link-->
        <v-list-tile v-else :to="{name: item.name}" :key="item.name" ripple>
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Drawer',
  data: () => ({
    logo: '/img/vuetifylogo.png',
    menus: [
      {
        title: 'Profile',
        name: 'profile',
        icon: 'mdi-view-dashboard',
        items: [
          { name: 'personal-information', title: 'Personal Information' },
          { name: 'education', title: 'Education' },
          { name: 'interested-subjects', title: 'Interested Subjects' },
          { name: 'certified-topics', title: 'Certified Topics' }
        ]
      },
      {
        title: 'Class',
        name: 'class',
        icon: 'mdi-view-dashboard',
        items: [
          { name: 'scheduled', title: 'Scheduled for me' },
          { name: 'recommended', title: 'Recommended to me' },
          { name: 'requested', title: 'Requested by me' }
        ]
      },
      {
        title: 'Goals',
        name: 'goals',
        icon: 'mdi-view-dashboard',
        items: [
          { name: 'progress', title: 'Goals in progress' },
          { name: 'future', title: 'Goals for future' }
        ]
      },
      {
        title: 'Aham Credits',
        name: 'credits',
        icon: 'mdi-view-dashboard',
        items: [
          { name: 'balance', title: 'My Credits Balance' },
          { name: 'history', title: 'Credit Purchase History' },
          { name: 'statement', title: 'Credit Statement' }
        ]
      },
      {
        title: 'Browse Catalogue',
        name: 'browse-catalogue',
        icon: 'mdi-view-dashboard'
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
