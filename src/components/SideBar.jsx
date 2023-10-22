import { Image, Box, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import MenuButton from "./MenuButton";
import { useLocation } from "react-router-dom";

import {
  TbFlag3Filled,
  TbReportMoney,
  TbReportAnalytics,
} from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuClipboardSignature } from "react-icons/lu";
import { IoIosBookmarks } from "react-icons/io";
import { GiReceiveMoney, GiPayMoney, GiStairsGoal } from "react-icons/gi";
import { ImMakeGroup } from "react-icons/im";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import BugReportBox from "./BugReportBox";
function SideBar() {
  const location = useLocation();
  return (
    <VStack justifyContent={"space-between"} h={"full"}>
      <Box w={"full"}>
        <Box m={4} px={6}>
          <Image src={logo} />
        </Box>
        <Box my={5} py={2} borderColor={"gray.300"} borderBottom={"2px"}>
          <Box my={2} w={"full"}>
            {/**options go here */}
            <MenuButton name={"Dashboard"} icon={HiOutlineSquares2X2} />
            {(location.pathname.substring(0, 8).includes("/company") ||
              location.pathname === "/create" ||
              location.pathname === "/create-form") && (
              <>
                <MenuButton
                  name={"Create"}
                  icon={IoIosBookmarks}
                  nav={"/create"}
                  arrowAfter={true}
                  active={
                    location.pathname === "/create" ||
                    location.pathname === "/create-form"
                      ? true
                      : false
                  }
                />
                {(location.pathname === "/create" ||
                  location.pathname === "/create-form") && (
                  <>
                    <MenuButton
                      name={"Create Form"}
                      icon={LuClipboardSignature}
                      nav={"/create-form"}
                      arrowBefore={true}
                    />
                    <MenuButton
                      name={"Create Ledger"}
                      icon={ImMakeGroup}
                      nav={"/create-unavail1"}
                      arrowBefore={true}
                    />
                    <MenuButton
                      name={"Create Loan"}
                      icon={GiReceiveMoney}
                      nav={"/create-unavail2"}
                      arrowBefore={true}
                    />
                    <MenuButton
                      name={"Create Level"}
                      icon={GiPayMoney}
                      nav={"/create-unavail3"}
                      arrowBefore={true}
                    />
                  </>
                )}
                <MenuButton
                  name={"Career"}
                  icon={GiStairsGoal}
                  nav={"/create-unavail4"}
                />
                <MenuButton
                  name={"Balancesheet"}
                  icon={TbReportMoney}
                  nav={"/create-unavail5"}
                />
                <MenuButton
                  name={"Profit & Loss"}
                  icon={RiMoneyDollarCircleLine}
                  nav={"/create-unavail6"}
                />
                <MenuButton
                  name={"Report"}
                  icon={TbReportAnalytics}
                  nav={"/create-unavail"}
                />
              </>
            )}
          </Box>
        </Box>
        <Box>
          {/**Help and logout goes here */}

          <MenuButton
            name={"Help"}
            icon={TbFlag3Filled}
            nav={"/create-unavail7"}
          />
          <MenuButton
            name={"Logout"}
            icon={IoLogOut}
            transform={"rotate(180deg)"}
            nav={"/create-unavail"}
          />
        </Box>
      </Box>
      <BugReportBox />
    </VStack>
  );
}

export default SideBar;
