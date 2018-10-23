# foods = ['taco', 'pizza','celery']

# foods = Array.new 


# foods = Array.new(3)

# foods = Array.new(300,'taco')
# foods = Array.new(2) {Array.new(3,'taco')}

# p foods


# arr = [1,2,3,4,5,6]

# p arr[2]
# p arr[100]
# p arr[-1]
# p arr[1,4]
# p arr[1..4]
# arr[0]=2
# p arr

# p arr.first
# p arr.last
# p arr.take(3)
# p arr.drop(3)


# arr = [1,2,3,4,5,6]
# arr.push(7)

# arr.unshift(0)
# arr.insert(3,'Moath','has a finely manicured','beard')

# arr = [1,2,3,4,5,6]
# # arr.pop
# # arr.shift
# arr.delete_at(2)

# arr = [ 'foo',0,nil,'bar',7,'ping',nil,'plong']


# p arr.compact

# numbers = [2,5,7,6,9,11,2,7]
# # p arr.uniq
# numbers.each do  |number|
#   puts number
# end

# numbers.each { |number| puts 'banana' if number == 2}
# p arr


# numbers = [1,3,7,2]

#  number_times_two = numbers.map { |number| 2 * number}
#  p number_times_two

# numbers = [1,3,7,2,4,5,22,3,2]
# # p numbers.select{ |number| number > 4}
# # p numbers.reject{ |number| number > 4}
# numbers.delete_if { |number| number > 4}
# numbers.keep_if { |number| number >4 }


# p numbers

# array1 = ["x","y","z"]
# array2 = ["w","x","y"]

# # array3 = array1 | array2
# # array3 = array1 & array2
# array3 =  array1 - array2



# p array3

# 
# 1.  output an array that is [ 10, 20, 36, 8, 44]
# 2.  create an array that is the same length where each 
# number is multiplied by a random number between 0 and 10.

# foods = ['taco', 'pizza', 'celery']
# 3. return an array of the same words where each word is capitalized
# 4. Add an exclamation mark at the end of each element
# ## USE MAP

# numbers = [5,10,18,4,22]

#  numbers_two =  numbers.map { |number| 2 *number }

#  numbers_random =  numbers.map { |number| rand(0..10) *number }

#  p numbers_random

#  foods = ['taco', 'pizza', 'celery']

#  capped_foods = foods.map { |food| food.capitalize}

#  suprised_foods = foods.map { |food| food += "!"}

#  p suprised_foods

# numbers = [5,10,18,4,22]

#  sum_nums = numbers.reduce(0) do |total_sum , current_num|
#     total_sum + current_num
# end 

# puts sum_nums


# prices = [10,90,15,1,50]

# sum_prices = prices.reduce(0) do  |total_sum ,current_price| 
#     total_sum + (current_price * 1.08)
# end



# p sum_prices

# scores = [88,65,100,55,74] 

# average_score = scores.reduce(0) { | total , current|  total + current } / scores.length

# p average_score

# my_hash = {}

# chair ={
#     wheels:5,
#     height: {
#         measurement: 175,
#         unit: "cm",
#     },
#     type:"office chair",
#     arm_rests: true,
# }

# #   chair.delete(:type)
# #   p chair 

# # chair.each do |all|
# #     p all
# # end 

# # chair.each do |key , value|
# #     puts "here is the key , #{key} which is the value ,#{value}"
# # end

# # p chair


# chair.keys.each do |key|
#     p "keys are #{key}"
# end

students = [
    {
      first: 'Faisal',
      last:'Al-Qahtani',
      class: 'WDI'
    },
    { 
      first: 'Mada',
      last: 'Alwuthaynani',
      class: 'WDI'
    },
    {
      first: 'Njod',
      last: 'Alnasser',
      class: 'WDI'
    },
    {
      first: 'Atheer',
      last: 'Minwar',
      class: 'WDI'
    },
    {
      first: 'Halimah',
      last: 'Alshahrani',
      class: 'WDI'
    },
    {
      first: 'Rawan',
      last: 'Albahouth',
      class: 'WDI'
    },
    {
      first: 'Sami',
      last: 'Aldahlawi',
      class: 'WDI'
    },
    {
      first: 'Noura',
      last: 'Alsubaie',
      class: 'WDI'
    },
    {
      first: 'Noura',
      last: 'Alhadlaq',
      class: 'WDI'
    },
    {
      first: 'Jafar',
      last: 'Alhajji',
      class: 'WDI'
    },
    {
      first: 'Dalal',
      last: 'Saeed',
      class: 'WDI'
    },
    {
      first: 'Alanoud',
      last: 'AlRasheed',
      class: 'WDI'
    },
    {
      first: 'Razan',
      last: 'Almusa',
      class: 'WDI'
    },
    {
      first: 'Leana',
      last: 'Alqurashi',
      class: 'WDI'
    },
    {
      first: 'Sarah',
      last: 'AlFadly',
      class: 'WDI'
    },
    {
      first: 'Mashael',
      last: 'Almosallam',
      class: 'WDI'
    },
    {
      first: 'Wafa',
      last: 'Alturaifi',
      class: 'WDI'
    },
    {
      first: 'Abdullah',
      last: 'AlQahtani',
      class: 'WDI'
    },
    {
      first: 'Sultan',
      last: 'Alsamaani',
      class: 'WDI'
    },
    {
      first: 'Thekra',
      last: 'Alowais',
      class: 'WDI'
    },
    {
      first: 'Sarah',
      last: 'Alasadi',
      class: 'WDI'
    },
    {
      first: 'Mohammed',
      last: 'abdulqader',
      class: 'WDI'
    },
    {
      first: 'Saud',
      last: 'Almotairy',
      class: 'WDI'
    },
    {
      first: 'Mansour',
      last: 'Bin Suqayan',
      class: 'WDI'
    },
    {
      first: 'Haya',
      last: 'AlMousa',
      class: 'WDI'
    },
    {
      first: 'Ali',
      last: 'Alsubaie',
      class: 'WDI'
    }
]
   



puts students.select { |value| !value[:last].downcase.start_with?("a") }