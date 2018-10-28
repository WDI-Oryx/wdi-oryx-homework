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
all_artists = Artist.all()
# Find just one artist by id
one_artist = Artist.find_by(id: 12)
# Find Taylor Swift (or your other fav artist) by name.
my_favorite_songer = Artist.find_by(name: "Taylor Swift")
# Find all artists from the USA
all_artists_usa = Artist.where(nationality: "American")
# Find all artists NOT from the USA
all_artists_not_usa = Artist.where.not(nationality: "American")
# Create a new artist for your favorite artist
new_artist = Artist.new(name: "Jone", photo_url: "https/go.com", nationality: "KSA")
new_artist.save()
# Change at least 2 of their attributes
new_artist.update(name: "Mohammed", nationality: "UAE")
# Destroy the artist you just createdls
new_artist.destroy()
# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
atrist_enya = Artist.find_by(name: "Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
all_enya_songs = atrist_enya.songs()
# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
list_enya_songs = []
songs_enya = atrist_enya.songs()
songs_enya.each do |song|
  list_enya_songs.push(song.title)
end
list_enya_songs
enya_songs = list_enya_songs
# Get the first song out of enya_songs and get that song's title
first_song_of_enya = Artist.find_by(name: "Enya").songs[0]
# Find the song with the title 'Unstoppable' and store in a variable
unstoppable_song = Song.find_by(title: "Unstoppable")
unstoppable_song.title
# Get that song's artist, store that in a variable
artist_of_song_unstoppable = Artist.find_by(id: unstoppable_song.artist_id)
artist_of_song_unstoppable.name
# Reassign the song's artist to be a different one (your choice)
artist_of_song_unstoppable.update(name: "Sami")
artist_of_song_unstoppable.name
# Save that song
new_artist.save()
# Create a new song, and associate it with a different artist of your choice
newSong = Song.new(title: "Deep Sea", album: "sea", preview_url: "www.sea.com", artist_id: 10)
newSong.save()
# p Song.find_by(title: "Deep Sea")
# Delete that song
newSong.destroy()
# Find all of Enya's songs again, store in a variable
p enya_artist = Artist.find_by(name: "Enya")
enya_artist_songs = enya_artist.songs()
# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_artist_songs.select do |song|
  puts "I like #{song.title}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
#DONE
# ALTER TABLE artists
# ADD year INTEGER NOT NULL DEFAULT 1990;

# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.
#DONE
# sqlite3 tunr.db < schema.sql

#<Artist id: 1, name: "Weird Al Yankovich", photo_url: "http://i.huffpost.com/gen/1952378/images/o-WEIRD-A...", nationality: "American", year: 1990>
# Find all artists since 2000
all_artists_2000 = Artist.where(year: 2000)
# Find all artists between 1970 and 1995
all_artists_2000_1995 = Artist.where(year: 1970..1995)
# Find all artists not in 2004 or 2015
all_artists_not_04_15 = Artist.where.not(year: 2004..2015)

#DONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
