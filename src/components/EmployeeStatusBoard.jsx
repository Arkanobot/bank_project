import {
  Box,
  HStack,
  Text,
  Button,
  SimpleGrid,
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import { LuSlidersHorizontal } from "react-icons/lu";
function EmployeeStatusBoard({ tableHeaders, employeeDetails }) {
  return (
    <Box bg={"white"} minH={"30vh"} rounded={"lg"} p={5}>
      <HStack justifyContent={"space-between"}>
        <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
          Employee Status
        </Text>
        <Box>
          <Button bg={"gray.100"} rounded="md" color={"darkblue.700"}>
            Filter & Sort
            <Box mx={2}>
              <LuSlidersHorizontal color="darkblue.700" />
            </Box>
          </Button>
        </Box>
      </HStack>
      <HStack>
        <Box my={3} w={"full"} borderBottom={"1px"} borderColor={"gray.300"}>
          <SimpleGrid columns={7} w={"full"}>
            {tableHeaders.map((header) => {
              return (
                <GridItem
                  colSpan={header.span}
                  color={"gray.500"}
                  fontSize={"sm"}
                  display={"flex"}
                  justifyContent={header.pos}
                  mb={2}
                >
                  {header.name}
                </GridItem>
              );
            })}
          </SimpleGrid>
        </Box>
      </HStack>
      {/**emp deets */}
      <SimpleGrid
        columns={7}
        w={"full"}
        my={3}
        alignItems={"center"}
        fontWeight={"semibold"}
      >
        {employeeDetails.map((employee) => {
          return (
            <>
              <GridItem colSpan={2} my={2}>
                <HStack>
                  <Avatar
                    size={"sm"}
                    name={employee.name}
                    src={employee.avatar}
                  />
                  <Text>{employee.name}</Text>
                </HStack>
              </GridItem>
              <GridItem colSpan={2} my={2}>
                {employee.department}
              </GridItem>
              <GridItem colSpan={1} my={2}>
                {employee.age}
              </GridItem>
              <GridItem colSpan={1} my={2}>
                <HStack>
                  <Text
                    m={0}
                    fontWeight={"bold"}
                    color={employee.growth === "+" ? "green.600" : "red.600"}
                  >
                    {employee.growth}
                  </Text>
                  <Text m={0}>{employee.disipline}</Text>
                </HStack>
              </GridItem>
              <GridItem colSpan={1} my={2}>
                <Box
                  alignContent={"center"}
                  justifyContent={"center"}
                  p={1}
                  rounded={"md"}
                  color={
                    employee.status === "Permanent" ? "green.600" : "gray.600"
                  }
                  bg={
                    employee.status === "Permanent" ? "green.200" : "gray.200"
                  }
                >
                  <Text textAlign={"center"}>{employee.status}</Text>
                </Box>
              </GridItem>
            </>
          );
        })}
      </SimpleGrid>
      {/**emp deets end here */}
    </Box>
  );
}

export default EmployeeStatusBoard;
