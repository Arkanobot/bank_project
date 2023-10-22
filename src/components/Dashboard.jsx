import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import Graph from "./Graph";
import EmployeeStatusBoard from "./EmployeeStatusBoard";

function Dashboard() {
  const cards = [
    {
      title: "Saving",
      growthStatus: "-",
      growth: "10.0%",
      infoNo: 856,
      info: "Employee",
    },
    {
      title: "Total Customer",
      growthStatus: "+",
      growth: "10.0%",
      infoNo: 856,
      info: "Employee",
    },
    {
      title: "Total Customer",
      growthStatus: "+",
      growth: "10.0%",
      infoNo: 856,
      info: "Employee",
    },
    {
      title: "Total Customer",
      growthStatus: "+",
      growth: "10.0%",
      infoNo: 856,
      info: "Employee",
    },
  ];
  const tableHeaders = [
    { name: "Employee Name", span: 2, pos: "flex-start" },
    { name: "Department", span: 2, pos: "flex-start" },
    { name: "Age", span: 1, pos: "flex-start" },
    { name: "Disipline", span: 1, pos: "flex-start" },
    { name: "Status", span: 1, pos: "flex-end" },
  ];

  const employeeDetails = [
    {
      avatar: "https://bit.ly/dan-abramov",
      name: "Justin Lipshutz",
      department: "Marketing",
      age: "22",
      growth: "+",
      disipline: "100%",
      status: "Permanent",
    },
    {
      avatar: "https://bit.ly/kent-c-dodds",
      name: "Marcus Culhane",
      department: "Marketing",
      age: "24",
      growth: "+",
      disipline: "95%",
      status: "Contract",
    },
    {
      avatar: "https://bit.ly/ryan-florence",
      name: "Leo Stanton",
      department: "Marketing",
      age: "28",
      growth: "+",
      disipline: "89%",
      status: "Permanent",
    },
  ];

  return (
    <Box p={5}>
      {/**top cards */}
      <Flex justifyContent={"space-between"}>
        {cards.map((card) => {
          return (
            <Box flexGrow={1} mx={2} p={3} bg="white" borderRadius={"lg"}>
              <VStack align={"start"}>
                <HStack w="full" justify={"space-between"} gap={1}>
                  <Text fontSize={"md"} color={"gray.500"}>
                    {card.title}
                  </Text>
                  <HStack
                    gap={0}
                    bg={card.growthStatus === "+" ? "green.200" : "red.200"}
                    px={1}
                    borderRadius={"3xl"}
                    fontSize={"2xs"}
                    fontWeight={"bold"}
                    color={card.growthStatus === "+" ? "green.600" : "red.600"}
                  >
                    {card.growthStatus === "+" ? (
                      <FaArrowTrendUp />
                    ) : (
                      <FaArrowTrendDown />
                    )}

                    <Text fontSize={"2xs"}>{card.growth}</Text>
                  </HStack>
                </HStack>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {card.infoNo}
                </Text>
                <Text fontSize={"sm"} color={"gray.400"}>
                  {card.info}
                </Text>
              </VStack>
            </Box>
          );
        })}
      </Flex>
      {/**dashboard list */}
      <SimpleGrid columns={10} spacing={10} my={5} mx={2} w={"full"}>
        <GridItem colSpan={6}>
          <EmployeeStatusBoard
            tableHeaders={tableHeaders}
            employeeDetails={employeeDetails}
          />
        </GridItem>
        <GridItem colSpan={4}>
          <Graph name={"Employee Composition"} employeeCount={856} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
