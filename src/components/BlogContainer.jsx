import React from 'react'
import { Container, Stack, Typography, Grid, Paper } from '@mui/material';


export default function BlogContainer({imageUrl}) {

    return (
        <Grid item xs={12}>
          <Stack direction="row">
            <img
              src={imageUrl} // Replace with your image URL
              alt="Blog Image"
              style={{ width: '118%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <Typography variant="h6" style={{lineHeight:"29px", fontSize:"24px", fontWeight:"600"}} gutterBottom>
                CryptoInsights
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                15 Dec 2023
              </Typography>
              <Typography>
                Welcome to "CryptoInsights," your go-to source for staying informed in the fast-paced world of cryptocurrencies. In this dedicated blog section, we are committed to providing you with regular and insightful updates on market trends, in-depth price analyses, and comprehensive market reports. Our team of seasoned analysts at CryptoInsights diligently examines the intricate
              </Typography>
            </div>
          </Stack>
        </Grid>
      );
}
