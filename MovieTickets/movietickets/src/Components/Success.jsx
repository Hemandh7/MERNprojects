
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading, Stack, Text } from '@chakra-ui/react';

const Success = () => {
  return (
    <Stack spacing={8} align="center">
      <Heading as="h2" size="xl">Booking Successful!</Heading>
      <Text>
        Thank you for booking with us. Your payment has been received successfully.
      </Text>
      <Text>
        We have sent a confirmation email to your registered email address.
      </Text>
      <Link to="/">Go back to Home</Link>
    </Stack>
  );
};

export default Success;
