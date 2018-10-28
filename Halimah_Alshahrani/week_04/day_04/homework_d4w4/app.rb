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
Artist.find_by(id: 2)

# Find Taylor Swift (or your other fav artist) by name.
Artist.find_by(name: "Taylor Swift")
# Find all artists from the USA
Artist.find_by(nationality: "USA")
# Find all artists NOT from the USA
Artist.where.not(nationality: "USA")
# Create a new artist for your favorite artist
DuaLipa = Artist.create(name: "Dua lipa", photo_url: "http://www.gannett-cdn.com/-mm-/b0ad212381eab60e31d1f067f1c478cea741469a/c=0-10-3443-1963&r=x1683&c=3200x1680/local/-/media/USATODAY/GenericImages/2014/03/31//1396298223000-KISS-KISS-BAND-JY-0718-62187918.jpg", nationality: "USA")
# Change at least 2 of their attributes
DuaLipa.update(nationality: "Saudi", name: "Halima")
# Destroy the artist you just created
DuaLipa.destroy
# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
enya = Artist.find_by(name: "Enya")

# Use AR methods to find all of Enya's songs, store them in a variable
p enya.song()

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = enya[0].song
# Get the first song out of enya_songs and get that song's title
p enya_songs[0].title
# Find the song with the title 'Unstoppable' and store in a variable
p unstoppable_song = Song.find_by(title: "Unstoppable")
# Get that song's artist, store that in a variable
p unstoppable_song.artist
# Reassign the song's artist to be a different one (your choice)
p unstoppable_song.artist.update(name: "Enen")
p unstoppable_song.artist.name

# Save that song
unstoppable_song.save

# Create a new song, and associate it with a different artist of your choice
p new_song = Song.create(title: "Finally", album: "Homework", preview_url: "https/Homework_is_done.com", artist_id: 10)
# Delete that song
new_song.destroy()
# Find all of Enya's songs again, store in a variable
p enya_songs
# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_songs.each do |a|
  p "I like #{a.title}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
