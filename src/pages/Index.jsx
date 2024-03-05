import React, { useState } from "react";
import { Box, Container, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, NumberInput, NumberInputField, VStack, HStack, Text } from "@chakra-ui/react";
import { FaEye, FaChartBar } from "react-icons/fa";

const Index = () => {
  const [volume, setVolume] = useState("");
  const [price, setPrice] = useState(null);

  // Function to calculate price based on volume
  const calculatePrice = (vol) => {
    const gradations = [
      { min: 0, max: 1, price: 100 },
      { min: 1, max: 2, price: 200 },
      { min: 2, max: 3, price: 300 },
      // ...add more gradations as needed
    ];

    const gradation = gradations.find((g) => vol > g.min && vol <= g.max);
    if (gradation) {
      setPrice(gradation.price);
    } else {
      setPrice("Custom pricing required");
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Cerberus Control Room
        </Heading>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            System Overview
          </Heading>
          <Button leftIcon={<FaEye />} mt={4}>
            View All Sections
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Reports & Statistics
          </Heading>
          <Button leftIcon={<FaChartBar />} mt={4}>
            Generate Reports
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Price Calculator
          </Heading>
          <FormControl id="stoneVolume" mt={4}>
            <FormLabel>Enter Stone Volume (m3)</FormLabel>
            <HStack>
              <NumberInput min={0} onChange={(valueString) => setVolume(valueString)}>
                <NumberInputField value={volume} />
              </NumberInput>
              <Button onClick={() => calculatePrice(parseFloat(volume))}>Calculate Price</Button>
            </HStack>
            {price && (
              <Text mt={2}>
                Price: {price} ruble{price !== "Custom pricing required" ? "s" : ""}
              </Text>
            )}
          </FormControl>
        </Box>

        {/* Example Table (You can implement dynamic data based on the actual requirements) */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Shipment Permissions
          </Heading>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Stone ID</Th>
                <Th>Volume (m3)</Th>
                <Th>Price (ruble)</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Example row data */}
              <Tr>
                <Td>001</Td>
                <Td>1.45</Td>
                <Td>200</Td>
                <Td>Approved</Td>
              </Tr>
              <Tr>
                <Td>002</Td>
                <Td>2.45</Td>
                <Td>300</Td>
                <Td>Pending</Td>
              </Tr>
              {/* Add more rows as needed */}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
