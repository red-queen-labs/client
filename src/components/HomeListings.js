import React from 'react';
import HomeListingCard from './HomeLIstingCard';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';

const HomeListings = ({ data }) => {
  return (
    <Container className="listingsWrapper" maxWidth="md">
      <Typography variant="h5">Recently Indexed Listings</Typography>

      <div className="listingsContainer">
        {data.map(b => {
          return (
            <HomeListingCard
              photos={b.photos}
              address={b.address}
              desc={b.description}
              website={b.website}
              amentities={b.amentities}
              units={b.units}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default HomeListings;
