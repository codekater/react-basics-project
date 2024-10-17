import {
  Center,
  Heading,
  SimpleGrid,
  Input,
  Box,
  Container,
  Image,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { useState, useEffect } from "react";
import Logo from "../img/logo.png";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <Container
        maxW="xxl"
        h="full"
        //bgGradient="linear(to-r, blue.200, purple.200, pink.200)"
      >
        <Box>
          <Center>
            <Image h="50px" src={Logo} alt="logo" />
          </Center>
          <Center h="10vh">
            <Heading
              text-align="center"
              bgGradient="linear(to-l, blue.600, purple.600, pink.600)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Your Recipe App
            </Heading>
          </Center>
          <Center>
            <Input
              mb="10"
              w="50vh"
              color="teal"
              variant="outline"
              bgColor="red.50"
              placeholder="Search recipes"
              _placeholder={{ color: "cyan.900" }}
              focusBorderColor="pink.300"
              onChange={(event) => setSearchField(event.target.value)}
            />
          </Center>
          <SimpleGrid justifyItems="center" minChildWidth="300px" spacing="4">
            {recipes
              .filter((recipe) => {
                const matchedRecipe = recipe.recipe.label
                  .toLowerCase()
                  .includes(searchField.toLowerCase());

                const matchedHealthLabels = recipe.recipe.healthLabels.some(
                  (label) =>
                    label.toLowerCase().includes(searchField.toLowerCase())
                );

                return matchedRecipe || matchedHealthLabels;
              })

              .map((recipe) => (
                <RecipeCard
                  key={recipe.recipe.label}
                  recipe={recipe}
                  {...recipe.recipe}
                  clickFn={clickFn}
                />
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  );
};
