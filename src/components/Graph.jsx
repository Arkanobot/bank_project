import { Box, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function Graph({ name, employeeCount }) {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Employee Composition",
        data: [65, 35],
        backgroundColor: ["rgba(22, 192, 152, 1)", "rgba(89, 50, 234, 1)"],
        borderColor: ["rgba(22, 192, 152, 1)", "rgba(89, 50, 234, 1)"],
        borderWidth: 0,
        cutout: 50,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        hoverBorderWidth: 5,
      },
    },
    aspectRatio: 1,
  };

  return (
    <Box bg={"white"} maxH={"31vh"} mr={3} rounded={"lg"} p={3}>
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        {name}
      </Text>
      <Box
        w={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          p={5}
          maxH={"200px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"200px"}
        >
          <Doughnut data={data} options={options} />
        </Box>
      </Box>
      <Box>
        <Text fontSize={"lg"} color={"gray.500"} textAlign={"center"}>
          {employeeCount} employee total
        </Text>
      </Box>
    </Box>
  );
}

export default Graph;
