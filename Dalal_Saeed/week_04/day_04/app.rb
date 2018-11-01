require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/artist" # require the Artist class definition that we defined in the models/artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file

#Artist.create({name: "Jack", age: 89})
# Part 0
# - install the necessary gems!
# - Create a SQLite database.  Run the schema and seed the data.

# Part 1.1
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.

# Find all artists
Artist.all
# Find just one artist by id
Artist.find(3)
# Find Taylor Swift (or your other fav artist) by name.
Artist.find_by name: "Taylor Swift"
# Find all artists from the USA
Artist.where nationality: "American" #wrong
# Find all artists NOT from the USA
Artist.where.not nationality: "American"
# Create a new artist for your favorite artist
Artist.create({name: "Hana", photo_url: "photo"})
# Change at least 2 of their attributes
updated_name = Artist.where(name: "Hana")
updated_name.update(name: "Hana Kuk", photo_url: "https://www.famousbirthdays.com/faces/kuk-hana-image.jpg", nationality: "Hong Kong")
Artist.where(name: "Hana Kuk")
# Destroy the artist you just created
hana = Artist.where(name: "Hana Kuk")
hana.destroy_all
# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3
# Find the artist with the name Enya
enya = Artist.find_by(name: "Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
Enya_songs = enya.songs.as_json
# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya").select("id")

# get all of Enya's songs and save to a variable called "enya_songs"
p enya_songs = Song.where(artist_id: enya)
# Get the first song out of enya_songs and get that song's title
p Enya_songs.first.values_at("title")
# Find the song with the title 'Unstoppable' and store in a variable
unstoppable = Song.where title: "Unstoppable"
# Get that song's artist, store that in a variable
id = unstoppable.as_json[0].values_at("artist_id")
song_artist = Artist.find_by(id: id)
# Reassign the song's artist to be a different one (your choice)
song_artist.update_attribute(:name, "changes")
# Save that song

# Create a new song, and associate it with a different artist of your choice
come = Song.create(title: "Come wind Come Rain", album: "Just Another Diamond Day", preview_url: "https://google.com.sa", artist_id: 1)
# Delete that song
Song.destroy(title: "Come wind Come Rain")
# Find all of Enya's songs again, store in a variable
p enya_songs_again = Enya.songs.as_json
# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_songs_again.each do |song|
  p "I Like #{song.values_at("title").dig(0)}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
