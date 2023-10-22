import { Flex, Box, Avatar, Text, VStack, Wrap } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import avatar from "../assets/logo.jpg";
const data = [
  { name: "DSA", id: 1 },
  { name: "Nidhi Pvt. Ltd", id: 2 },
  { name: "Nidhi Pvt. Ltd", id: 3 },
];

function Home() {
  return (
    <Flex w={"full"}>
      <VStack align={"flex-start"} w={"full"}>
        <ChakraLink as={ReactRouterLink} to={"/create-company"}>
          <Box
            m={5}
            px={5}
            py={3}
            bg={"darkblue.900"}
            color={"white"}
            fontSize={"2xl"}
            borderRadius={"lg"}
          >
            Create Company
          </Box>
        </ChakraLink>
        <Box m={5}>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Companies
          </Text>
        </Box>
        <Box>
          <Wrap>
            {data.map((company) => {
              return (
                <ChakraLink as={ReactRouterLink} to={`/company/${company.id}`}>
                  <Box
                    m={5}
                    px={7}
                    py={5}
                    bg={"darkblue.900"}
                    color={"white"}
                    fontSize={"xl"}
                    borderRadius={"xl"}
                    w={"250px"}
                  >
                    <Wrap>
                      <Avatar size={"sm"} src={avatar} name={company.name} />
                      <Text>{company.name}</Text>
                    </Wrap>
                  </Box>
                </ChakraLink>
              );
            })}
          </Wrap>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Home;
