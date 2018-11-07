Director.destroy_all
denis = Director.create(name: "Denis Villeneuve", dob: "October 3, 1967", location: "Trois-Rivières, Canada")
chris = Director.create(name: "Christopher Nolan", dob: "July 30, 1970", location: "Westminster, United Kingdom")
aleja = Director.create(name: "Alejandro González Iñárritu", dob: "August 15, 1963", location: "Mexico City, Mexico")
frank = Director.create(name: "Frank Darabont", dob: "January 28, 1959", location: "Montbéliard, France")

Movie.destroy_all
arrival = Movie.create(title: "Arrival", lead_actor: "Amy Adams", description: "Mind blowing", director_id: denis.id)
enemy = Movie.create(title: "Enemy", lead_actor: "Jake Gyllenhaal", description: "A psychological thriller", director_id: denis.id)
dark = Movie.create(title: "The Dark Knight", lead_actor: "Christian Bale", description: "Exceptional movie", director_id: chris.id)
inter = Movie.create(title: "Interstellar", lead_actor: "Matthew McConaughey", description: "A masterpiece", director_id: chris.id)
revenant = Movie.create(title: "The Revenant", lead_actor: "Leonardo DiCaprio", description: "One of the best", director_id: aleja.id)
bird = Movie.create(title: "Birdman", lead_actor: "Michael Keaton", description: "The plot of this movie is complex ", director_id: aleja.id)
shaw = Movie.create(title: "The Shawshank Redemption", lead_actor: "Tim Robbins", description: "Legendary movie", director_id: frank.id)
mist = Movie.create(title: "The Mist", lead_actor: "Thomas Jane", description: "Thriller and horror movie", director_id: frank.id)


Genre.destroy_all
genres = ["Comedy", "Mystery", "Drama", "Thriller", "Romance", "Horror", "Action", "Adventure", "Sci-Fi"]

genres.each do |g|
  Genre.create(name: g)
end


arrival.genres << Genre.find_by(name: "Mystery")
arrival.genres << Genre.find_by(name: "Drama")
arrival.genres << Genre.find_by(name: "Sci-Fi")

enemy.genres << Genre.find_by(name: "Drama")
enemy.genres << Genre.find_by(name: "Mystery")
enemy.genres << Genre.find_by(name: "Thriller")


dark.genres << Genre.find_by(name: "Drama")
dark.genres << Genre.find_by(name: "Action")

inter.genres << Genre.find_by(name: "Sci-Fi")
inter.genres << Genre.find_by(name: "Adventure")

revenant.genres << Genre.find_by(name: "Adventure")
revenant.genres << Genre.find_by(name: "Drama")

bird.genres << Genre.find_by(name: "Drama")
bird.genres << Genre.find_by(name: "Romance")
bird.genres << Genre.find_by(name: "Comedy")

shaw.genres << Genre.find_by(name: "Drama")

mist.genres << Genre.find_by(name: "Horror")
mist.genres << Genre.find_by(name: "Thriller")









