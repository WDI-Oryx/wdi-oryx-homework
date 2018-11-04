# Table name: directors
#
#  id         :integer          not null, primary key
#  name       :string
#  dob        :date
#  country    :string
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Table name: films
#
#  id          :integer          not null, primary key
#  title       :string
#  rating      :integer
#  image       :string
#  director_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
Director.destroy_all

chris = Director.create(name: "Christopher Nolan", dob: "1970-07-30", country: "UK", image: "https://timedotcom.files.wordpress.com/2000/04/christopher-nolan-time-100-2015-artists.jpg")
martin = Director.create(name: "Martin Scorsese", dob: "1942-11-17", country: "US", image: "https://www.rolex.com/content/dam/rolexcom/world-of-rolex/arts-and-culture/rolex-and-cinema/martin-scorsese/rolex_and_cinema_martin_scorsese_quotation_0001_1920x1080.jpg")

Film.destroy_all

theDarkKnight = Film.create(title: "The Dark Knight", rating: "9", image: "http://www.gstatic.com/tv/thumb/v22vodart/173378/p173378_v_v8_at.jpg", director_id: chris.id)
theWolfofWallStreet = Film.create(title: "The Wolf of Wall Street", rating: "8", image: "http://www.gstatic.com/tv/thumb/v22vodart/9991602/p9991602_v_v8_ab.jpg", director_id: martin.id)
