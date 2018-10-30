class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(balance, name)
    @accounts.push(BankAccount.new(balance, name))
  end

  def print_all_account()
    @accounts.each do |i|
      puts i.print_account()
    end
  end
end

class BankAccount
  attr_accessor :balance, :name

  def initialize(balance = 0, name)
    @balance = balance
    @name = name
  end

  def withdraw(num)
    if @balance >= num
      @balance -= num
      puts "Withdrawn #{num}, And your balance is : #{balance}"
      if @balance < 100
        puts "Low balance, please add funds."
      end
    else
      puts "You cann.t, Declined"
    end
  end

  def diposit(num)
    @balance += num
    puts "You current balance is : #{@balance}"
  end

  def print_account()
    puts "The account name:#{@name}\t,\t Balance:#{@balance}"
  end

  def delete_account()
    delete()
  end
end

# newOne = BankAccount.new(1000, "Mohammed")
# newOne.withdraw(100)
# newOne.diposit(100)
# newOne.print_account()

# newTwo = BankAccount.new(2222, "Ahmed")
# newTwo.print_account()

bank = Bank.new("Alrajahi", "Riyadh")
ahmed_Account = bank.create_account(11000, "Ahmed")
khaled_account = bank.create_account(2150, "Khaled")
Sami_account = bank.create_account(3000, "Sami")
Jone_Account = bank.create_account(4000, "Jone")
Steve_account = bank.create_account(1150, "Steve")
Ali_account = bank.create_account(200, "Ali")
Moahhmed_Account = bank.create_account(1000, "moh")
Mazen_account = bank.create_account(150, "Mazen")
Moath_account = bank.create_account(100000, "Moath") ## Look at Moath have 1 Million :D, you are so rich

bank.print_all_account()
