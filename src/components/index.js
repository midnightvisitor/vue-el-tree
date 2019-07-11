import Tree from './tree'

const components = [
  Tree
]

const install = (Vue) => {
  if (install.installed) {
    return
  }

  components.forEach(component => {
    Vue.use(component)
  })

  // todo
}
export default {
  install
}