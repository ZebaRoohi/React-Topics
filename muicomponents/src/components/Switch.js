
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function SwitchLabels() {
    const[background,setBackground]=useState(true)

    const handleChange=()=>{
        setBackground((prev)=>!prev)
        document.body.style.backgroundColor = background ? 'gray' : 'white';
    }
  return (
    <FormGroup>
      <FormControlLabel control={<Switch checked={background} onChange={handleChange} />} label="Label" />
    </FormGroup>
  );
}