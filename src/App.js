import {Header} from './components/Header/Header'
import {BrowserRouter} from 'react-router-dom'
import './null.scss'
import {Main} from './components/Main/Main'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <Header/>
          <Main/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
