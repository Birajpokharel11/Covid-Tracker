import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
// import "./InfoBox.css";

const InfoBox = ({ title, cases, total }) => {
  return (
    <div>
      <Card clasName="  infoBox">
        <CardContent>
          <Typography
            className="infoBox__title"
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <h2 className="infoBox__cases">{cases}</h2>
          <Typography className="infobox__total" color="textSecondary">
            {total} total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
