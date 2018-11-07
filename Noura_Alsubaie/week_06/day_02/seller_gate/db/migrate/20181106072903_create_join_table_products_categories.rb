class CreateJoinTableProductsCategories < ActiveRecord::Migration[5.2]
  def change
    create_join_table :products, :categories, id: false do |t|
      # t.index [:product_id, :category_id]
      # t.index [:category_id, :product_id]
    end
  end
end
