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
artists = Artist.all
# Find just one artist by id
artists.find_by(id:"3");
# Find Taylor Swift (or your other fav artist) by name.
artists.find_by(name:"Taylor Swift")
# Find all artists from the USA
artists.where(nationality:"American")
# Find all artists NOT from the USA
artists.where.not(nationality:"American")
# Create a new artist for your favorite artist
 mosha = artists.create(name:"Mosha",photo_url:"https:dkasljdf.com",nationality:"KSA")
# Change at least 2 of their attributes
mosha.update(name:"Ahmed")
mosha.update(nationality:"American")
mosha
# Destroy the artist you just created
mosha.destroy()

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3

# Find the artist with the name Enya
artists.find_by(name:"Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
allEnay = Artist.find_by(name:"Enya")
song_en = allEnay.songs()
# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name:"Enya")
# get all of Enya's songs and save to a variable called "enya_songs"
enya_songs = song_en
# Get the first song out of enya_songs and get that song's title
enya_songs.each do |s|
    puts s.title
end
# Find the song with the title 'Unstoppable' and store in a variable
find_song = Song.find_by(title:"Unstoppable")
# Get that song's artist, store that in a variable
artist_song = Artist.find_by(id:find_song.artist_id)
# Reassign the song's artist to be a different one (your choice)
artist_song.update(name:"Hmal")
# Save that song
artist_song.save()
# Create a new song, and associate it with a different artist of your choice
create_song = Song.create(title:"Love if",album:"album Love elssif",preview_url:"https://hellwol.com",artist_id:10)
# Delete that song
create_song.destroy()
# Find all of Enya's songs again, store in a variable
var_all_songs_enya = Artist.find_by(name:"Enya").songs()
var_all_songs_enya = var_all_songs_enya
# Using each, iterate over those songs and for each song, print "I like" + the song name
var_all_songs_enya.each do |ss|
    puts "I like #{ss.title}"
end
#Bonus
# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:


# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.


# Find all artists since 2000



# Find all artists between 1970 and 1995


# Find all artists not in 2004 or 2015