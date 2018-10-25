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
puts artists.all

# Find just one artist by id
puts artists.find(4)

# Find Taylor Swift (or your other fav artist) by name.
puts artists.where(name: "Taylor Swift")

# Find all artists from the USA
puts artist.where(nationality: "American")
# Find all artists NOT from the USA
puts artist.where.not(nationality: "American")
# Create a new artist for your favorite artist
John = Artist.create(name: "John Legend", photo_url: "https://www.nojesresor.se/wp-content/uploads/2017/04/john-legend.jpg", nationality: "American")
# Change at least 2 of their attributes
John.update(name: "Justin Timberlake", photo_url: "https://fortunedotcom.files.wordpress.com/2016/10/495687692.jpg", nationality: "American")
# Destroy the artist you just created
John.destroy

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
e = Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable
puts e.songs
# Use the "where" method to find the artist Enya and store it to a variable "enya"
e = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = e[].songs
e.save
# Get the first song out of enya_songs and get that song's title
puts enya_songs[0].title
# Find the song with the title 'Unstoppable' and store in a variable
un = Song.find_by(title: "Unstoppable")

# Get that song's artist, store that in a variable
puts un_artist = un.artist
# Reassign the song's artist to be a different one (your choice)

# Save that song
un.save
# Create a new song, and associate it with a different artist of your choice
new= Song.create(title: "Million Years Ago", album: "EMIR", preview_url: "https://www.youtube.com/watch?v=9LMDg6awPq8" artist_id: 2)
# Delete that song
n.destroy

# Find all of Enya's songs again, store in a variable
enya_list = e[].songs
# Using each, iterate over those songs and for each song, print "I like" + the song name

# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
