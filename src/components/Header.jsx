import { Flex, Box, Avatar, HStack, Text, IconButton } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpg";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
function Header() {
  //header has to be updated with redux state to modify the title to match the current tab
  return (
    <Flex justify={"space-between"}>
      <Box fontSize={"3xl"} fontWeight={"semibold"}>
        Dashboard
      </Box>
      <Box>
        <HStack>
          <Avatar name={"Priya Sharma"} src={avatar} />
          <Text fontWeight={"semibold"}>Priya Sharma</Text>
          <ChevronDownIcon />
          <IconButton
            isRound={true}
            variant="solid"
            background={"white"}
            icon={<BellIcon />}
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default Header;
