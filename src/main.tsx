import { Provider as JotaiProvider, createStore } from 'jotai'
import { DevTools, useAtomsDebugValue } from 'jotai-devtools'
import 'jotai-devtools/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './utils/styles/css-reset.css'
import './utils/styles/tailwind.theme.css'
import { ThemeProvider } from './utils/styles/Theme-Provider.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}

export const store = createStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider store={store}>
      <DebugAtoms />
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <DevTools />
        <App />
      </ThemeProvider>
    </JotaiProvider>
  </StrictMode>,
)
