import Head from 'next/head'

const places = [
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

export default function Home() {
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
        {/* GRID */}
        <div
          className="
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
          {places.map(({ name, src, country }) => {
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
                    src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/68710781_2885361008146534_1548794064822861824_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=0bc3sIy4H4MAX9FTzel&_nc_ht=scontent-cdt1-1.xx&oh=546f190f41225ba42450774f5064dd7e&oe=603989A3"
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
                  src={src}
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
