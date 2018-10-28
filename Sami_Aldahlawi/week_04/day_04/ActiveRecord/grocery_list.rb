require_relative "database"

class FoodItem < ActiveRecord::Base
end

pickle = FoodItem.new(name: "pickle", quantity: 124, healthy: true)
pickle.save

FoodItem.create(name: "banana", quantity: 5, healthy: true)
FoodItem.create(name: "ice cream", quantity: 4, healthy: false)
FoodItem.create(name: "Burger", quantity: 5, healthy: false)

#p pickle

# p FoodItem.all

#p FoodItem.first

#p FoodItem.find_by(name: "Burger")

# p FoodItem.where(healthy: true)

#### updateeee
pickle = FoodItem.find_by(name: "pickle")
pickle.update(healthy: false)
p pickle
#p pickle

#### Delecteeeee
# pickle.destroy(1)
pickle.destroy
