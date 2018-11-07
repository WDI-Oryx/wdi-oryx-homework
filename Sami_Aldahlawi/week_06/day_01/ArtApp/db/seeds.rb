# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artiest.destroy_all
Leonardo = Artiest.create(name: "Leonardo da Vinci", nationality: "french", birth_day: "1452-04-15")
Painting.destroy_all
Mona_lisa = Painting.create(title: "Mona Lisa",
                            description: "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described 
    as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world", price: 800000000, artiest_id: 1,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg")
    
