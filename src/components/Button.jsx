import { Flex, Button } from "@chakra-ui/react";

function ButtonCustom({
  name = "Submit",
  justify = "center",
  onClick = () => console.log("clicked"),
}) {
  return (
    <Flex justifyContent={justify}>
      <Button
        type="submit"
        m={5}
        bg={"darkblue.900"}
        color={"white"}
        size={"lg"}
        borderRadius={"3xl"}
        fontSize={"2xl"}
        _hover={{
          bg: "green.500",
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </Flex>
  );
}

export default ButtonCustom;
