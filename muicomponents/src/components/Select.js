
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicSelect() {
    const[countries,setCountries]=useState([]);
    const[selectCountry,setSelectCountry]=useState('')
    const countriesOption=[
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
    ]

  const handleChange = (event) => {
    setCountries(event.target.value);
    setSelectCountry(event.target.value)
  };
  const handleButtonClick=()=>{
    console.log('Selectd country is',selectCountry)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          value={countries}
          label="Countries"
          onChange={handleChange}
        >
            {countriesOption.map((country)=>(
                <MenuItem key={country.value} value={country.value}>{country.label}</MenuItem>
            ))}
        </Select>
        <Button variant="contained" onClick={handleButtonClick}  sx={{marginTop:'30px', width:'30px'}} >Submit</Button>
      </FormControl>
    </Box>
  );
}