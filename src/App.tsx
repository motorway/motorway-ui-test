import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import { Gallery } from "./Gallery";
import { Form } from "./Form";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <ChakraProvider>
      <Flex width={"100%"} height={"100vh"} justifyContent={"space-between"}>
        <Box flexGrow={0}>
          <Gallery setIsLoading={setIsLoading} />
        </Box>
        <Box flexGrow={1}>
          <Form isLoading={isLoading} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
