import { DialogProvider } from '@contexts/DialogProvider.tsx'
import { ThemeModeProvider } from '@contexts/ThemeModeContext.tsx'
import { CssBaseline } from '@mui/material'
import { loadPlugins } from '@plugins/manager'
import PortalTarget from '@slots/PortalTarget.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RootProviderSlot from './RootProviderSlot.tsx'

loadPlugins().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeModeProvider>
        <CssBaseline />
        <RootProviderSlot>
          <DialogProvider>
            <App />
          </DialogProvider>
        </RootProviderSlot>
        <PortalTarget id="global-overlay" />
      </ThemeModeProvider>
    </StrictMode>,
  )
});