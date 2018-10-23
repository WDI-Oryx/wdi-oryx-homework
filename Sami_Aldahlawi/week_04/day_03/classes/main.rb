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

class User
  attr_accessor :username

  def initialize(username)
    puts " A new user signed up"
    @username = username
  end
end

moath = User.new("SAmi", "ALi", "Ahmed")

binding.pry
