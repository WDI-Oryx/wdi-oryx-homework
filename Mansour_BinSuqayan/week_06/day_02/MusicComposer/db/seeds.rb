# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Composer.destroy_all
bach = Composer.create(name: "Bach", nationality: "German", birthday: "1950-01-12")

Composition.destroy_all
Composition.create(title: "Cantatas", description: "love", music_type: "classic", composer_id: bach.id)

Tag.destroy_all

tags = ["Love", "Classic", "Modern", "Rock"]

tags.each do |tag|
  Tag.create(name: tag)
end

the_new_Composition = Composition.create(title: "new", description: "dsjklf;las", music_type: "clas", composer_id: bach.id)

###the_rails_tutorial.geres << Genre.find_by(name: "Tech")
the_new_Composition.tags << Tag.find_by(name: "Love")
the_new_Composition.tags << Tag.find_by(name: "Classic")
the_new_Composition.tags << Tag.find_by(name: "Modern")
the_new_Composition.tags << Tag.find_by(name: "Rock")
