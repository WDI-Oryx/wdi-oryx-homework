# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Developer.destroy_all
square_enix = Developer.create(name: "Square Enix", location: "Japan", website: "www.square-enix.com", image: "https://pbs.twimg.com/profile_images/1048958876786282496/HWgYIpoa_400x400.jpg")
ea = Developer.create(name: "EA", location: "USA", website: "www.ea.com", image: "https://www.overclockers.at/files/electronic-arts_107601.gif")
towd = Developer.create(name: "2d Boys", location: "USA", website: "https://2dboy.com", image: "https://2dboy.com/img/title.gif")

Game.destroy_all
final_fantsy = Game.create(title: "Final Fantsy", developer_id: square_enix.id)
battel_field = Game.create(title: "Battel Field", developer_id: ea.id)
Genre.destroy_all
genres = ["Action", "Role-playing", "Strategy", "Sports", "Simulation", "Adventure", "Platform", "Puzzle"]
genres.each do |g|
  Genre.create(name: g)
end
final_fantsy.genres << Genre.find_by(name: "Role-playing")
final_fantsy.genres << Genre.find_by(name: "Adventure")
final_fantsy.genres << Genre.find_by(name: "Action")
battel_field.genres << Genre.find_by(name: "Role-playing")
battel_field.genres << Genre.find_by(name: "Adventure")
battel_field.genres << Genre.find_by(name: "Action")
