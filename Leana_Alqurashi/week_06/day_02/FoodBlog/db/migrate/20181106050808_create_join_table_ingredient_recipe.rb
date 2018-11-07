class CreateJoinTableIngredientRecipe < ActiveRecord::Migration[5.2]
  def change
    create_join_table :ingredients, :recipes do |t|
      # t.index [:ingredient_id, :recipe_id]
      # t.index [:recipe_id, :ingredient_id]
    end
  end
end
