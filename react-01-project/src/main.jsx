import { React } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

const AnotherElement = (<a href="https://google.com" target='_blank'>Visit Google</a>)

// const reactElement = React.createElement(
//   'a1',
//   { href:"https://google.com", target:'_blank' },
//   'Visit Google!'
// )

createRoot(document.getElementById('root')).render(
  <App />
)
