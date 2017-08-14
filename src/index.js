import 'milligram/dist/milligram.min'
import Vue from 'vue'
import App from './components/App'
import './styles/app.scss'

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
