# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all

marbury1 = Album.create(name: "Marbury Farm Group", key_photo: "http://www.marburyfarmride.co.uk/images/marbury_farm_ride_logo.png", event: "camping", location: "Wollongong")
marbury2 = Album.create(name: "Marbury Farm Club", key_photo: "http://www.marburyfarmride.co.uk/images/marbury_farm_ride_logo.png", event: "camping", location: "Wollongong")
fitzroy = Album.create(name: "Fitzroy Falls Group", key_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTda6S8eTX-XfIvZGRGt3qdoLzRIY_7MEgDPDcDYdBl5XHcjAnspQ", event: "picnic", location: "Wollongong")
