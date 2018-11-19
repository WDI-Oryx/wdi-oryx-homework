# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all

saudia = Country.create(name: "Saudi Ariba", capital: "Riyadh", language: "Aribic", currency: "Riyal")
eyapt = Country.create(name: "Egypt", capital: "Cairo", language: "Aribic", currency: "Egyptian pound")
moroco = Country.create(name: "Moroco", capital: "Rebat", language: "Aribic", currency: " Drham")
france = Country.create(name: "France", capital: "Paris", language: "France", currency: "Euro")
mexico = Country.create(name: "Mexico", capital: "Mexico", language: "Spanish", currency: "Peso")

City.destroy_all
riyadh = City.create(name: "Riyadh ", capital: true, timezone: "+3 ", country_id: saudia.id)
jeaddah = City.create(name: "Jeaddah", capital: false, timezone: "+3", country_id: saudia.id)
cairo = City.create(name: "Cairo", capital: true, timezone: "+5", country_id: eyapt.id)
rebat = City.create(name: "Rebat", capital: true, timezone: "+4", country_id: moroco.id)
casablanca = City.create(name: "Casablanca", capital: false, timezone: "+4", country_id: moroco.id)
paris = City.create(name: " Paris", capital: true, timezone: "+4", country_id: france.id)
mexico = City.create(name: "Mexico", capital: true, timezone: "+7", country_id: mexico.id)

Person.destroy_all
jack = Person.create(name: "jack", hometown: "Riyadh", live: "Jeaddah", viste: "Cairo")
moath = Person.create(name: "Moath", hometown: "Riyadh", live: "Casablanca", viste: "Paris")
wafa = Person.create(name: "Wafa", hometown: "Jeaddah", live: "Mexico", viste: "Casablanca")
ali = Person.create(name: "Ali", hometown: "Rebat", live: "Rebat", viste: "Jeaddah")
mona = Person.create(name: "Mona", hometown: "Cairo", live: "Rebat", viste: "Riyadh")
