import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import { BrowserRouter } from 'react-router-dom'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { ConnectKitProvider } from "connectkit";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'FucHSZeoIus8zjksFFjqvjNd-4Z68E-6' }), publicProvider()],
)
 
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

function App() {
  return (
    <WagmiConfig config={config}>
    <ConnectKitProvider
        theme="nouns"
        customTheme={{
          "--ck-accent-color": "#58ADF7",
          "--ck-accent-text-color": "#ffffff",
          "--ck-border-radius": 42,
        }}
      >
    <BrowserRouter>
      <Navbar />

      <Home/>
          
    </BrowserRouter>
    </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
