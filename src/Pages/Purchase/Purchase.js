import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Purchase = () => {
    return (
        <Box style={{'width': '50%', 'margin': "auto"}}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Logic
            </Typography>
            <form onSubmit=''>
            <TextField
              disabled
              sx={{width: '95%', m: 1}}
              id="outlined-size-small"
              defaultValue=''
              size="small"
            />
            <TextField
              required
              sx={{width: '95%', m: 1}}
              id="outlined-size-small"
              name='patientName'
            //   onBlur={handleOnBlur}
              defaultValue='name'
              size="small"
            />
            <TextField
              required
              sx={{width: '95%', m: 1}}
              id="outlined-size-small"
              name="email"
            //   onBlur={handleOnBlur}
              defaultValue='email'
              size="small"
            />
            <TextField
              required
              sx={{width: '95%', m: 1}}
              id="outlined-size-small"
              name="phone"
            //   onBlur={handleOnBlur}
              defaultValue='Contact Number'
              size="small"
            />
            <TextField
              disabled
              sx={{width: '95%', m: 1}}
              id="outlined-size-small"
              defaultValue='date'
              size="small"
            />
            <Button type="submit" variant="contained">Book Appointment</Button>
            </form>
          </Box>
    );
};

export default Purchase;