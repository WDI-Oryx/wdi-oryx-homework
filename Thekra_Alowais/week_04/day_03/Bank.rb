class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(name = "", balance = 0)
    puts "The name is #{name} and the balance is #{balance}"
    bank_acc = BankAccount.new(name, balance)
    @accounts.push(bank_acc)
    p "the accounts: #{@accounts}"
    return bank_acc
  end

  #   def update_BankAccount_name(newname, index)
  #     @accounts[index] = newname
  #   end

  def total_balance
    total = 0
    @accounts.each do |b|
      total += b[:balance]
    end
    p total
  end
end

class BankAccount
  attr_accessor :owner, :balance

  def initialize(owner, balance)
    @owner = owner
    @balance = balance
  end

  def withdraw(withdraw)
    if @balance >= withdraw
      #   p "the balance #{@balance}"
      @balance -= withdraw
      if @balance < 100
        p "Low balance, please add funds."
      end
    end
  end

  def deposit(deposit)
    p @balance += deposit
  end

  #   Have a method that prints the name and balance of that BankAccount

  #   def show_bankaccount(id)
  #     # @accounts.select { |x| puts "#{@owner} and #{balance}" if x[:name][id] == id }
  #     if @accounts[id]
  #       p @accounts[id][:name]
  #     end

  #   end
end

new_bank = Bank.new("alrajhi", "Riyadh")

thekra_account = new_bank.create_account("Thekra", 1000)
noura_account = new_bank.create_account("noura", 12)

puts thekra_account.balance
thekra_account.withdraw(100)
puts thekra_account.balance
# p new_bank.update_BankAccount_name("maha", 0)
# p new_bank
# p thekra_account.show_bankaccount(0)
