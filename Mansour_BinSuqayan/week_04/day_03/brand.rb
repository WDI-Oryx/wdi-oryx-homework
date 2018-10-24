class Brand
    attr_accessor :name, :products, :email 



    def initialize(name, email)
        puts "The store now has a new brand"
        @name = name
        @email = email
        @product = []
    end
    def  show_company_details
        p "Name: #{@name}. Email:#{@email}."
    end
    def add_product(name)
        @product.push(name)
    end
    def list_products
        @product.each do |product|
            p product
        end
    end
end

mishaer =Brand.new("Mishaer", "mish@ga.co")
mishaer.show_company_details()
mishaer.add_product("Thobe")
mishaer.add_product("bishat")
mishaer.list_products()

#p mishaer