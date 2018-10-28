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

# p Artist.all

# Find just one artist by id
Artist.find_by(id: "2")
# Find Taylor Swift (or your other fav artist) by name.
Artist.find_by(name: "Taylor Swift")
# Find all artists from the USA
Artist.find_by(nationality: "American")

# Find all artists NOT from the USA

Artist.where.not(nationality: "American")

# Create a new artist for your favorite artist

kiwi = Artist.create(name: "Kiwi", photo_url: "https://www.google.com.sa/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj28-yZv5_eAhWDGewKHRKtAqMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iichi.com%2Flisting%2Fitem%2F270027&psig=AOvVaw3lvqNVqhZmy7_fLknbigGf&ust=1540484759897576", nationality: "New Zeleand")

# Change at least 2 of their attributes

kiwi.update(name: "twiti", nationality: "Indian")

# Destroy the artist you just created

kiwi.destroy

# Part 1.2 - Create your Song Model / Setup Associations

# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.

# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
enya_first = Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable

enya_first.songs()

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya_second = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = enya_first.songs()
arr_title = []
enya_songs.each do |a|
  arr_title.push(a.title)
end
arr_title
# Get the first song out of enya_songs and get that song's title
enya_songs[0].title
# Find the song with the title 'Unstoppable' and store in a variable

# new_art = Artist.where(name: "Lianne La Havas")
song_unsto = Song.find_by(title: "Unstoppable")

# Get that song's artist, store that in a variable
# p song_artist = Artist.find_by(name: "Lianne La Havas").name
# Reassign the song's artist to be a different one (your choice)
song_unsto.artist.update(name: "jkjlk")
song_unsto.artist.name
# Save that song
song_unsto.save
# Create a new song, and associate it with a different artist of your choice
newSong = Song.create(title: "new World", album: "newAlbum", preview_url: "https/dlkwj.com", artist_id: 10)
# Delete that song
newSong.destroy()
# Find all of Enya's songs again, store in a variable
p enya_songs
# Using each, iterate over those songs and for each song, print "I like" + the song name

enya_songs.each do |a|
  p "I like #{a.title}"
end
