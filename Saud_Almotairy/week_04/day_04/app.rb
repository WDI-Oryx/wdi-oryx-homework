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
Artist.all

# Find just one artist by id
p Artist.find(7)

# Find Taylor Swift (or your other fav artist) by name.
Artist.find_by_name("Taylor Swift")
# Find all artists from the USA
Artist.find_by_nationality("USA")

# Find all artists NOT from the USA
Artist.where.not(nationality: "USA")

# Create a new artist for your favorite artist
saud = Artist.create(name: "Saud", photo_url: "www.saud.com", nationality: "Saudi")

# Change at least 2 of their attributes
saud.update(photo_url: "#")
saud.update(name: "Khalid")

# Destroy the artist you just created
saud.destroy
# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
Artist.find_by_name("Enya")

# Use AR methods to find all of Enya's songs, store them in a variable
enya_songs = Artist.find_by_name("Enya").songs()

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.find_by(name: "Enya")

# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = enya.songs()

# Get the first song out of enya_songs and get that song's title
enya_songs.first
enya_songs.first.title

# Find the song with the title 'Unstoppable' and store in a variable
unstoppable = Song.find_by(title: "Unstoppable")

# Get that song's artist, store that in a variable
unstoppable_artist = Song.find_by(title: "Unstoppable").artist

# Reassign the song's artist to be a different one (your choice)
unstoppable_artist.update(name: "Saud")

# Save that song
unstoppable.save

# Create a new song, and associate it with a different artist of your choice
newSong = Song.create(title: "Saudi the best", album: "Saudi", preview_url: "#", artist_id: 2)

# Delete that song
newSong.destroy

# Find all of Enya's songs again, store in a variable
enya_songs
# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_songs.each do |song|
  p "I like #{song.title}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# Artist.each do |artist|
#   p random_year = rand(1800..2018)
#   p artist.update(year: random_year)
# end
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000
#
# artists.each do (|artist| if (year: >2000))
# end

#
# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
