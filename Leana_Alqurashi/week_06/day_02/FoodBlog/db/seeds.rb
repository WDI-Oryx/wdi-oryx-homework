# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Developer.destroy_all
hannah = Developer.create(name: "hannah", country: "US", image: "hannah")
viola = Developer.create(name: "Viola", country: "Germany", image: "Viola")
Recipe.destroy_all
#  t.string "name"
#     t.string "image"
#     t.string "time"
#     t.string "description"

pancake = Recipe.create(name: "Pancakes", image: "https://images.ecosia.org/R5xRxDihV4b3wsrJBlm9UvDvKz8=/0x390/smart/http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F525718_pancakes.jpg", time: "15", description: "fluffy, satisfying, yummy!!", developer_id: hannah.id)
pizza = Recipe.create(name: "Pizza", image: "https://images.ecosia.org/07xiE2_mKEB34beqMFqT4HoLPDY=/0x390/smart/http%3A%2F%2F3.bp.blogspot.com%2F-41CI6GakP4g%2FT1iASmFddvI%2FAAAAAAAAct8%2Fjb76sSGkYSw%2Fs1600%2FPizza%2BHD%2BWallpapers%2B%252819%2529.jpg", time: "60", description: "Savoury, Fulfilling, yummy!!", developer_id: viola.id)
salad = Recipe.create(name: "Salad", image: "https://images.ecosia.org/h9D91yOeZPaK3kfnpd0PoNBF2L0=/0x390/smart/https%3A%2F%2Fimages5.alphacoders.com%2F408%2F408968.jpg", time: "10", description: "Savoury, Nutritious, yummy!!", developer_id: viola.id)

Ingredient.destroy_all
ingredients = ["Flour", "oil", "milk", "water", "Salt", "Pepper", "Backing Powder", "Tomato", "Sugar", "Cheese", "Lettuce"]
ingredients.each do |i|
  Ingredient.create(name: i)
end
