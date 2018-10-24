class BANK
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
    name.incres(userdec)
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

  def incres(blancedec)
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
