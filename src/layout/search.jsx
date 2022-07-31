import React from 'react';
import style from './style.css';

import { InputAdornment, TextField } from '@material-ui/core';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
export default function Search() {
  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        id="input-with-icon-textfield1"
        className="search w-100 mb-1"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          )
        }}
      />
    </>
  );
}
