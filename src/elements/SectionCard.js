import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SectionCard = ({content}) => {
    return (
        <Card className="section-card">
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
};

export default SectionCard;