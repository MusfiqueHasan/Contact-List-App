import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react';
import { IoIosPaper, } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getAllContact } from '../APIService/Api';

const ViewAllContact = () => {

    const allContacts: any = useSelector((state: any) => state)
    console.log(allContacts);


    // const [allContacts, setAllContacts] = useState<IContact[]>([])

    useEffect(() => {
        console.log('data');
    }, [allContacts])
    // useEffect(() => {
    //     getAllContact()
    //         .then(res => {
    //             if (res[0]) {
    //                 console.log(res[1]);
    //                 res[1] ? setAllContacts(res[1]) : setAllContacts([])
    //             } else {
    //                 console.log(res[1]);
    //             }
    //         })
    // }, [])

    return (
        <Grid container spacing={2}>
            {/* <SuccessFailureAlert
            openSuccessAlert={openSuccessAlert}
            message={message}
            openFailureAlert={openFailureAlert}
            setopenSuccessAlert={setOpenSuccessAlert}
            setopenFailureAlert={setOpenFailureAlert}
        /> */}


            <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={2} sx={{ p: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box marginBottom="1rem">
                                <Typography textAlign='center' fontWeight='bold' style={{ textDecoration: 'underline' }}>All Contact List </Typography>
                            </Box>
                        </Grid>

                        <Grid item md={12}>
                            <Paper elevation={2} >
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table" size='small'>
                                        <TableHead style={{ backgroundColor: "#2196f3", color: '#e91e63' }}>
                                            <TableRow >
                                                <TableCell style={{ color: 'white', fontSize: 12 }} ><b>Actions</b></TableCell>
                                                <TableCell style={{ color: 'white', fontSize: 12 }} align="right"><b>Name</b></TableCell>
                                                <TableCell style={{ color: 'white', fontSize: 12 }} align="right"><b>Phone</b></TableCell>
                                                <TableCell style={{ color: 'white', fontSize: 12 }} align="right"><b>Email</b></TableCell>
                                                <TableCell style={{ color: 'white', fontSize: 12 }} align="right"><b>Description</b></TableCell>
                                            </TableRow>
                                        </TableHead>


                                        <TableBody>
                                            {
                                                allContacts?.map(contact => {
                                                    return (
                                                        <TableRow hover >
                                                            <TableCell component="th" scope="row"
                                                                style={{ display: 'flex' }}
                                                            >
                                                                <Tooltip title="Manage Contact">
                                                                    <Button
                                                                        // onClick={() => {
                                                                        //     setSendedContact(contact);
                                                                        //     changeView(0);
                                                                        // }}
                                                                        variant="contained" color="primary" size='small'>
                                                                        <IoIosPaper />
                                                                    </Button>
                                                                </Tooltip>

                                                            </TableCell>
                                                            <TableCell align="right">{contact?.name}</TableCell>
                                                            <TableCell align="right">{contact?.phone}</TableCell>
                                                            <TableCell align="right">{contact?.email}</TableCell>
                                                            <TableCell align="right">{contact?.desc}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }



                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

                        </Grid>

                    </Grid>
                </Paper>

            </Grid >


        </Grid >
    )
}

export default ViewAllContact