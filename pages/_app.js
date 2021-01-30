import "tailwindcss/tailwind.css";
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';
import { SnackbarProvider } from "notistack";

const client = new ApolloClient({
  uri: 'https://mindyourowntrip.com/graphql/',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        hideIconVariant
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ApolloProvider>
  )
}

export default MyApp
