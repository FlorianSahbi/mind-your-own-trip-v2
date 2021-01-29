import React from "react";
import { CircularProgress, TextField, Button, Typography } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from 'notistack';
import { useForm } from "react-hook-form";
import { GET_PLACE, UPDATE_PLACE } from "../GraphQl/places";

const UpdatePlaceForm = ({ id, handleSave }) => {

  const { register, handleSubmit } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const { data, loading, error } = useQuery(GET_PLACE, {
    variables: { id }
  })

  const [UpdatePlace] = useMutation(UPDATE_PLACE, {
    onCompleted: ({ updatePlace: { name } }) => {
      console.log("ok", name)
      enqueueSnackbar(`${name} has been successfully updated`, { variant: "success" });
      handleSave && handleSave();
    }
  })

  const onSubmit = ({ name, country, code, preview, lat, lng }) => UpdatePlace({ variables: { id, name, country, code, preview, lat: parseFloat(lat), lng: parseFloat(lng) } });

  if (error) {
    return <p>Error...</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <form
      id="update-place-form"
      onSubmit={handleSubmit(onSubmit)}
      className="
      flex
      flex-col
      space-y-4
      p-4
      w-full
      "
    >
      <p>Update {data?.getPlace.name}.</p>
      <TextField
        inputRef={register}
        name="name"
        label="Name"
        variant="outlined"
        defaultValue={data?.getPlace.name}
      />
      <TextField
        inputRef={register}
        name="country"
        label="Country"
        variant="outlined"
        defaultValue={data?.getPlace.country}
      />
      <TextField
        inputRef={register}
        name="code"
        label="Code"
        variant="outlined"
        defaultValue={data?.getPlace.code}
      />
      <TextField
        inputRef={register}
        name="preview"
        label="Preview url"
        variant="outlined"
        defaultValue={data?.getPlace.preview}
      />
      <TextField
        inputRef={register}
        name="lat"
        label="Latitude"
        variant="outlined"
        defaultValue={data?.getPlace.location.coordinates[1]}
      />
      <TextField
        inputRef={register}
        name="lng"
        label="Longitude"
        variant="outlined"
        defaultValue={data?.getPlace.location.coordinates[0]}
      />
      <Button
        type="submit"
        form="update-place-form"
        color="primary"
        autoFocus
      >
        Save
      </Button>
    </form>
  )
}

export default UpdatePlaceForm;
