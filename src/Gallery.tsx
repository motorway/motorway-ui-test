import { useEffect, useState } from "react";
import { Image as ImageType } from "./types";
import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { getChunks } from "./utils";

export const Gallery = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const chunkedImages = getChunks<ImageType>(images, 3);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(
          data.map((item: ImageType, index: number) => ({ ...item, index }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Box height={"95%"} p={"3em"}>
      <Heading>Motorway Gallery</Heading>
      <Divider mt={1} mb={5} />

      <VStack height={"100%"} overflowY={"auto"} overflowX={"hidden"}>
        {chunkedImages.map((images) => (
          <HStack
            key={images.reduce(
              (accumulator, currentValue) => accumulator + currentValue.id,
              ""
            )}
          >
            {images.map((image) => (
              <Box key={image.id} position={"relative"}>
                <Box
                  rounded="20px"
                  overflow="hidden"
                  _hover={{ boxShadow: "dark-lg" }}
                  height="400px"
                  width="300px"
                  style={{
                    display: "inline-block",
                    margin: "0 5px 10px 5px",
                    /* end fallback */
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`${image.url}.jpg`}
                    alt={image.alt_description}
                    width="300px"
                    height="400px"
                    style={{
                      objectFit: "cover",
                      height: "400px",
                      width: "300px",
                    }}
                    loading={image.index < 6 ? "eager" : "lazy"}
                  />
                </Box>
                <Box position={"absolute"} bottom={"1.5em"} right={"1em"}>
                  <Avatar
                    name={image.user.name}
                    src={`${image.user.profile_image}.webp`}
                    boxSize={"3em"}
                  />
                </Box>
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};
