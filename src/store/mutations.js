import { set, toggle } from './vuex'

export default {
  setDrawer: set('drawer'),
  setColor: set('color'),
  toggleDrawer: toggle('drawer')
}
