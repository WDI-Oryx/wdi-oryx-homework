Director.destroy_all
denis = Director.create(name: "Denis Villeneuve", dob: "October 3, 1967", location: "Trois-Rivières, Canada")
chris = Director.create(name: "Christopher Nolan", dob: "July 30, 1970", location: "Westminster, United Kingdom")
aleja = Director.create(name: "Alejandro González Iñárritu", dob: "August 15, 1963", location: "Mexico City, Mexico")
frank = Director.create(name: "Frank Darabont", dob: "January 28, 1959", location: "Montbéliard, France")

Movie.destroy_all
arrival = Movie.create(title: "Arrival", leading_actor: "Amy Adams", description: "Mind blowing", director_id: denis.id)
enemy = Movie.create(title: "Enemy", leading_actor: "Jake Gyllenhaal", description: "A psychological thriller", director_id: denis.id)
dark = Movie.create(title: "The Dark Knight", leading_actor: "Christian Bale", description: "Exceptional movie", director_id: chris.id)
inter = Movie.create(title: "Interstellar", leading_actor: "Matthew McConaughey", description: "A masterpiece", director_id: chris.id)
revenant = Movie.create(title: "The Revenant", leading_actor: "Leonardo DiCaprio", description: "One of the best", director_id: aleja.id)
bird = Movie.create(title: "Birdman", leading_actor: "Michael Keaton", description: "The plot of this movie is complex ", director_id: aleja.id)
shaw = Movie.create(title: "The Shawshank Redemption", leading_actor: "Tim Robbins", description: "Legendary movie", director_id: frank.id)
mist = Movie.create(title: "The Mist", leading_actor: "Thomas Jane", description: "Thriller and horror movie", director_id: frank.id)
