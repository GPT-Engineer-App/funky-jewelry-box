import { Container, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Shop = () => {
  return (
    <>
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Shop
        </Heading>
        {}
      </Container>
    </>
  );
};

export default Shop;
