import {
  Button,
  Image,
  Text,
  Heading,
  List,
  ListItem,
  Box,
  Badge,
  Container,
  Flex,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Logo from "../img/logo.png";
import { useEffect } from "react";

export const RecipePage = ({ recipe, clickFn }) => {
  function totalCookingTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} Hours ${minutes > 0 ? ` ${minutes} Minutes` : ""}`;
  }
  //console.log(totalCookingTime(100));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      maxW="xxl"
      //bgGradient="linear(to-r, blue.200, purple.200, pink.200)"
      color="gray.700"
    >
      <Center>
        <Box bgColor="red.50" maxW="100vh">
          <Center>
            <Image h="50px" src={Logo} alt="logo" />
          </Center>
          <Image
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            maxH="250px"
            objectFit="cover"
            boxSize="100vh"
          />

          <Button colorScheme="pink" m="2" onClick={() => clickFn()}>
            Go back to all recipes
          </Button>
          <Flex
            ml="3"
            mr="3"
            mb="5"
            flexDirection={{ base: "column", md: "row", sm: "column" }}
          >
            <Container maxW="md">
              <Box>
                {recipe.recipe.mealType.map((mealType) => (
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    key={mealType}
                    mt="1em"
                    color="gray.500"
                  >
                    {mealType.toUpperCase()}
                  </Text>
                ))}
                <Heading mt="1" mb="2" size="md" fontWeight="semibold">
                  {recipe.recipe.label}
                </Heading>

                <Flex mt="3" gap="1" fontSize="14px">
                  <Text>Dish:</Text>
                  {recipe.recipe.dishType.map((dishType) => (
                    <Text fontWeight="bold" key={dishType}>
                      {dishType.charAt(0).toUpperCase() + dishType.slice(1)}
                    </Text>
                  ))}
                </Flex>
                <Flex gap="1" fontSize="14px">
                  <Text>Cooking time:</Text>
                  <Text fontWeight="bold">
                    {totalCookingTime(recipe.recipe.totalTime)}
                  </Text>
                </Flex>
                <Flex gap="1" fontSize="14px">
                  <Text>Servings:</Text>
                  <Text fontWeight="bold"> {recipe.recipe.yield}</Text>
                </Flex>

                <Heading mt="2" mb="2" size="sm" fontWeight="semibold">
                  Ingredients:{" "}
                </Heading>
                <List>
                  {recipe.recipe.ingredientLines.map((ingredient, index) => (
                    <ListItem mb="1" key={index}>
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Container>

            <Container fontSize="14px">
              <Box>
                <Text mt="2" mb="1">
                  Health labels:
                </Text>
                <Flex flexWrap="wrap" gap="1.5">
                  {recipe.recipe.healthLabels.map((healthLabel, index) => (
                    <Badge
                      backgroundColor="#E9D8FD"
                      color="#44337A"
                      key={index}
                    >
                      {healthLabel}
                    </Badge>
                  ))}
                </Flex>
                <>
                  {recipe.recipe.dietLabels.length > 0 && (
                    <>
                      <Text mt="2" mb="1">
                        Diet labels:
                      </Text>
                      <Flex flexWrap="wrap" gap="1.5">
                        {recipe.recipe.dietLabels.map((dietLabel, index) => (
                          <Badge
                            backgroundColor="#9AE6B4"
                            color="#22543D"
                            key={index}
                          >
                            {dietLabel}
                          </Badge>
                        ))}
                      </Flex>
                    </>
                  )}
                </>
                <>
                  {recipe.recipe.cautions.length > 0 && (
                    <>
                      <Text mt="2" mb="1">
                        Cautions:
                      </Text>
                      <Flex flexWrap="wrap" gap="1.5">
                        {recipe.recipe.cautions.map((caution, index) => (
                          <Badge
                            backgroundColor="#FEB2B2"
                            color="#63171B"
                            key={index}
                          >
                            {caution}
                          </Badge>
                        ))}
                      </Flex>
                    </>
                  )}
                </>
              </Box>

              <Box>
                <Heading mt="2" mb="2" size="sm" fontWeight="semibold">
                  Total nutrients:
                </Heading>

                <Wrap spacingX="20px" fontSize="xs">
                  <WrapItem>
                    <Box>
                      {Math.round(
                        recipe.recipe.totalNutrients.ENERC_KCAL.quantity
                      )}
                      {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.ENERC_KCAL.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box>
                      {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}
                      {recipe.recipe.totalNutrients.PROCNT.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.PROCNT.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box>
                      {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}
                      {recipe.recipe.totalNutrients.FAT.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.FAT.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box>
                      {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                      {recipe.recipe.totalNutrients.CHOCDF.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.CHOCDF.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box>
                      {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}
                      {recipe.recipe.totalNutrients.CHOLE.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.CHOLE.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box>
                      {Math.round(recipe.recipe.totalNutrients.NA.quantity)}
                      {recipe.recipe.totalNutrients.NA.unit}
                      <Text fontWeight="bold">
                        {recipe.recipe.totalNutrients.NA.label.toUpperCase()}
                      </Text>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Container>
          </Flex>

          <Button colorScheme="pink" m="2" onClick={() => clickFn()}>
            Go back to all recipes
          </Button>
        </Box>
      </Center>
    </Container>
  );
};
