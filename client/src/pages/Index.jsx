import React from 'react';
import { useState } from 'react';
import { Paper, Chip } from '@mui/material';
import '../app.css'
const Index = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked)
    };

    return (
        <div>
            <Paper elevation={3}>
                <Chip label="login" color="primary"
                    variant='outlined' />
            </Paper>
        </div>
    );
};

export default Index;
