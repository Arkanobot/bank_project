import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Header from "./components/Header";
import CreateCompany from "./components/CreateCompany";
import CreateForm from "./components/CreateForm";
import CreatePage from "./components/CreatePage";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Flex>
        {/**Sidebar goes here */}
        <Box
          h="100vh"
          bg={"white"}
          minWidth={{ base: "0%", md: "210px" }}
          maxWidth={{ base: "100%", md: "210px" }}
        >
          <SideBar />
        </Box>
        {/** */}
        <Box w={{ base: "100%", md: "full" }}>
          <Box h="10%" p={"5"} bg="darkblue.900" color={"white"}>
            <Header />
            {/**redux state - for sidebar header comes here as main header name */}
          </Box>
          <Box p={"5"} bg={"gray.50"} h={"90%"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-company" element={<CreateCompany />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/create-form" element={<CreateForm />} />
              <Route path="/company/:companyId" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
