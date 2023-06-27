import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import moment from "moment";

export const Form = ({ isLoading }: { isLoading: boolean }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const toast = useToast();
  const date = moment();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast({
      title: "Form Submission",
      description:
        "You have successfully filled out this form! (Sadly, this " +
        "doesn't go anywhere, but thanks for filling it out anyway ;) ).",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box height={"100%"} width={"40em"} p={"3em"}>
      <Heading>Motorway Form</Heading>
      <Divider mt={1} mb={5} />

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type={"text"} />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type={"email"} />
          <FormHelperText>
            We'll never share your email with anyone!
          </FormHelperText>
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" max={date.format("YYYY-MM-DD")} />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel>Favourite Primary Colour</FormLabel>
          <Select placeholder="Select a colour">
            <option value="option1">Red</option>
            <option value="option2">Blue</option>
            <option value="option3">Green</option>
          </Select>
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel>Salary</FormLabel>
          <Slider
            aria-label="slider-ex-6"
            colorScheme={"pink"}
            onChange={(val) => setSliderValue(val)}
            mt={5}
          >
            {[30, 60, 90, 120, 150, 180].map((marker) => (
              <SliderMark
                value={marker / 2}
                m={-8}
                ml={-2.5}
                fontSize={"sm"}
                key={marker}
              >
                {marker}k
              </SliderMark>
            ))}
            <SliderMark
              value={sliderValue}
              textAlign="center"
              fontWeight={"bold"}
              color="white"
              mt={2}
              ml={-5}
              w={12}
            >
              {sliderValue * 2}k
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>

        <Button mt={7} colorScheme="teal" isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
