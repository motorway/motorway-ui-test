import { Box, ChakraBaseProvider, extendBaseTheme, Flex } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

import { Gallery } from "./Gallery";
import { Form } from "./Form";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Flex width={"100%"} height={"100vh"} justifyContent={"space-between"}>
        <Box flexGrow={0}>
          <Gallery />
        </Box>
        <Box flexGrow={1}>
          <Form />
        </Box>
      </Flex>
    </ChakraBaseProvider>
  );
};

export default App;
