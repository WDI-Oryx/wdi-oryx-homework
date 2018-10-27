require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/artist" # require the Artist class definition that we defined in the models/artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file


# Part 0 
# - install the necessary gems!
# - Create a SQLite database.  Run the schema and seed the data.

# Part 1.1
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.

# Find all artists
artists = Artist.all 
# p artists
songs = Song.all


# Find just one artist by id
# p artists.find_by(id:"14")
# Find Taylor Swift (or your other fav artist) by name.
# p artists.find_by(name: "Taylor Swift" )
# Find all artists from the USA
# p artists.where(nationality: "USA")
# Find all artists NOT from the USA
# p artists.where.not(nationality: "USA")
# Create a new artist for your favorite artist
jafar = artists.create(name:"Jafar abdullah",photo_url: "myPhoto.com",nationality:"KSA")
 jafar
# Change at least 2 of their attributes
jafar.update(name: "king jafar",photo_url:"kingJafar.com")
 jafar
# Destroy the artist you just created
jafar.destroy
# -----------------

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.


# Part 1.3

# Find the artist with the name Enya
enya1 = Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable

enya1.songs()

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya2 = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enyaS = enya1.songs()
arr_title = []
enyaS.each do |a|
  arr_title.push(a.title)
end
arr_title
# Get the first song out of enya_songs and get that song's title
enyaS[0].title
# Find the song with the title 'Unstoppable' and store in a variable

# new_art = Artist.where(name: "Lianne La Havas")
Unstoppable = Song.find_by(title: "Unstoppable")

# Get that song's artist, store that in a variable
# p song_artist = Artist.find_by(name: "Lianne La Havas").name
# Reassign the song's artist to be a different one (your choice)
Unstoppable.artist.update(name: "jkjlk")
Unstoppable.artist.name
# Save that song
Unstoppable.save
# Create a new song, and associate it with a different artist of your choice
newS= Song.create(title: "new World", album: "newAlbum", preview_url: "https/dlkwj.com", artist_id: 10)
# Delete that song
newS.destroy()
# Find all of Enya's songs again, store in a variable
p enyaS
# Using each, iterate over those songs and for each song, print "I like" + the song name
enyaS.each do |a|
  p "I like #{a.title}"
end
