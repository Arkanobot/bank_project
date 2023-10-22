import {
  FormControl,
  Box,
  Select,
  Text,
  Wrap,
  FormLabel,
  Checkbox,
  HStack,
  SimpleGrid,
  Flex,
  Button,
} from "@chakra-ui/react";
import checkboxOptions from "./checkboxOptions";
import FormInput from "./FormInput";
import ButtonCustom from "./Button";
function CreateForm() {
  const options = [
    {
      name: "Add Group",
      placeholder: "Select group",
      subOptions: [
        { name: "Group1", value: "Group1" },
        { name: "Group2", value: "Group2" },
        { name: "Group3", value: "Group3" },
      ],
    },
    {
      name: "Add Sub-group",
      placeholder: "Select sub-group",
      subOptions: [
        {
          name: "Sub-group1",
          value: "Sub-group1",
        },
        { name: "Sub-group2", value: "Sub-group2" },
        { name: "Sub-group3", value: "Sub-group3" },
      ],
    },
  ];

  return (
    <Box w={"100%"}>
      <FormControl isRequired={true}>
        <Box w={"46%"} my={3}>
          <FormInput
            name={"Form Name"}
            placeholder={"Name"}
            label={"formName"}
          />
        </Box>
        <Wrap w={"100%"} my={3} spacingX={10}>
          {options.map((option) => {
            return (
              <Box flexGrow={1} my={3}>
                <FormLabel fontSize={"xl"}>{option.name}</FormLabel>
                <Select
                  size="lg"
                  bg="white"
                  color="gray.500"
                  placeholder={option.placeholder}
                >
                  {option.subOptions.map((subOption) => {
                    return (
                      <option value={subOption.value}>{subOption.name}</option>
                    );
                  })}
                </Select>
              </Box>
            );
          })}
        </Wrap>
      </FormControl>
      <FormControl>
        <Wrap w={"100%"}>
          <Box flexGrow={1}>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              Add Field
            </Text>
          </Box>
        </Wrap>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} w={"100%"} my={3}>
          {checkboxOptions.map((option) => {
            return (
              <Box flexGrow={1} mr={"12vw"} fle>
                <HStack justifyContent={"space-between"}>
                  <FormLabel fontSize={"lg"} fontWeight={"semibold"}>
                    {option.name}
                  </FormLabel>
                  <Checkbox
                    colorScheme="purple"
                    size={"lg"}
                    value={option.value}
                    css={{
                      ".chakra-checkbox__control": {
                        borderRadius: "50%",
                      },
                    }}
                    defaultChecked={option.defaultCheck}
                  />
                </HStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </FormControl>
      <ButtonCustom name={"Create form"} />
    </Box>
  );
}
export default CreateForm;
