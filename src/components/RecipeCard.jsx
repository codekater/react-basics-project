import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/react";

export const RecipeCard = ({
  recipe,
  clickFn,
  label,
  image,
  dietLabels,
  cautions,
  mealType,
  dishType,
  healthLabels,
}) => {
  return (
    <Card maxW="sm" variant="outlined" onClick={() => clickFn(recipe)}>
      <CardBody
        align="center"
        backgroundColor="red.100"
        color="gray.700"
        borderRadius={20}
        maxW="350px"
        cursor="pointer"
      >
        <Image
          src={image}
          alt={label}
          borderRadius={20}
          w="300px"
          h="150px"
          objectFit="cover"
        />
        <Stack >
          <Text>
            <Stack direction="row" justify="center" mt="2">
            {mealType.map((mealType) => (
              <Text
                fontSize="xs"
                fontWeight="bold"
                key={mealType}
                color="gray.500"
              >
                {mealType}
              </Text>
            ))}
            </Stack>
            <Heading mt="1" mb="2" size="md" fontWeight="semibold" ml="1" mr="1">
              {label}
            </Heading>
            <Text>
              <Stack direction="row" justify="center" m="1">
                {healthLabels.includes("Vegetarian") && (
                  <Badge backgroundColor="#E9D8FD" color="#44337A">
                    VEGETARIAN
                  </Badge>
                )}
                {healthLabels.includes("Vegan") && (
                  <Badge backgroundColor="#E9D8FD" color="#44337A">
                    VEGAN
                  </Badge>
                )}
              </Stack>
            </Text>
            <Text>
              <Stack direction="row" justify="center">
                {dietLabels.map((dietLabel) => (
                  <Badge
                    backgroundColor="#9AE6B4"
                    color="#22543D"
                    key={dietLabel}
                  >
                    {dietLabel}
                  </Badge>
                ))}
              </Stack>
            </Text>
            <Flex mt="2" justify="center" gap="1">
              <Text>Dish:</Text>
              {dishType.map((dishType) => (
                <Text fontWeight="bold" key={dishType}>
                  {dishType.charAt(0).toUpperCase() + dishType.slice(1)}
                </Text>
              ))}
            </Flex>
            <Text>
              {recipe.recipe.cautions.length > 0 && (
                <>
                  <Text m="1">Cautions:</Text>
                  <Stack direction="row" justify="center" spacing="1">
                    {cautions.map((caution) => (
                      <Badge
                        backgroundColor="#FEB2B2"
                        color="#63171B"
                        key={caution}
                      >
                        {caution}
                      </Badge>
                    ))}
                  </Stack>
                </>
              )}
            </Text>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
