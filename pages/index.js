import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Header from '../components/header';
import Places from '../components/places';
import CreatePlaceForm from "../components/createPlaceForm";
import { GET_PLACES } from '../GraphQl/places';

export default function Home() {
  const { loading, error, data } = useQuery(GET_PLACES, {
    onCompleted: data => console.log
  })
  if (error) {
    return (
      <p>Error...</p>
    )
  }
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  if (data) {

    return (
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
          <Places places={data.getPlaces} />
        </div>
      </div>
    )
  }
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
