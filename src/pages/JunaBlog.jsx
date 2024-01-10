import React from 'react'
import { Container, Stack, Typography, Grid, Paper } from '@mui/material';

import NavigationBar from '../components/NavigationBar';
import BlogContainer from '../components/BlogContainer';
import Header from '../components/Header';

function JunaBlog() {

  const imageUrl = 'https://s3-alpha-sig.figma.com/img/d6d6/424b/34747ff3f31945c5bd4d70cd8af7d09a?Expires=1705276800&Signature=Z-oubLOJ6EMAcgqNbwUIPmFRVeRndXNFU0PR~fUieP8K9nGk1XPfen8U9q7XI1n4KtDmNFXj0wNAyjwXbOwh8o7ExuDEFINA9FUzTN2-3SO5jju-WaxfZwH8FUboF5N37E3t6ii8mBtzYyBXuu5eDI89bJiR8832o1Ltn9-shwaSmeJjAHGS7qwwzIXf1Xpk1j3D~JdwkK7-r8LX4SmSF6TUEFv7zlnfBbn7fpCrnY64YPxSXlBr3BfgNm8rP5Im2ngScZOtvcuilRp3zVwRrqvrgSWU9YxuHS2qXq11bOr3y2clg7-3tNyWHeHIjLMSkvsLe0qKaLRfBsPwjxEIUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl1 = 'https://s3-alpha-sig.figma.com/img/cb48/b9b0/c8d96de180ff961f4b9cbdbdc04e494a?Expires=1705276800&Signature=KxRVUwtdhvL51u-J8qiNqdYI6flBuD277LZ4zVgKZWKqNqwVaJjOnSapz4dW6EANMGwtdkjLIg-3yCy9o-JO2PBnQlu8Jm0GDRPKb4UgxiJLeE9zR1ldBAV0Zlxy-Ts1Z6Kf8hf5GCjd3dojnqGFmSOuSh270pJvZEj7cjwGZC7hRDoEf0h6CkvtFKgXlGiSeP2dLrn1v1FQI61~ga2uLFInfWqQzYo3sNrWcgWydx6-LH3Sx4dLbgQ9H91HRrye5UbVKfvuQrsmmTFWPYixtMlKRrp1I-lHQO3XffBrkpLDUbmXXv70V1ChY421hLGnf9-D~qjx6FsKX0SVL4c4nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl2 = 'https://s3-alpha-sig.figma.com/img/e181/c169/d1fc66cbf2618d7925dd4b867fd17c60?Expires=1705276800&Signature=DlMI9eAA9KM9K2swnjNswyP3YvJGGJaD~KTb~hIflGIUv6q6WyWc5niH-FUKMFou07eviuo9YF0BdQSKhmQIVzyF~jWX28M-vZeBhGJCogGNaJJJeA8JCtMET46Xf5RT8a9N07iBlfRM-gbVARpvX7JDGwRHkWSZ7wwO1Hg4kwK3PmmFFHUyiqKhLOVb0vxZTMwQM8rUQxGrTWtepdu5ijDhnoRxRXV8Z1G1-YqI4RcRYRsELivklOlrJaswBKa48L9a5dVwDRl9QzEazDOuKPVTrMNlwsPJ5cRbRWXiE1AEZMwpg20-drY~ObY1GUZcvY4l6xPzEk0vU82q3~iBGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl3 = 'https://s3-alpha-sig.figma.com/img/7afc/3c65/d84462509ee96d9312d504e99284a348?Expires=1705276800&Signature=PjrhCBC6LSdAlEg9XJynLf6C~I43imbeHv61TviJkf01pzRW6~ykGF3O00SGx46N1ibLCn7tIf4~9qk6VwAXon6Q5Oyv8Ec24meN12ZA7bhaGuxLXUagiHsQYw~OcXJKBh5FGHTITyr3T-uI2C4903Zg~R78XgQA2L9mEPNM88MRWsZIgUk4X~9hHqrjQCgqdpZKx3N4O2Gwjm77Guf0g5Xkz4HC-wzQfafPOmB2Nr8IcClL7Y4fWrw4F8M6NBOiChvjEdjfBZ~Prr795t6xnlHYYOj7O2JOKr6KXOilYHBpJPC8hTe7iuzX87NXN9HKx~82Amx3QMFIfQT63g0k2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';



  return (
    <>
      <NavigationBar />
      <Stack direction="column">
        <Header leftText='Home'></Header>
        <Container>
          {/* Heading */}
          <Typography mt={4} variant="h4" align="left" style={{lineHeight:"20px", fontSize:"32px", fontWeight:"700"}} gutterBottom>
            Check out Our Juna Blog
          </Typography>

          {/* Blog Containers */}
          <Grid container spacing={2}>
          <BlogContainer imageUrl={imageUrl}></BlogContainer>
          <BlogContainer imageUrl={imageUrl1}></BlogContainer>
          <BlogContainer imageUrl={imageUrl2}></BlogContainer>
          <BlogContainer imageUrl={imageUrl3}></BlogContainer>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default JunaBlog