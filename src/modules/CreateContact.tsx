import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact, updateStateOfSingleContact } from '../redux/actions/contactAction';

const viewModeView = "VIEW"
const viewModeNew = "NEW"
const viewModeEdit = "Edit"
const viewModeUpdate = "Save"

const initialcontactData = {
    name: '',
    phone: '',
    email: '',
    desc: '',
}

const CreatecontactData = () => {
    const [viewMode, setViewMode] = useState(viewModeView)
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openFailureAlert, setOpenFailureAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [contactData, setcontactData] = useState<IContact>(initialcontactData);

    const dispatch = useDispatch()
    const singleContact = useSelector((state: any) => state.contact.user)
    console.log(singleContact)

    const clear = () => {
        setViewMode(viewModeView)
        setcontactData(initialcontactData)
    }

    const openSuccess = (message: string) => {
        setMessage('');
        setOpenSuccessAlert(true);
        setOpenFailureAlert(false);
        setMessage(message);
    }
    const openFailure = (message: string) => {
        setMessage('');
        setOpenSuccessAlert(false);
        setOpenFailureAlert(true);
        setMessage(message);
    }

    const ValidateCampaign = () => {
        return ""
    }

    const saveContactData = () => {
        // let err = ValidateCampaign();
        // if (err !== "") {
        //     openFailure(err);
        //     return;
        // } else {

        // }
        if (viewMode === viewModeNew) {
            console.log('new')
            dispatch(addContact(contactData))
        }
        else if (viewMode === viewModeUpdate) {
            console.log('edit')
            dispatch(updateContact(contactData, singleContact?._id))
        }
    }

    useEffect(() => {

        if (singleContact) {
            setViewMode(viewModeEdit)
            setcontactData(singleContact)
        }

    }, [singleContact])

    useEffect(() => {
        setViewMode(viewModeView)
        dispatch(updateStateOfSingleContact(null))
    }, [])


    return (
        <Grid container spacing={2}>
            {/* <SuccessFailureAlert
                openSuccessAlert={openSuccessAlert}
                message={message}
                openFailureAlert={openFailureAlert}
                setopenSuccessAlert={setOpenSuccessAlert}
                setopenFailureAlert={setOpenFailureAlert}
            /> */}
            <Grid item xs={12} md={12} lg={12} >
                <Button
                    style={{ fontSize: 10, marginRight: 10 }}
                    size='small'
                    onClick={() => setViewMode(viewModeNew)}
                    disabled={viewMode !== viewModeView}
                    variant="contained" color="error">
                    Create New
                </Button>

                <Button
                    style={{ fontSize: 10, marginRight: 10 }}
                    size='small' color="error"
                    variant="contained"
                    onClick={() => setViewMode(viewModeUpdate)}
                    disabled={viewMode !== viewModeEdit}
                >
                    Edit
                </Button>
                <Button
                    style={{ fontSize: 10, marginRight: 10 }}
                    size='small' color="primary"
                    variant="contained"
                    onClick={() => saveContactData()}
                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                >
                    Save
                </Button>
                <Button
                    style={{ fontSize: 10, marginRight: 10, backgroundColor: '#eceff1', color: 'black' }}
                    size='small'
                    onClick={() => {
                        clear()
                    }}
                    variant="contained"
                >
                    Cancel
                </Button>

            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={2} sx={{ p: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box marginBottom="1rem">
                                <Typography textAlign='center' fontWeight='bold' style={{ textDecoration: 'underline' }}>Contact Form </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                value={contactData?.name}
                                onChange={(e) =>
                                    setcontactData({ ...contactData, name: e.target.value })
                                }
                                disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                size='small' fullWidth id="outlined-basic" label="Name" variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                value={contactData?.phone}
                                onChange={(e) =>
                                    setcontactData({ ...contactData, phone: e.target.value })
                                }
                                disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                size='small' fullWidth id="outlined-basic" label="Phone" variant="outlined" type='number'
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                value={contactData?.email}
                                onChange={(e) =>
                                    setcontactData({ ...contactData, email: e.target.value })
                                }
                                disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                size='small' fullWidth id="outlined-basic" label="Email" variant="outlined" type='email'
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                                value={contactData?.desc}
                                onChange={(e) =>
                                    setcontactData({ ...contactData, desc: e.target.value })
                                }
                                disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                multiline rows={3} fullWidth id="outlined-basic" label="Description" variant="outlined" />
                        </Grid>



                    </Grid>
                </Paper>

            </Grid >


        </Grid >
    )
}

export default CreatecontactData