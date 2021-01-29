import Head from 'next/head'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const placess = [
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://media.routard.com/image/30/0/photo.1551300.w430.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t2.gstatic.com/images?q=tbn:ANd9GcSWegSDVni0F6z9a_RJSYPT4H732SRn_ptk_nGkeZxSNxqNoZE01QK35B315kSR26x2wgzLGqLtNlUobLfoc4jCrg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t1.gstatic.com/images?q=tbn:ANd9GcQqhVZm_aE0mamXOcr3KNOf7QOEwRTgh2cSzzgw_7i2-0Nbr5lGZPGcZJDfCZsWOOZc3cGzF7x07WKmzugmHNQgdQ",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t1.gstatic.com/images?q=tbn:ANd9GcR48qcQsZo5oySQ90gNu_742_2Q7_x9tkqMjQ10b8bVYLEmaCXI02Xn5nVtvrl6V3JiLD9kB_Phfv31mIxi_TwLAQ",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://www.familinparis.fr/wp-content/uploads/Chateaux/pierrefonds/le-chateau-de-pierrefonds.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://cf.bstatic.com/images/hotel/max1024x768/192/192201039.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://cms-assets.jung.de/cms/media/39/3967/980x496/standard/rijksmuseum-amsterdam-16.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://keukenhof.nl/wp-content/uploads/thumbail21-720x405-c-default.png",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://media.routard.com/image/30/0/photo.1551300.w430.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t2.gstatic.com/images?q=tbn:ANd9GcSWegSDVni0F6z9a_RJSYPT4H732SRn_ptk_nGkeZxSNxqNoZE01QK35B315kSR26x2wgzLGqLtNlUobLfoc4jCrg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t1.gstatic.com/images?q=tbn:ANd9GcQqhVZm_aE0mamXOcr3KNOf7QOEwRTgh2cSzzgw_7i2-0Nbr5lGZPGcZJDfCZsWOOZc3cGzF7x07WKmzugmHNQgdQ",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://t1.gstatic.com/images?q=tbn:ANd9GcR48qcQsZo5oySQ90gNu_742_2Q7_x9tkqMjQ10b8bVYLEmaCXI02Xn5nVtvrl6V3JiLD9kB_Phfv31mIxi_TwLAQ",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://www.familinparis.fr/wp-content/uploads/Chateaux/pierrefonds/le-chateau-de-pierrefonds.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://cf.bstatic.com/images/hotel/max1024x768/192/192201039.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://cms-assets.jung.de/cms/media/39/3967/980x496/standard/rijksmuseum-amsterdam-16.jpg",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    country: "United-State of America",
    src: "https://keukenhof.nl/wp-content/uploads/thumbail21-720x405-c-default.png",
  },
]

export default function Home({ places }) {
  console.log(places);
  return (
    <div>
      <Head>
        <title>Mind Your Own Trip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ROOT */}
      <div
        className="
          h-screen
          w-screen
          "
      >
        {/* HEADER */}
        <div
          className="
        bg-blue-200
        w-full
        flex
        justify-between
        h-16
        "
        >
          <div
            className="
              flex
              h-full
              items-center  
              text-3xl
              font-extralight
              ml-4
            "
          >
            Mind Your Own Trip
          </div>
          <div
            className="
              flex
              h-full
              items-center  
              text-md
              font-extralight
              mr-4
            "
          >
            <Link href="/users">
              <a>Users</a>
            </Link>
          </div>
        </div>
        {/* GRID */}
        <div
          className="
            p-4
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
            border-red-400
            bg-gray-50
           
            "
        >
          {/* CARD */}
          {places.map(({ name, preview, country, addedBy }) => {
            return (
              <div
                className="
                  h-full
                  w-full
                  shadow-lg
                  transition
                  hover:shadow-xl
                  border-green-400
                  "
              >
                {/* HEADER */}
                <div
                  className="
                    p-4
                    flex
                    items-center
                    text-gray-900
                    font-extralight
                    text-xl
                    "
                >
                  <img
                    className="
                      rounded-full
                      h-8
                      w-8
                      object-cover
                      mr-4
                      "
                    src={addedBy.profilePicture}
                  />
                  {name}
                </div>
                <img
                  className="
                    h-64
                    w-full
                    object-cover
                    mr-4
                    "
                  src={preview}
                />
                {/* FOOTER */}
                <div
                  className="
                    text-gray-900
                    font-extralight
                    text-sm
                    p-4
                    text-right
                    "
                >
                  {country}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://mindyourowntrip.com/graphql/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
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
      places: data.getPlaces,
    }
  }
}
