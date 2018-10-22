p "enter loan amount: "
loan = gets.chomp.to_i
p "Enter length of time in months: "
time = gets.chomp.to_i
p"Enter interest rate: "
r = gets.chomp.to_f/100

i = (1+r/12) ** (12/12)-1
annuity = (1-(1/(1+i))**time)/i 

payment = loan/annuity

puts "\n$%.2f per month" % [payment]

