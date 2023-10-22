import { Field } from "formik";
import { Box, FormLabel, Input, Textarea } from "@chakra-ui/react";

function FieldRender({
  name,
  label,
  placeholder,
  type = "text",
  isRequired = true,
  size = "lg",
}) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Box flexGrow={1} mb={5}>
          <FormLabel color={"darkblue.900"} fontSize={"lg"}>
            {label}
          </FormLabel>
          {type === "text" ? (
            <Input
              type={type}
              placeholder={placeholder}
              isRequired={isRequired}
              size={size}
              bg={"white"}
              {...field}
            />
          ) : (
            <Textarea
              type={type}
              placeholder={placeholder}
              isRequired={isRequired}
              size={size}
              bg={"white"}
              {...field}
              rows={1}
            />
          )}
        </Box>
      )}
    </Field>
  );
}

export default FieldRender;
