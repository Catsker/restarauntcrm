interface Props {
  onClick: () => void;
  isRecipeSelected: boolean;
}

const AddRecipeButton = ({onClick, isRecipeSelected}: Props) => {

  return (
    <button
      className={`p-2 w-full rounded-l-full rounded-r-full ${isRecipeSelected ? 'bg-red-300' : 'bg-blue-300'}`}
      onClick={onClick}
    >
      {isRecipeSelected ? 'Remove' : 'Add'}
    </button>
  )
}

export default AddRecipeButton
