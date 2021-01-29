import { useState } from "react";
import countryToFlag from '../countryToFlag';
import DeletePlaceButton from './deletePlaceButton';
import UpdatePlaceForm from './updatePlaceForm';
import { Dialog } from "@material-ui/core";

function Card({ id, name, preview, country, addedBy, code }) {
  const [editModal, setEditModal] = useState(false);

  return (
    <>
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
            layout="fill"
            loading="lazy"
            src={addedBy.profilePicture}
            alt={`pp-${addedBy.firstName}`}
          />
          {name}
        </div>
        {/* MEDIA */}
        <img
          className="
        h-64
        w-full
        object-cover
        mr-4
        "
          layout="fill"
          loading="lazy"
          src={preview}
          alt={`preview-${name}`}
        />
        {/* FOOTER */}
        <div
          className="
        text-gray-900
        font-extralight
        text-sm
        p-4
        text-right
        flex
        justify-between
        items-center
        "
        >
          <div
            className="
            text-red-900
            cursor-pointer
            hover:text-purple-900
            "
          >
            <DeletePlaceButton id={id} />
            <p onClick={() => setEditModal(true)}>
              Update
            </p>
          </div>
          <div>
            {countryToFlag(code)} {country}
          </div>
        </div>
      </div>
      <Dialog
        open={editModal}
        onClose={() => setEditModal(false)}
      >
        <UpdatePlaceForm
          id={id}
          handleSave={() => setEditModal(false)}
        />
      </Dialog>
    </>
  )
}

export default Card;
