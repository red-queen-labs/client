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

const HomeListingCard = ({
  photos,
  address,
  desc,
  website,
  amentities,
  units,
}) => {
  return (
    <Card className="listingCard">
      <CardContent>
        <CardMedia
          className="cardMedia"
          image={photos[0]}
          title="Apartment Complex"
          alt="apartment"
        />

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
        <a href={website}>
          <Button size="small" color="primary">
            View
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default HomeListingCard;
