class Bank
    def initialize
      @num=[]
    end
    def CreateBankAccount(owner,balance)
        newb=Bankaccount.new(owner,balance)
        @num.push(newb)
    end
    def Update(oldname,newname)
        i=0
        while i< @num.length
        @num[i].owner=newname if @num[i].owner==oldname
        i+=1
        end
    end
end
class Bankaccount
    attr_accessor :owner, :balance
    def initialize(owner, balance=0)
      @owner=owner
      @balance=balance
    end
    def print() 
        puts   @owner 
        puts  @balance
    end
    def Withdrawmoney(amount)  
        @balance=@balance-amount if @balance>amount 
        puts "Low balance, please add funds" if @balance<100 
    end
    def deposit(amount)  
        @balance=@balance+amount 
    end
end
# bank=Bank.new()
# p bank.CreateBankAccount("mada",1000)
# p bank
# bank.Update("mada","reem")
# p bank
# bankaccount=Bankaccount.new("nora",2000)
# p bankaccount
# bankaccount.Withdrawmoney(1950)
# p bankaccount
#  bankaccount.deposit(100000) 
# p bankaccount