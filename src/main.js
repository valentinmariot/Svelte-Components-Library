import './app.css'
// import App from './App.svelte'
import Switch from './components/Switch.svelte'

const app = new Switch({
  target: document.getElementById('app')
})

export default app
