import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import Header from '../components/header';
import Places from '../components/places';
import CreatePlaceForm from "../components/createPlaceForm";
import { SnackbarProvider } from "notistack";
const client = new ApolloClient({
  uri: 'https://mindyourowntrip.com/graphql/',
  cache: new InMemoryCache()
});
export default function Home({ places }) {
  console.log(places);
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

        <div>
          <Head>
            <title>Mind Your Own Trip</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Mind Your Own Trip by Delphine & FLo !" />
          </Head>
          <Header />
          <div
            className="
          h-screen
          w-screen
          "
          >
            <Places places={places} />
          </div>
        </div>
      </SnackbarProvider>
    </ApolloProvider>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://mindyourowntrip.com/graphql/',
    cache: new InMemoryCache()
  });

  const { data: { getPlaces } } = await client.query({
    query: gql`
     query GetPlaces {
        getPlaces {
          _id
          name
          country
          preview
          code
          addedBy {
            firstName
            profilePicture
          }
          location {
            coordinates
          }
        }
      }
    `
  });

  return {
    props: {
      places: getPlaces,
    }
  }
}
