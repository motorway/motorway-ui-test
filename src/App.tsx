import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

import { ImageViewer } from "./ImageViewer";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <ImageViewer />
    </ChakraBaseProvider>
  );
};

export default App;
