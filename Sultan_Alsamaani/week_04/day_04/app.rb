require "pry"

require "bundler/setup" # require all the gems we'll be using for this app from the Gemfile. Obviates the need for `bundle exec`
require "active_record" # the ORM

require_relative "db/connection" # require the db connection file that connects us to PSQL, prior to loading models
require_relative "models/artist" # require the Artist class definition that we defined in the models/artist.rb file
require_relative "models/song" # require the Song class definition that we defined in the models/song.rb file


# Part 0 ---done
# - install the necessary gems!
# - Create a SQLite database.  Run the schema and seed the data.

# Part 1.1---done
# There are a bunch of challenges to find different models below.
# write the Active Record code to complete the challenge below each.

# Find all artists---done
p Artist.all
# Find just one artist by id---done
p Artist.where(id: 9)
# Find Taylor Swift (or your other fav artist) by name.---done
p Artist.where(name: "Taylor Swift")


# Find all artists from the USA---done
p Artist.where(nationality: "American")

# Find all artists NOT from the USA---done
p "---------------"
p Artist.where.not(nationality: "American")

# Create a new artist for your favorite artist---done
p "****************"
# p Artist.create({name: "artist1", photo_url: "https://bizzam.files.wordpress.com/2014/08/limp-bi...", nationality: "saudi"})

# Change at least 2 of their attributes---done
# p Artist.update(15, :name => 'artist2', :nationality => 'saudi2')

# Destroy the artist you just created ---done
#p Artist.destroy(15)

# Part 1.2 - Create your Song Model / Setup Associations ---done
# Create a file that will contain your AR class definition for Songs ---done
# Make sure to link that file at the top of this file. ---done
# Add the appropriate associations to your Artist and Song models. ---done

# Part 1.3

# Find the artist with the name Enya
enya = Artist.where(name: "Enya").first

# Use AR methods to find all of Enya's songs, store them in a variable
p "//////////"

p enya.songs

# Use the "where" method to find the artist Enya and store it to a variable "enya"
enya = Artist.where(name: "Enya").first

# get all of Enya's songs and save to a variable called "enya_songs"
p enya.songs

# Get the first song out of enya_songs and get that song's title
p enya.songs.first

# Find the song with the title 'Unstoppable' and store in a variable
p "//////////"
p p enya.songs.where(title: "Unstoppable")

# Get that song's artist, store that in a variable
enya_songs = enya.songs

# Reassign the song's artist to be a different one (your choice)
p "111111111"

# enya_songs.update_all( "artist_id = 3" )

# Save that song

# Create a new song, and associate it with a different artist of your choice
weird = Artist.where(name: "Weird Al Yankovich").first
# weird.songs.create({title: "title1",album: "album1",preview_url: ""})
p weird.songs
# Delete that song
# weird.songs.last.destroy
# Find all of Enya's songs again, store in a variable
enya_songs2 = enya.songs
# Using each, iterate over those songs and for each song, print "I like" + the song name
enya_songs2.each do |es|
puts "i like #{es.title}"
end
# Bonus

# Use Active Record queries (http://guides.rubexityonrails.org/active_record_querying.html#conditions) for the below:


# Add another column to your `artists` table called `year` with type integer by editing your `db/schema.sql`
# file. Then run reset your schema via the command line. Populate each artist with the appropriate year of origin.


# Find all artists since 2000


# Find all artists between 1970 and 1995


# Find all artists not in 2004 or 2015
binding.pry
