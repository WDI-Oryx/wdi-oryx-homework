require "pry"

class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def transfer(from, to, amount)
    creditFrom = get_account(from)
    creditTo = get_account(to)
    creditTo.deposit(amount) if creditFrom.withdrow(amount)
  end

  def create_account(name, balance = 0)
    puts "New account has been created and added to the list"
    new_account = BankAccount.new(name, balance)
    @accounts.push(new_account)
  end

  def delete_account(name)
    @accounts.delete_at(@accounts.index(get_account(name)))
  end

  def get_all_balance()
    @accounts.reduce(0) { |sum, account| sum + account.balance }
  end

  def print_all
    puts "\t[Name]\t\t|\t[Balance]"
    @accounts.each { |account| puts "\t#{account.owner}\t\t|\t#{account.balance}" }
    nil
  end

  def update_account_name(old_name, new_name)
    account_to_change = get_account(old_name)
    account_to_change.owner = new_name
    account_to_change.print_info
  end

  def get_account(name)
    @accounts.find { |account| account.owner == name }
  end
end

class BankAccount
  attr_accessor :owner, :balance

  def initialize(name, balance)
    @owner = name
    @balance = balance
  end

  def withdrow(amount)
    if @balance >= amount
      @balance -= amount
      return true
    else
      return false
    end
  end

  def deposit(amount)
    @balance += amount
  end

  def print_info
    puts "This account belongs to: #{@owner}"
    puts "It has a balance of: #{@balance}"
  end
end

def show_menu
  puts "\t-- Welcome to ABS (Ali's Bank System) --"
  puts
  puts "Here are the options:"
  puts "L : List all Accounts."
  puts "B : Bank's total Balance."
  puts "A : Add a new account."
  puts "U : Update an account name."
  puts "D : Delete an account."
  puts "G : Get an account."
  puts "T : Transfer."
  puts "? : Show menu."
  puts "Q : Quit."
  puts
end

puts "Creating dummy accounts"
bnk = Bank.new("Ali's Bank Systems", "Khobar")
bnk.create_account("Ali", 5500)
bnk.create_account("Khalid", 3000)
bnk.create_account("Ahmad", 100)
bnk.create_account("Dina", 15369)
bnk.create_account("Sami")
puts

# puts bnk.get_all_balance

show_menu
loop do
  puts "\nPlease choose a comman!"
  quit = false
  input = gets.chomp.downcase
  case input
  when "l" then bnk.print_all
  when "b" then puts bnk.get_all_balance
  when "a"
    puts "Please enter the name of the owner:"
    aName = gets.chomp
    puts "Does it start with a balance? (y/n)"
    answer = gets.chomp.downcase
    if (answer == "y")
      puts "Please enter the balance:"
      bnk.create_account(aName, gets.chomp)
    else
      bnk.create_account(aName)
    end
  when "u"
    puts "Please enter the name of the account you want to update:"
    old_name = gets.chomp
    puts "What would you like to change it to?"
    new_name = gets.chomp
  when "d"
    puts "Please enter the name of the account you want to delete:"
    bnk.delete_account(gets.chomp)
  when "g"
    puts "Please enter the name of the account you want get:"
    bnk.get_account(gets.chomp).print_info
    bnk.update_account_name(old_name, new_name)
  when "t"
    puts "From:"
    from = gets.chomp
    puts "To:"
    to = gets.chomp
    puts "Amount:"
    amount = gets.chomp.to_f
    bnk.transfer(from, to, amount)
  when "?" then show_menu
  when "q" then quit = true
  else
    puts "Invalid input"
  end
  break if quit == true
end

# binding.pry
