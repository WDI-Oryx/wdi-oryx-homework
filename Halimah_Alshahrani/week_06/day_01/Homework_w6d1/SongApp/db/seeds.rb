Artist.destroy_all

dua = Artist.create(name: "Dua Lipa", dob: "1995-08-22", nationality: "American", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dua_Lipa_2017_press.jpg/250px-Dua_Lipa_2017_press.jpg")

khalid = Artist.create(name: "Khalid Robinson", dob: "1998-02-11", nationality: "American", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Khalid-MTV_smiling.jpg/220px-Khalid-MTV_smiling.jpg")

Song.destroy_all

 newrules= Song.create(name:"New Rules" , album:"Dua Lipa", artist_id: dua.id)

location = Song.create(name:"Location" , album:"American Teen" , artist_id: khalid.id)


