import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './wagmi'
import { Web3Modal } from '@web3modal/wagmi/react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3Modal projectId={import.meta.env.VITE_WC_PROJECT_ID || 'c0e5d22694094f9b28b48213d21a4f8f'} />
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
