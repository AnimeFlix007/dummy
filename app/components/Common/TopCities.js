import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function TopCities({
  onChange,
  onBlur,
  errors,
  touched,
  values,
  cities,
}) {
  return (
    <Autocomplete
      id="cities"
      name="cities"
      onChange={(event, value) => onChange("cities", value)}
      onBlur={() => onBlur({ cities: true })}
      isOptionEqualToValue={(option, value) => option?.value === value.value}
      limitTags={1}
      defaultValue={values.cities}
      multiple
      options={cities?.map((city) => {
        return {
          value: city?.City,
          label: city?.City,
        };
      })}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Top Cities/Towns"
          id="cities"
          name="cities"
          error={Boolean(touched.cities && errors.cities)}
          helperText={touched.cities && errors.cities}
        />
      )}
    />
  );
}