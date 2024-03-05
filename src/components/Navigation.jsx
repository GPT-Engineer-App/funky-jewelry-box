import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex justifyContent="space-between" p={4}>
      <Link as={RouterLink} to="/" p={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/shop" p={2}>
        Shop
      </Link>
    </Flex>
  );
};

export default Navigation;
