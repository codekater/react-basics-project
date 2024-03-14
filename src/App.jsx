import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
    <div className="app">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage recipes={data.hits} clickFn={setSelectedRecipe} />;
        </>
      )}
    </div>
    </>
  );
};
