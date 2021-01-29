import Link from 'next/link'

function Header() {
  return (
    <nav
      className="
      bg-white
      fixed
      shadow-md
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
    </nav>
  )
}

export default Header;
