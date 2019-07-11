import Tree from './src/tree.vue'

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree