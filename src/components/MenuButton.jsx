import { HStack, Box, Icon, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
function MenuButton({
  name,
  nav = "/",
  icon,
  transform = "none",
  active = false,
  arrowBefore = false,
  arrowAfter = false,
}) {
  const location = useLocation();
  return (
    <ChakraLink as={ReactRouterLink} to={nav}>
      <HStack
        w={"full"}
        _hover={{
          bg: "darkblue.100",
          "& div": { bg: "darkblue.700", color: "white" },
        }}
        bg={location.pathname === nav ? "darkblue.100" : "white"}
      >
        {arrowBefore ? (
          active ? (
            <ChevronDownIcon ml={1} />
          ) : (
            <ChevronRightIcon ml={1} />
          )
        ) : null}
        <Box
          transform={transform}
          m={3}
          p={2}
          rounded="lg"
          color={location.pathname === nav ? "white" : null}
          bg={location.pathname === nav ? "darkblue.700" : "gray.200"}
          _hover={{ bg: "darkblue.700" }}
        >
          <Icon as={icon} />
        </Box>
        <Text fontWeight={"semibold"}>{name}</Text>
        {arrowAfter ? (
          active ? (
            <ChevronDownIcon mx={10} />
          ) : (
            <ChevronRightIcon mx={10} />
          )
        ) : null}
      </HStack>
    </ChakraLink>
  );
}

export default MenuButton;
