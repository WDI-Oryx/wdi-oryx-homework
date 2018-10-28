require_relative "db/configuration"
require_relative "models/Owner"
require_relative "models/Pet"

##  CRUD - Create, Read, Update, Delete   ##

jack = Owner.create(name: "jack", age: 65)

# p Owner.all
# jack = Owner.create({name: "Jack", age: 89})
# jack.pets.create({name: "Max", animal_type: "aye aye"})
# jack.pets.create({name: "Chai", animal_type: "jellyfish"})
# newPet = jack.pets.new({name: "Heffa", animal_type: "vole"})  ##??
# newPet.save                                                       ## ??

# trevor = Owner.create({name: "Trevor", age: 10})
# trevor.pets.create({name: "FuFu", animal_type: "hamster"})
# trevor.pets.create({name: "Peekoh", animal_type: "velociraptor"})
# trevor.pets.create({name: "Max", animal_type: "penguin"})

# lensay = Owner.create({name: "Lensay", age: 16})
# lensay.pets.create({name: "Marmaduke", animal_type: "orca"})

# p jack.name

# Play around!
