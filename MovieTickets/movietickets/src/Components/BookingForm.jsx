import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Heading, Stack, Text, FormControl, FormLabel, Input, NumberInput, NumberInputField } from '@chakra-ui/react';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedSeats: [],
    totalBill: 0,
    payment: 0,
    paymentAccepted: false,
    paymentConfirmed: false
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const seats = searchParams.get('seats');
    if (seats) {
      setFormData(prevState => ({
        ...prevState,
        selectedSeats: seats.split(',')
      }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const ticketPrice = 150; 
    const totalBill = formData.selectedSeats.length * ticketPrice;
    setFormData(prevState => ({
      ...prevState,
      totalBill
    }));
  }, [formData.selectedSeats]);

  const handlePayment = () => {
    if (formData.payment < formData.totalBill) {
      alert('Please pay the full amount.');
    } else if (formData.payment > formData.totalBill) {
      const remainingAmount = formData.payment - formData.totalBill;
      if (window.confirm(`Remaining amount: Rs. ${remainingAmount}. Add this amount to valet?`)) {
        setFormData(prevState => ({
          ...prevState,
          paymentAccepted: true,
          paymentConfirmed: true
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        paymentAccepted: true,
        paymentConfirmed: true
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentConfirmed) {
      navigate('/success');
    } else {
      alert('Please confirm the payment before booking.');
    }
  };

  return (
    <Stack spacing={8} align="center" mt={8}>
      <Heading as="h2" size="xl" fontSize="20px" color="blue.500">Booking Form</Heading>
      <Text fontSize="20px">
        Please enter your name, email, and payment information to complete the booking process.
      </Text>
      <form onSubmit={handleSubmit} style={{ width: '80%' }}>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel fontSize="20px">Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} fontSize="20px" required />
          </FormControl>
          <FormControl id="email">
            <FormLabel fontSize="20px">Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} fontSize="20px" required />
          </FormControl>
          <FormControl id="selectedSeats">
            <FormLabel fontSize="20px">Selected Seats</FormLabel>
            <Input type="text" name="selectedSeats" value={formData.selectedSeats.join(', ')} readOnly fontSize="20px" />
          </FormControl>
          <FormControl id="totalBill">
            <FormLabel fontSize="20px">Total Bill</FormLabel>
            <Input type="text" name="totalBill" value={`Rs. ${formData.totalBill}`} readOnly fontSize="20px" />
          </FormControl>
          <FormControl id="payment">
            <FormLabel fontSize="20px">Enter Payment</FormLabel>
            <NumberInput  value={formData.payment} onChange={(value) => setFormData(prevState => ({ ...prevState, payment: value }))} min={0} fontSize="20px" required>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </Stack>
        {formData.paymentConfirmed ? (
          <Button type="button" colorScheme="green" mt={4} fontSize="20px" disabled>Payment Accepted</Button>
        ) : (
          <Button type="button" onClick={handlePayment} colorScheme="blue" mt={4} fontSize="20px">Confirm Payment</Button>
        )}
        <Button type="submit" colorScheme="blue" mt={4} fontSize="20px" disabled={!formData.paymentConfirmed}>Confirm Booking</Button>
      </form>
    </Stack>
  );
};

export default BookingForm;
