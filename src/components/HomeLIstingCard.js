import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';

const HomeListingCard = ({ address, desc, website, amentities, units }) => {
  return (
    <Card className="listingCard">
      <CardActionArea className="cardActionArea">
        <CardMedia
          className="cardMedia"
          image="../images/west-chester-apartment-Living-room-1.jpg"
          title="Apartment Complex"
          alt="apartment"
        />

        <CardContent>
          <Typography
            className="address"
            gutterBottom
            variant="h4"
            component="h1"
          >
            {address}
          </Typography>

          <Table>
            <TableHead>
              <TableCell>Room #</TableCell>
              <TableCell>Bedrooms</TableCell>
              <TableCell>Bathrooms</TableCell>
              <TableCell>Sq. Ft.</TableCell>
              <TableCell>Rent</TableCell>
            </TableHead>
            {units.map(u => (
              <TableBody>
                <TableCell>{u.roomNum}</TableCell>
                <TableCell>{u.bedrooms}</TableCell>
                <TableCell>{u.bathrooms}</TableCell>
                <TableCell>{u.sqrFt}/mo</TableCell>
                <TableCell>${u.rent}</TableCell>
              </TableBody>
            ))}
          </Table>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: '12px' }}
          >
            {desc}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Save
          </Button>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default HomeListingCard;
