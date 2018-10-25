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
p Artist.find 1

# Find Taylor Swift (or your other fav artist) by name.
p Artist.find_by name: "Taylor Swift"

# Find all artists from the USA
p Artist.where nationality: "American"

# Find all artists NOT from the USA
p Artist.where.not nationality: "American"

# Create a new artist for your favorite artist
new_artist = Artist.create name: "Adele", photo_url: "https :/ / en.wikipedia.org / wiki / Adele #/media/File:Adele_2016.jpg", nationality: "British"
p new_artist

# Change at least 2 of their attributes
new_artist.update name: "Adele Laurie Blue Adkins", photo_url: "https :/ / www.azra.ba / wp - content / uploads / 2016 / 10 / adele - 1.jpg"

# Destroy the artist you just created
new_artist.destroy

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
p Artist.find_by name: "Enya"

# Use AR methods to find all of Enya's songs, store them in a variable
pk = Artist.primary_key
enyas_songs = Songs.where artist_id: pk

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where name: "Enya"
p enya

# get all of Enya's songs and save to a variable called "enya_songs"
pk = Artist.primary_key
enyas_songs = Songs.where artist_id: pk
p enyas_songs

# Get the first song out of enya_songs and get that song's title
first_song = enyas_songs.first
p first_song.finde_by :title

# Find the song with the title 'Unstoppable' and store in a variable
song = Song.where title: "Unstoppable"
p song

# Get that song's artist, store that in a variable
songs_artist = Artist.find song.artist_id
p songs_artist

# Reassign the song's artist to be a different one (your choice)
p songs_artist.update name: "Adele"

# Save that song
p songs_artist.save

# Create a new song, and associate it with a different artist of your choice
p Song.create title: 'White & Nerdy (Parody of "Ridin"")', album: "Straight Outta Lynwood", preview_url: "http://a1748.phobos.apple.com/us/r1000/062/Music/ce/3d/70/mzm.hmiurdzp.aac.p.m4a", artist_id: 1

# Delete that song
p Song.delete id: 1

# Find all of Enya's songs again, store in a variable
pk = Artist.primary_key
enyas_songs = Songs.where artist_id: pk
p enyas_songs

# Using each, iterate over those songs and for each song, print "I like" + the song name
enyas_songs.each do |enyas_song|
  puts "I like #{enyas_song.name}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
