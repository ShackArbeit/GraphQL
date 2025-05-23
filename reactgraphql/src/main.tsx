import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient,InMemoryCache,ApolloProvider } from "@apollo/client"
import App from './App.tsx'

const client=new ApolloClient({
    uri:'https://countries.trevorblades.com/',
    cache:new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>
  </StrictMode>,
)
