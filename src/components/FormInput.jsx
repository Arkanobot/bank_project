import { Box, FormLabel, Input } from "@chakra-ui/react";
function FormInput({ name, placeholder }) {
  return (
    <Box flexGrow={1}>
      <FormLabel color={"darkblue.900"} fontSize={"lg"}>
        {name}
      </FormLabel>
      <Input
        placeholder={placeholder}
        isRequired={true}
        size={"lg"}
        bg={"white"}
      />
    </Box>
  );
}

export default FormInput;
