require_relative "database"

class FoodItem < ActiveRecord::Base
end

pickle = FoodItem.new(name:"pickle",quantity: 124, healthy: true)
pickle.save

FoodItem.create(name: "banana", quantity: 5, healthy: true)
FoodItem.create(name: "ice cream", quantity: 4, healthy: false)
FoodItem.create(name: "waffles", quantity: 12, healthy: false)
FoodItem.create(name: "yogurt", quantity: 4, healthy: true)
FoodItem.create(name: "salami", quantity: 1, healthy: false)




# Read
# p FoodItem.all
#p FoodItem.first

#p FoodItem.find(4)

#p FoodItem.find_by(name: "yogurt")

#p FoodItem.where(healthy: true)

## update

pickle = FoodItem.find_by(name: "pickle")
pickle.update(healthy: false)


# DELETE 
pickle.destroy