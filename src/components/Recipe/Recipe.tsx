import type {RecipeType} from "@/types"
import AddRecipeButton from "@/components/AddRecipeButton";

interface Props {
  recipe: RecipeType
  isRecipeSelected: boolean
  handleOrder: () => void
}

const Recipe = ({recipe, isRecipeSelected, handleOrder}: Props) => (
  <div>
    <div className="pb-5">
      <img src={recipe.image} alt=""/>
    </div>
    <div className="pb-1">Rating: {recipe.rating}/5</div>
    <p className="font-bold pb-3">{recipe.name}</p>
    <p className="pb-1">{recipe.caloriesPerServing} kcal.</p>
    <p className="pb-3">Waiting time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
    <AddRecipeButton
      onClick={handleOrder}
      isRecipeSelected={isRecipeSelected}
    />
  </div>
)

export default Recipe
