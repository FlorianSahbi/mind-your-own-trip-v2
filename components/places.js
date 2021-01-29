import Card from "../components/card";

function Places({ places }) {
  return (
    <main
      className="
      p-4
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
      pt-20
      border-red-400
      bg-gray-50
      "
    >
      {places.map(({ _id, name, preview, country, addedBy, code }) => {
        return (
          <Card key={_id} id={_id} name={name} preview={preview} country={country} addedBy={addedBy} code={code} />
        )
      })}
    </main>
  )
}

export default Places;
