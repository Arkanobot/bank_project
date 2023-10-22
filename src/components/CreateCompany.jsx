import { Box, Text, FormControl, Button, SimpleGrid } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import ButtonCustom from "./Button";
import FieldRender from "./FieldRender";
import formikValues from "./FormikInitialValues";
import formCheckSchema from "./yupFormCheckSchema";

function CreateCompany() {
  return (
    <Box w="100%">
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        Company Details
      </Text>
      <Formik
        initialValues={formikValues}
        isInitialValid={false}
        validationSchema={formCheckSchema}
        onSubmit={(values, actions) => {
          // Handle form submission
          console.log("do Nothing");
        }}
      >
        {({ isValid }) => (
          <Form>
            <FormControl isRequired={true}>
              <SimpleGrid
                columns={2}
                my={5}
                h={"100%"}
                w={"100%"}
                spacingX={10}
              >
                <Box h={"100%"} w={"full"}>
                  <FieldRender
                    name={"companyName"}
                    label={"Company Name"}
                    placeholder={"Company Name"}
                  />
                  <FieldRender
                    name={"address"}
                    label={"Address"}
                    placeholder={"Address"}
                    type="textarea"
                  />
                  <FieldRender
                    name={"city"}
                    label={"City"}
                    placeholder={"City"}
                  />
                  <FieldRender
                    name={"teleNo"}
                    label={"Telephone No."}
                    placeholder={"Enter"}
                  />
                  <FieldRender
                    name={"email"}
                    label={"Email"}
                    placeholder={"Email"}
                  />
                  <FieldRender
                    name={"gstNo"}
                    label={"GST No."}
                    placeholder={"GST No."}
                  />
                  <FieldRender
                    name={"licenseName"}
                    label={"License Name"}
                    placeholder={"Name"}
                  />
                  <FieldRender
                    name={"panNo"}
                    label={"PAN No."}
                    placeholder={"Enter Number"}
                  />
                </Box>
                <Box h={"100%"} w={"full"}>
                  <FieldRender
                    name={"mailingName"}
                    label={"Mailing Name"}
                    placeholder={"Mailing Name"}
                  />
                  <FieldRender
                    name={"state"}
                    label={"State"}
                    placeholder={"State"}
                  />
                  <FieldRender
                    name={"pinCode"}
                    label={"Pin Code"}
                    placeholder={"Pin Code"}
                  />
                  <FieldRender
                    name={"mobNo"}
                    label={"Mobile No."}
                    placeholder={"Enter"}
                  />
                  <FieldRender
                    name={"webAddr"}
                    label={"Website Address"}
                    placeholder={"URL"}
                  />
                  {/**need to remove this but maintain same space */}
                  <Box flexGrow={1} mb={"74px"} color={"gray.100"}>
                    .
                  </Box>
                  {/**need to remove the above but maintain same space */}
                  <FieldRender
                    name={"licenseNo"}
                    label={"License No."}
                    placeholder={"Number"}
                  />
                  <Button
                    display={"flex"}
                    bg={"darkblue.900"}
                    color={"white"}
                    justifyContent={"flex-end"}
                    alignSelf={"flex-end"}
                    size={"sm"}
                    ml={"auto"}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Add License
                  </Button>
                </Box>
              </SimpleGrid>
              {isValid && <ButtonCustom />}
            </FormControl>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CreateCompany;
