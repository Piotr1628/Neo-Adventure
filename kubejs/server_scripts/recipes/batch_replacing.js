function replaceItemInAllRecipes(event, oldItem, newItem) {
  Platform.getMods().forEach((modId, modInfo) => {
    event.forEachRecipe({ mod: modId }, (recipe) => {
      const recipeJsonString = recipe.json.toString();
      if (!recipeJsonString.includes(`"${oldItem}"`)) return;

      const newRecipeJson = JSON.parse(recipeJsonString.replace(`"${oldItem}"`, `"${newItem}"`));

      event.remove({ id: `${recipe.id}` });
      event.custom(newRecipeJson).id(`${recipe.id}`);
      console.log(`${recipe.id} from ${modInfo.name} has been edited.`);
    });
  });
}

ServerEvents.recipes((event) => {
  replaceItemInAllRecipes(event, 'hexerei:blood_bottle', 'irons_spellbooks:blood_vial');
});
