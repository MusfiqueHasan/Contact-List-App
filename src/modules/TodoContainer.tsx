import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateContact from './CreateContact';
import ViewAllContact from './ViewAllContact';


const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const TodoContainer = () => {
    const theme = useTheme();
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    };
    const handleChangeIndex = (index: number) => { setValue(index) };

    return (
        <div >
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Create Contact List" {...a11yProps(0)} />
                    <Tab label="View All Contact" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Box>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CreateContact />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ViewAllContact />
                </TabPanel>
            </Box>

        </div>
    )
}

export default TodoContainer