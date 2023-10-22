import { Box, Button, Text, Wrap } from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";

function BugReportBox() {
  return (
    <Box m={5}>
      <Box minH={"15vh"} w={"full"} rounded="md" bg={"darkblue.100"} p={5}>
        <Text
          textAlign={"center"}
          fontSize={"md"}
          fontWeight={"semibold"}
          color={"gray.700"}
        >
          Found a Bug?
        </Text>
        <Text textAlign={"center"} fontSize={"xs"} color={"gray.500"}>
          Report now to us if you find any bugs
        </Text>
        <Button m={1} colorScheme={"blue"} bg={"darkblue.700"} color={"white"}>
          <Wrap>
            <AiFillWarning size={20} color={"white"} />
            <Text fontSize={"sm"} mx={1}>
              Report
            </Text>
          </Wrap>
        </Button>
      </Box>
    </Box>
  );
}

export default BugReportBox;
