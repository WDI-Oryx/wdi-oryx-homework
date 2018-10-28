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
p Artist.all
# Find just one artist by id
p Artist.find(3)
# Find Taylor Swift (or your other fav artist) by name.
p Artist.where(name: "Taylor Swift")
# Find all artists from the USA
p Artist.where(nationality: "American")
# Find all artists NOT from the USA
p Artist.where.not(nationality: "American")
# Create a new artist for your favorite artist
meghan = Artist.create(name: "Meghan Trainor", photo_url: "https://www.billboard.com/files/media/Meghan-Trainor-Let-You-Be-Right-2018-billboard-1548.jpg", nationality: "American")
# Change at least 2 of their attributes
meghan.update(name: "Meghan..Trainor", nationality: "USA")
p meghan
# Destroy the artist you just created
Artist.find_by(name: "Meghan..Trainor").destroy

# # Part 1.2 - Create your Song Model / Setup Associations
# # Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
p Artist.find_by(name: "Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
en_song = Artist.find_by(name: "Enya")
p en_song.songs
# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya")
p enya
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = en_song.songs
# Get the first song out of enya_songs and get that song's title
song_title = enya_songs.select(:title).first
p song_title
# Find the song with the title 'Unstoppable' and store in a variable
title = Song.find_by(title: "Unstoppable")
p title
# Get that song's artist, store that in a variable
song_artist = title.artist
p song_artist
# Reassign the song's artist to be a different one (your choice)
song_artist.update(name: "kdjfd")
# Save that song
song_artist.save
# Create a new song, and associate it with a different artist of your choice
Song.create(title: "La Via En Rose", album: "La Via", preview_url: "https://mediamass.net/jdd/public/documents/entries/283.jpg", artist_id: 8)
# Delete that song
Song.find_by(title: "La Via En Rose").destroy
# Find all of Enya's songs again, store in a variable
enya_again = Artist.find_by(name: "Enya")
enya_again_song = enya_again.songs
p enya_again_song
# Using each, iterate over those songs and for each song, print "I like" + the song name
all_songs = enya_again_song
all_songs.each do |song|
  puts "I like #{song.title} "
end

# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
