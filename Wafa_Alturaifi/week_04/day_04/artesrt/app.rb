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
Artist.find(4)
# Find Taylor Swift (or your other fav artist) by name.
Artist.where(name: "Taylor Swift ")
# Find all artists from the USA
Artist.where(nationality: "USA ")
# Find all artists NOT from the USA
Artist.where.not(nationality: "USA ")
# Create a new artist for your favorite artist
jack = Artist.create(name: "jack", photo_url: "www.ggogle.com", nationality: "australi")

# Change at least 2 of their attributes
jack.update(name: "moath", nationality: "saudi")
# Destroy the artist you just created
jack.destroy
# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
artistenya = Artist.find_by(name: "Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
p artistenya.songs()
# Use the "where" method to find the artist Enya and store it to a variable "enya"
artistenya = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = artistenya[0].songs()
# Get the first song out of enya_songs and get that song's title
p enya_songs[0].title
# Find the song with the title 'Unstoppable' and store in a variable
songeuns = Song.find_by(title: "Unstoppable")
# Get that song's artist, store that in a variable
p songeuns.artist

# Reassign the song's artist to be a different one (your choice)

# Save that song
songeuns.save
# Create a new song, and associate it with a different artist of your choice
lalala = Song.create(title: "lalala", album: "the la", preview_url: "www.", artist_id: "1")
# Delete that song
lalala.destroy
# Find all of Enya's songs again, store in a variable
artistenya = Artist.find_by(name: "Enya")
# Using each, iterate over those songs and for each song, print "I like" + the song name
p " i like the #{songeuns} "
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
INSERT.Artist (`year: INTEGER)
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000
Artist.where(year: 2000)
# Find all artists between 1970 and 1995
Artist.where()
# Find all artists not in 2004 or 2015
Artist.where(year:2004)OR(year:2015)
