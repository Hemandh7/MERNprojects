import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Text, Box, Image } from '@chakra-ui/react';


import moviesData from '../Data/movies.json';

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSelectMovie = (movieId) => {
    navigate(`/seating/${movieId}`);
  };

  return (
    <Grid templateColumns="1fr" gap={6} justifyContent="center" alignItems="center" p={8}>
      <Box textAlign="center">
        <Image src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-movie-board-icon-png-image_4751062.jpg" alt="CineTick Logo" boxSize="80px" mb={4} />
        <Text fontSize="25px" fontWeight="bold">CineTick</Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyContent="center" alignItems="center">
        {error && <Text color="red.500">Error: {error}</Text>}
        {moviesData.map(movie => (
          <Box
            key={movie.id}
            onClick={() => handleSelectMovie(movie.id)}
            cursor="pointer"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={4}
            margin-left={'40px'}
            padding={'10px'}
            border="1px"
            borderColor="black"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          >
            <Image src={movie.poster} alt={movie.title} boxSize="180px" mx="auto" mb={4} borderRadius="md" />
            <Text  fontSize="lg" fontWeight="bold">{movie.title}</Text>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
