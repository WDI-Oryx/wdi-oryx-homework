# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Leonardo = Artist.create(name: "Leonardo Da Vinci", image: "https://bit.ly/2SLxVNl")
Vincent = Artist.create(name: "Vincent van Gogh", image: "https://bit.ly/2DlSpYz")
Painting.destroy_all
# Leonardo.paintings.create(name: "Mona Lisa", description: "Leonardo da Vinci worked on his masterpiece over a period of 20 years. He carried it with him everywhere. The enigmatic smile has captured the imagination of the world. It has been stolen twice and now resides in the Louvre, Paris. When the Mona Lisa visited America in the 1960s, it gained a prominence close to that of the then US president John F Kennedy. Why do people queue up for so many hours to catch a fleeting glimpse? Perhaps because it is very human, but at the same time offering a sensation that there is something beyond. In the world, but looking beyond. Is that not a smile of supreme satisfaction? Everyone will have a different opinion, and that is part of the attraction of the painting.")
# Vincent.paintings.create(name: "Sunflowers", description: "The genius of Vincent Van Gogh is captured in this painting of 12 sunflowers. It has become one of the most recognisable of his works.")
the_test = Painting.create(name: "Mona Lisa", description: "Leonardo da Vinci worked on his masterpiece over a period of 20 years. He carried it with him everywhere. The enigmatic smile has captured the imagination of the world. It has been stolen twice and now resides in the Louvre, Paris. When the Mona Lisa visited America in the 1960s, it gained a prominence close to that of the then US president John F Kennedy. Why do people queue up for so many hours to catch a fleeting glimpse? Perhaps because it is very human, but at the same time offering a sensation that there is something beyond. In the world, but looking beyond. Is that not a smile of supreme satisfaction? Everyone will have a different opinion, and that is part of the attraction of the painting.", artist_id: Leonardo.id)
Painting.create(name: "Sunflowers", description: "The genius of Vincent Van Gogh is captured in this painting of 12 sunflowers. It has become one of the most recognisable of his works.", artist_id: Vincent.id)

Category.destroy_all
categories = ["History", "Portrait", "Landscape", "Life"]
# create obj for each value in the array
categories.each do |c|
  Category.create(name: c)
end
# Testing data
# the_test.categories << Category.find_by(name: "History")
# the_test.categories << Category.find_by(name: "Portrait")
# the_test.categories << Category.find_by(name: "Landscape")
# the_test.categories << Category.find_by(name: "Life")
