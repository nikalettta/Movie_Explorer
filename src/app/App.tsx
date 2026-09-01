import '../styles/variables.css'
import '../styles/fonts.css'
import '../styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
