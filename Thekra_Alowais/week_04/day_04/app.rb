require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/artist" # require the Artist class definition that we defined in the models/artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file

# Part 0
# - install the necessary gems!
# - Create a SQLite database.  Run the schema and seed the data.
# sqlite3 tunr.db sqlite3 tunr.db < db/schema.sql sqlite3 tunr.db < db/seeds.sql

# Part 1.1
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.

# Find all artists
p Artist.all
# Find just one artist by id
p Artist.find(1)
# Find Taylor Swift (or your other fav artist) by name.
# p Artist.where(name: "Taylor Swift")
p Artist.where(name: "Gwar")
# Find all artists from the USA
p Artist.where(nationality: "American")
# Find all artists NOT from the USA
p Artist.where.not(nationality: "American")
# Create a new artist for your favorite artist
new_artist = Artist.new(name: "bebe rexha", photo_url: "https://www.google.com.sa/search?q=bebe+rexha&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjLvp60taDeAhUKzIUKHcXKASwQ_AUIDigB&biw=1074&bih=667#imgrc=-GDUNYMg5tNIpM:", nationality: "American")
new_artist.save
# p Artist.all
# Change at least 2 of their attributes
p updated_name = Artist.where(name: "bebe rexha")
p updated_name.update(name: "BEBE REXHA")
# p Artist.all
# Destroy the artist you just created
Artist.where(name: "BEBE REXHA").destroy_all
p Artist.all

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
artist_gwar = Artist.where(name: "Gwar")
# Use AR methods to find all of Enya's songs, store them in a variable
p songs = Song.where(artist_id: 3)
# Use the "where" method to find the artist Enya and store it to a variable "enya"
p enya = Artist.where(name: "Gwar")
# get all of Enya's songs and save to a variable called "enya_songs"
p " "
p enya_songs = songs
# Get the first song out of enya_songs and get that song's title
p first_song = enya_songs.first
# p enya_songs.select(:title).take
p first_song.attributes.slice("title")
# Find the song with the title 'Unstoppable' and store in a variable
p new_title_song = Song.where(title: "Gor-Gor")
# Get that song's artist, store that in a variable
p new_title_artist = new_title_song.where(artist_id: 3)
p artist_name = Artist.find(3).slice("name")
# Reassign the song's artist to be a different one (your choice)
p change_artist_name = artist_name.update(name: "sal houdini")
# Save that song
change_artist_name.save
# Create a new song, and associate it with a different artist of your choice
p new_Gwar = Artist.create(name: "thekra", photo_url: "http://a948.phobos.apple.com/us/r1000/078/Music2/v4/75/0f/9f/750f9fae-d2d3-2b35-d885-50bbdf511969/mzaf_7685304048933327833.m4a", nationality: "saudi")
p new_song = Song.create(title: "TEST", album: "TEST", preview_url: "http://a948.phobos.apple.com/us/r1000/078/Music2/v4/75/0f/9f/750f9fae-d2d3-2b35-d885-50bbdf511969/mzaf_7685304048933327833.m4a", artist_id: 10)
# p Song.all
# Delete that song
p new_song.destroy
# Find all of Enya's songs again, store in a variable
e_songs = Song.where(artist_id: 3)
p e_songs
# Using each, iterate over those songs and for each song, print "I like" + the song name
e_songs.each do |song|
  p "I like #{song[:title]}"
end
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:

# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.

# Find all artists since 2000

# Find all artists between 1970 and 1995

# Find all artists not in 2004 or 2015
