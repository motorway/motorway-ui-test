import { Box, extendBaseTheme, Flex, ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

import { Gallery } from "./Gallery";
import { Form } from "./Form";

const { Button } = chakraTheme.components;


const App = () => {
  return (
    <ChakraProvider>
      <Flex width={"100%"} height={"100vh"} justifyContent={"space-between"}>
        <Box flexGrow={0}>
          <Gallery />
        </Box>
        <Box flexGrow={1}>
          <Form />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
