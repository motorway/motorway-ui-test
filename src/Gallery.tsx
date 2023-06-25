import { useEffect, useState } from "react";
import { Image as ImageType } from "./types";
import { Avatar, Box, HStack, VStack, WrapItem, Image } from "@chakra-ui/react";
import { getChunks } from "./utils";

export const Gallery = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const chunkedImages = getChunks<ImageType>(images, 3);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Box height={"100%"} p={"1em"} overflowY={"auto"}>
      <VStack>
        {chunkedImages.map((images) => (
          <HStack
            key={images.reduce(
              (accumulator, currentValue) => accumulator + currentValue.id,
              ""
            )}
          >
            {images.map((image) => (
              <Box key={image.id} position={"relative"}>
                <WrapItem
                  rounded="20px"
                  overflow="hidden"
                  bg="white"
                  lineHeight="0"
                  _hover={{ boxShadow: "dark-lg" }}
                  position={"relative"}
                >
                  <Image
                    src={`${image.url}.jpg`}
                    alt={image.alt_description}
                    width="300px"
                    height="400px"
                    fit={"cover"}
                  />
                </WrapItem>
                <WrapItem position={"absolute"} bottom={"1em"} right={"1em"}>
                  <Avatar
                    name={image.user.name}
                    src={`${image.user.profile_image}.webp`}
                    boxSize={"3em"}
                  />
                </WrapItem>
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};
