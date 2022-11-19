import React from 'react'
import ReactDOM from 'react-dom/client'
import {Car} from './useState'
import { App } from './useState'
import { Time } from './useEffect';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Car />
    <Time />
  </React.StrictMode>
)
