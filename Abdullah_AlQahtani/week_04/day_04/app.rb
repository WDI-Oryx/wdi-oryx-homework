require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/artist" # require the Artist class definition that we defined in the models/artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file


# Part 0 
# - install the necessary gems! done
# - Create a SQLite database.  Run the schema and seed the data.cone

# Part 1.1
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "./db/turn.db",
)

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
p Artist.create(name: "Abdullah", photo_url: "", nationality: "Saudi")
p abdullah = Artist.find_by(name: "Abdullah")

# Change at least 2 of their attributes
p abdullah.update(photo_url: "https://www.sideshowtoy.com/assets/products/903305-super-powers-superman/lg/dc-comics-superman-maquette-tweeterhead-903305-07.jpg", nationality: "Frence")


# Destroy the artist you just created
p abdullah.destroy
p Artist.find_by(name: "Abdullah")


# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
p Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable
p song = Artist.find_by(name: "Enya")

# Use the "where" method to find the artist Enya and store it to a variable "enya"
p enya = Artist.where(name: "Enya")

# get all of Enya's songs and save to a variable called "enya_songs"
p enya_songs = enya[0].songs

# Get the first song out of enya_songs and get that song's title
p enya_songs[0].title

# Find the song with the title 'Unstoppable' and store in a variable
p unstop = Song.find_by(title: "Unstoppable") 

# Get that song's artist, store that in a variable
p unstop.artist

# Reassign the song's artist to be a different one (your choice)
p unstop.update(artist_id: "2")

# Save that song
p unstop.save

# Create a new song, and associate it with a different artist of your choice
 new_song = Song.create(title: "Song of My Life" ,album: "My Dreams", preview_url: "", artist_id: "506")

# Delete that song
 new_song.destroy

# Find all of Enya's songs again, store in a variable
Enya_songs_new = enya[0].songs

# Using each, iterate over those songs and for each song, print "I like" + the song name
Enya_songs_new.each { |song| p "I like #{song.title}" }

# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:


# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.


# Find all artists since 2000


# Find all artists between 1970 and 1995


# Find all artists not in 2004 or 2015
