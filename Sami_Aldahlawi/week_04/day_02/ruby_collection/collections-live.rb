# foods = ["taco", "pizza", "celery"]
# foods = Array.new
# foods = Array.new(3)
# foods = Array.new(3, true)
# foods = Array.new(2) { Array.new(3, "taco") }
# # p foods

# arr = [1, 2, 3, 4, 5]

# p arr.first
# p arr.last
# p arr.take(3)
# p arr.drop(3)
# p arr

# arr = [1, 2, 3, 4, 5, 6]
# arr.push(7)
# p arr
# arr << 8
# arr.unshift(0)

# arr = ["foo", 0, nil, 7, "ping", nil, "plong"]
# p arr.compact
# p arr

# ####################
# numbers = [1, 2, 3, 4, 5, 6, 9, 3, 4, 19]

# # numbers.each do |number|
# # puts number
# # end

# numbers.each { |number| puts number }

# numbers.reverse_each do |num|
#   puts num
# end

# numbers_times_two = numbers.map { |num| 2 * num }
# p numbers_times_two

# p numbers.select { |num| num > 4 }
# p numbers.reject { |num| num > 4 }

# weeks = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

# p weeks.pop
# p weeks

#########
## B
# numbers = [5, 10, 18, 4, 22]
# # 1
# numbers_doubled = numbers.map { |num| num * 2 }
# # 2
# numbers_randomized = numbers.map { |num| rand(10) * num }
# # 3
# foods = ["taco", "pizza", "celery"]
# caped_foods = foods.map { |food| food.capitalize }
# # 4
# surprised_foods = foods.map { |food| food += "!" }

# # USE MAP

# numbers = [5, 10, 18, 4, 22]
# sum_nums = numbers.reduce() do |total_sum, current_num|
#   total_sum += current_num
#   e = 1000
# end

# puts sum_nums

# [1, 2, 3, 4, 5, 5, 5, 5, 5].each do |el|
#   p el
# end

# chair = {
#   wheels: 5,
#   height: 106,
#   color: "red",
#   model: 2012,
# }

# chair[:person] = false
# p chair

# chair.each do |all|
#   p all
# end

# chair.each do |key, value|
#   puts "key: #{key}, Value: #{value}"
# end

students = [
  {
    first: "Faisal",
    last: "Al-Qahtani",
    class: "WDI",
  },
  {
    first: "Mada",
    last: "Alwuthaynani",
    class: "WDI",
  },
  {
    first: "Njod",
    last: "Alnasser",
    class: "WDI",
  },
  {
    first: "Atheer",
    last: "Minwar",
    class: "WDI",
  },
  {
    first: "Halimah",
    last: "Alshahrani",
    class: "WDI",
  },
  {
    first: "Rawan",
    last: "Albahouth",
    class: "WDI",
  },
  {
    first: "Sami",
    last: "Aldahlawi",
    class: "WDI",
  },
  {
    first: "Noura",
    last: "Alsubaie",
    class: "WDI",
  },
  {
    first: "Noura",
    last: "Alhadlaq",
    class: "WDI",
  },
  {
    first: "Jafar",
    last: "Alhajji",
    class: "WDI",
  },
  {
    first: "Dalal",
    last: "Saeed",
    class: "WDI",
  },
  {
    first: "Alanoud",
    last: "AlRasheed",
    class: "WDI",
  },
  {
    first: "Razan",
    last: "Almusa",
    class: "WDI",
  },
  {
    first: "Leana",
    last: "Alqurashi",
    class: "WDI",
  },
  {
    first: "Sarah",
    last: "AlFadly",
    class: "WDI",
  },
  {
    first: "Mashael",
    last: "Almosallam",
    class: "WDI",
  },
  {
    first: "Wafa",
    last: "Alturaifi",
    class: "WDI",
  },
  {
    first: "Abdullah",
    last: "AlQahtani",
    class: "WDI",
  },
  {
    first: "Sultan",
    last: "Alsamaani",
    class: "WDI",
  },
  {
    first: "Thekra",
    last: "Alowais",
    class: "WDI",
  },
  {
    first: "Sarah",
    last: "Alasadi",
    class: "WDI",
  },
  {
    first: "Mohammed",
    last: "abdulqader",
    class: "WDI",
  },
  {
    first: "Saud",
    last: "Almotairy",
    class: "WDI",
  },
  {
    first: "Mansour",
    last: "Bin Suqayan",
    class: "WDI",
  },
  {
    first: "Haya",
    last: "AlMousa",
    class: "WDI",
  },
  {
    first: "Ali",
    last: "Alsubaie",
    class: "WDI",
  },
]

students.each do |el|
  if el[:last][0] != "A" && el[:last][0] != "a"
    puts el[:last]
  end
end
