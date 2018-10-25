

class User
  def everone_can_do_this
    puts "Everyone!"
  end
end

class Admin < User
  def only_admins
    puts "This is just for Admins"
  end
end

class Author < User
  def only_author
    puts "This is just for Authors"
  end
end

u = User.new
u.everone_can_do_this
a = Admin.new
a.only_admins
a.everone_can_do_this

au = Author.new
