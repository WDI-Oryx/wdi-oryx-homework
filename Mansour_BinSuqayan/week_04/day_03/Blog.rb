class User
    def everyone_can_do_this
        puts "Everyone!"
    end
end


class Admin < User
    def only_admins
        puts "This is just for Admins"
    end
end

a = Admin.new
a.only_admins()
a.everyone_can_do_this()