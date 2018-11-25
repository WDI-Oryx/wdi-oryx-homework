# require "pry"

# class Shop
#   def initialize(name)
#     @name = name
#     @products = []
#   end

#   def add_product
#     puts "What product would you like to add? "
#     name = gets.chomp

#     puts "How much is it? "
#     price = gets.chomp.to_i

#     p = Product.new(name, price)
#     @products.push(p)
#     p @products
#   end
# end

# class Product
#   def initialize(name, price)
#     @name = name
#     @price = price
#   end
# end

# jarir = Shop.new("Jarir Bookstore")
# binding.pry
class BANK
  def initialize
    @accounts = []
  end

  def acountowner
    puts "what is your acount name? "
    username = gets.chomp.to_s
    puts "what is your current balnce? "
    userblance = gets.chomp.to_i

    name = BANKACOUNT.new(username, userblance)
    name.owner()
    puts "what would you like to deposit? "
    userdep = gets.chomp.to_i
    name.deposit(userdep)
    puts "what would you take? "
    userdec = gets.chomp.to_i
    name.withdraw(userdec)
  end
end

class BANKACOUNT
  def initialize(name, initialbalance)
    @name = name
    @initialbalance = initialbalance
    puts "#{@name} your accont include #{@initialbalance}"
  end

  def owner
    # puts "#{@name}"
  end

  def deposit(blanceincres)
    @initialbalance += blanceincres
    puts @initialbalance
  end

  def withdraw(blancedec)
    if @initialbalance >
       @initialbalance -= blancedec
      puts @initialbalance
    else
      puts "#{@initialbalance} is too low you can not "
    end
  end

  def blance
    puts "#{@initialbalance}"
  end
end

get = BANK.new()
get.acountowner
