require "pry"

class Person
  def speak(speack)
    @message = "Something"
    puts "Hi there"
  end

  def eat
    puts "I am eating"
  end
end

class Animal
end

class Chair
end

class BlogPost
  def edited
    puts "This shouuld edit the post"
  end

  def deleted
    puts "This should delete the post"
  end

  def newPost(ne)
    newOne = ne
  end

  def newPost
    @newOne
  end
end

# person = Person.new

# person.speack
# person.eat

# post = BlogPost.new
# post.newPost("SAmi")
# post.edited()
# post.deleted()
# post.newPost
# # binding.pry

# class User
#   attr_accessor :first_name

#   def initialize()
#     puts "A user signed up"
#   end
# end

# user = User.new
# user.first_name = "Sami"

# class Book
#   attr_accessor :titile, :author

#   def read()
#     puts "You just read this book#{titile}"
#   end
# end

# geb = Book.new
# geb.titile = "Thinking fast and slow"
# geb.author = ""
# geb.read()

# class User
#   attr_accessor :username, :first_name, :last_name, :email

#   def initialize(username, first, last, email)
#     puts "A new user signed up"
#     @username = username
#     @first_name = first
#     @last_name = last
#     @email = email
#   end

#   def show_profile
#     puts "<h1>#{@first_name} #{@last_name}: #{@email}</h1>"
#   end

#   def print_full_name
#     puts "#{@first_name} #{@last_name}"
#     # e.g. puts "Moath Althawad"
#   end

#   def send_email
#     puts "Sending an email to #{@email}"
#   end
# end

# moath = User.new("MoMo", "Moath", "Althawad", "moath@ga.co")
# moath.send_email()
# moath.print_full_name()

# trevor = User.new("T-Rex", "Trevor", "Preston", "trev@ga.co")
# trevor.send_email()
# trevor.print_full_name()
# p moath

class Brand
  attr_accessor :name, :products, :email

  def initialize(name, email)
    puts "The store now has a new brand"
    @name = name
    @email = email
    @products = []
  end

  def show_company_details
    p "Name ----- Email -----"
  end
  
end

mishaer = Brand.new("Mishaer", "mishaer@ga.co")
p mishaer
binding.pry
