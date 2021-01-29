import Head from 'next/head'

const users = [
  {
    name: "Delphine",
    src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/68710781_2885361008146534_1548794064822861824_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=0bc3sIy4H4MAX9FTzel&_nc_ht=scontent-cdt1-1.xx&oh=546f190f41225ba42450774f5064dd7e&oe=603989A3",
  },
  {
    name: "Florian",
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/1492150_690083844337299_1653997347_o.jpg?_nc_cat=111&ccb=2&_nc_sid=de6eea&_nc_ohc=7Q3AAI69vQIAX-ZItsR&_nc_ht=scontent-cdg2-1.xx&oh=49978b2369b8b30ae18fa2dd0d4158a6&oe=603A57BE",
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
          flex
          justify-center
          items-center
          text-center
          "
      >
        {/* CARD */}
        {users.map(({ name, src, country }) => {
          return (
            <div
              className="
                text-3xl
                font-extralight
                "
            >
              <img
                className="
                    h-80
                    transform
                    skew-y-2
                    object-cover
                    mb-4
                    "
                src={src}
              />
              {name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
