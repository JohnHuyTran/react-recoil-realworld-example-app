import { makeStyles } from "@mui/material";

const useStyles = makeStyles({
    MDisplay : {
        '& .MuiDisplay' : {
           display: 'flex !important',
           justifyContent: 'center',
           alignItems: 'center'
        }
    }
})

export {useStyles}