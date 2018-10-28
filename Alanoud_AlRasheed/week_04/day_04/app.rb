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
p Artist.find(1)

# Find Taylor Swift (or your other fav artist) by name.
p Artist.find_by(name: "Taylor Swift")

# Find all artists from the USA
p Artist.where(nationality: "American")

# Find all artists NOT from the USA
p Artist.where.not(nationality: "American")

# Create a new artist for your favorite artist
freddie = Artist.create(name: "Freddie", photo_url: "http://dazedimg.dazedgroup.netdna-cdn.com/640/azure/dazed-prod/1190/5/1195479.jpg", nationality: "American")

# Change at least 2 of their attributes
freddie.update(name: "Mercury", nationality: "Persian")

# Destroy the artist you just created
freddie.destroy

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
enya = Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable
p enya.songs

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya")

# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = enya[0].songs
p enya_songs

# Get the first song out of enya_songs and get that song's title
p enya_songs[0].title

# Find the song with the title 'Unstoppable' and store in a variable
unstoppable = Song.find_by(title: "Unstoppable")

# Get that song's artist, store that in a variable
p unstoppable_artist = unstoppable.artist

# Reassign the song's artist to be a different one (your choice)
unstoppable.update(artist_id: 2)
# Save that song
unstoppable.save
# Create a new song, and associate it with a different artist of your choice
new_song = Song.create(title: "blah", album: "blahblah", preview_url: "#", artist_id: 1)
# Delete that song
new_song.destroy

# Find all of Enya's songs again, store in a variable
enya_songs_list = enya[0].songs

# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_songs_list.each { |name_of_song| p "I like #{name_of_song.title}" }
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
