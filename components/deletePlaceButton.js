import React from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from 'notistack';
import { DELETE_PLACE } from "../GraphQl/places";

const DeletePlaceButton = ({ id, label = "Delete place" }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [deletePlace] = useMutation(DELETE_PLACE, {
    onCompleted: ({ deletePlace: { name } }) => {
      enqueueSnackbar(`${name} has been successfully removed`, { variant: "success" });
    }
  })

  return (
    <span
      onClick={() => deletePlace({ variables: { id } })}
    >
      {label}
    </span>
  )
}

export default DeletePlaceButton;
