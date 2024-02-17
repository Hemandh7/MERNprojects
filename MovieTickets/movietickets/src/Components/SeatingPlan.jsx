import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Heading, Stack, Text, Box } from '@chakra-ui/react';

const SeatingPlan = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleProceedToBooking = () => {
    if (selectedSeats.length > 0) {
      navigate(`/booking?seats=${selectedSeats.join(',')}`); 
    } else {
      alert('Please select at least one seat before proceeding to booking.');
    }
  };

  return (
    <Stack spacing={8} align="center" mt={8}>
      <Heading as="h2" size="xl">Seating Plan for Movie {movieId}</Heading>
      <Text fontSize="20px">
        Select your seats from the seating plan below. Once selected, click "Proceed to Booking" to proceed to the booking form.
      </Text>
      <Stack direction="column" spacing={2} alignItems="center">
        {['A', 'B', 'C', 'D', 'E', 'F'].map(row => (
          <Stack key={row} direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Text>{row}</Text>
            {Array.from({ length: 8 }, (_, index) => {
              const seat = `${row}${index + 1}`;
              const isBooked = false; 
              const isSelected = selectedSeats.includes(seat);
              return (
                <Button
                  key={index}
                  onClick={() => handleSeatSelection(seat)}
                  colorScheme={isBooked ? 'blue' : isSelected ? 'green' : 'white'}
                  bg={isSelected ? 'green' : isBooked ? 'blue' : 'white'}
                  color={isSelected || isBooked ? 'white' : 'black'}
                  boxShadow="md"
                  borderRadius="md"
                  width="32px"
                  height="32px"
                >
                  {seat}
                </Button>
              );
            })}
          </Stack>
        ))}
      </Stack>
      <Button onClick={handleProceedToBooking} color="blue" mt={8} fontSize="18px" borderRadius="full" px={8} py={4} _hover={{ bg: 'blue.500' }}>
        Proceed to Booking
      </Button>
      <Box mt={8}>
        <Text fontSize="lg" fontWeight="bold">Note:</Text>
        <Text fontSize="md">
          - Green seats are selected seats. <br />
          - Blue seats are already booked. <br />
          - White seats are available.
        </Text>
      </Box>
    </Stack>
  );
};

export default SeatingPlan;
