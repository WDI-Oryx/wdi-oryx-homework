require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/Artist" # require the Artist class definition that we defined in the models/Artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file


# Part 0 
# - install the necessary gems!
# - Create a SQLite database.  Run the schema and seed the data.

# Part 1.1
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.
ActiveRecord::Base.establish_connection(
    adapter: “sqlite3”,
    database: “./db/tunr.db”,
   )
# Find all Artists
p Artists.all;
# Find just one Artist by id
p Artists.find(1)
# Find Taylor Swift (or your other fav Artist) by name.
p Artists.where(name:"Taylor Swift")
# Find all Artists from the USA
p Artists.where(nationalty:"USA")
# Find all Artists NOT from the USA
p Artists.where.not(nationalty:"USA")
# Create a new Artist for your favorite Artist
Artist.create(name: "Njod", photo_url: "", nationality: "Saudi")
Name = Artist.find_by(name: "Njod")
# Change at least 2 of their attributes
p Name.update(name: "Muneera", photo_url: "", nationality: "Saudii")
# Destroy the Artist you just created
Name.destroy
p Artist.find_by(name: "Njod")

# Part 1.2 - Create your Song Model / Setup Associations
# Create a file that will contain your AR class definition for Songs
# Make sure to link that file at the top of this file.
# Add the appropriate associations to your Artist and Song models.

# Part 1.3
# Find the Artist with the name Enya
p Artist.find_by(name: "Enya")
# Use AR methods to find all of Enya's songs, store them in a variable
p song = Artist.find_by(name: "Enya")

# Use the "where" method to find the Artist Enya and store it to a variable "enya"
p enya = Artist.where(name: "Enya")

# get all of Enya's songs and save to a variable called "enya_songs"

# Get the first song out of enya_songs and get that song's title

# Find the song with the title 'Unstoppable' and store in a variable

# Get that song's Artist, store that in a variable

# Reassign the song's Artist to be a different one (your choice)

# Save that song

# Create a new song, and associate it with a different Artist of your choice

# Delete that song

# Find all of Enya's songs again, store in a variable

# Using each, iterate over those songs and for each song, print "I like" + the song name



# ----------------


# Bonus

# Use Active Record queries (http://guides.rubyonrails.org/active_record_querying.html#conditions) for the below:


# Add another column to your `Artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each Artist with the appropriate year of origin.


# Find all Artists since 2000


# Find all Artists between 1970 and 1995


# Find all Artists not in 2004 or 2015
