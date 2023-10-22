import {
  Flex,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import clipboard from "../assets/clipboard.jpg";
import moneyPouch from "../assets/moneypouch.jpg";
import lending from "../assets/lending.jpg";
import group from "../assets/group.jpg";
function CreatePage() {
  const options = [
    { name: "Create Form", icon: clipboard, link: "/create-form" },
    { name: "Create Group", icon: group, link: "/" },
    { name: "Create Loan", icon: moneyPouch, link: "/" },
    { name: "Create Level", icon: lending, link: "/" },
  ];
  return (
    <Flex h={"full"} alignItems={"center"} justifyContent={"center"}>
      <Wrap maxW={"50vw"} spacing={"10vh"}>
        {options.map((option) => {
          return (
            <WrapItem>
              <ChakraLink as={ReactRouterLink} to={option.link}>
                <Center w="20vw" h="25vh" bg="white">
                  <VStack>
                    <Image
                      boxSize={"50px"}
                      borderRadius={"lg"}
                      src={option.icon}
                    />
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>
                      {option.name}
                    </Text>
                  </VStack>
                </Center>
              </ChakraLink>
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}

export default CreatePage;
