require "pry"

def show_menu
  puts
  puts " Menu:"
  puts "  A: Add Numbers"
  puts "  S: Subtract Numbers"
  puts "  M: Multiply Numbers"
  puts "  D: Divide Numbers"
  puts "  E: Exponents (Power)"
  puts "  R: Square Root"
  puts "  G: Mortgage Calculator"
  puts "  B: BMI Calculator"
  puts "  T: Trip Calculator"
  puts "  ?: Show menu"
  puts "  Q: Quit"
  puts
end

def add
  puts "Enter the first number"
  num1 = gets.chomp.to_f
  puts "Enter the second number"
  num2 = gets.chomp.to_f
  puts "#{num1} + #{num2} = #{num1 + num2}"
end

def subtract
  puts "Enter the first number"
  num1 = gets.chomp.to_f
  puts "Enter the second number"
  num2 = gets.chomp.to_f
  puts "#{num1} - #{num2} = #{num1 - num2}"
end

def multiply
  puts "Enter the first number"
  num1 = gets.chomp.to_f
  puts "Enter the second number"
  num2 = gets.chomp.to_f
  puts "#{num1} * #{num2} = #{num1 * num2}"
end

def divide
  puts "Enter the first number"
  num1 = gets.chomp.to_f
  puts "Enter the second number"
  num2 = gets.chomp.to_f
  puts "#{num1} / #{num2} = #{num1 / num2}"
end

def power
  puts "Enter the first number"
  num1 = gets.chomp.to_f
  puts "Enter the second number"
  num2 = gets.chomp.to_f
  puts "#{num1} ^ #{num2} = #{num1 ** num2}"
end

def sqrt
  puts "Enter the number"
  num1 = gets.chomp.to_f
  puts "Square root of #{num1} = #{Math.sqrt(num1)}"
end

def bmi
  puts "Enter your weight in kg"
  weight = gets.chomp.to_f
  puts "Enter your height in Meters"
  height = gets.chomp.to_f
  puts "Your body mass index (BMI) is #{((weight) / (height ** 2)).round(2)}"
end

def trip
  puts "Enter the distance in km"
  distance = gets.chomp.to_f
  puts "Enter the price for a liter"
  liter_price = gets.chomp.to_f
  puts "Enter the kilometers per liter"
  km_per_liter = gets.chomp.to_f
  puts "Enter the speed in km/h"
  speed = gets.chomp.to_f
  cost = (distance / km_per_liter) * liter_price
  time = distance / speed
  puts "It'll take #{time.round(2)}hrs and cost #{cost.round(2)} based on your input"
end

def mortgage
  puts "Enter the mortgage total amount:"
  mort = gets.chomp.to_f
  puts "In how many years?"
  years = gets.chomp.to_f
  puts "Enter the interest rate (%)"
  rate = gets.chomp.to_f
  puts "The monthly payment should be: #{mort / (years*12) + (mort + (mort * rate / 100))}"
end

def run_claculator
  show_menu
  puts "Please choose a command:"
  user_input = gets.chomp
  puts
  until user_input.downcase == "q"
    case user_input.downcase
    when "a" then add
    when "s" then subtract
    when "m" then multiply
    when "d" then divide
    when "e" then power
    when "r" then sqrt
    when "b" then bmi
    when "g" then mortgage
    when "t" then trip
    when "?" then show_menu
    else
      puts "Invalid option. Type '?' to see the menu"
    end
    puts
    puts "Please choose a command:"
    user_input = gets.chomp
  end
  puts "\nThank you for using my calculator. See you later."
  puts
end

run_claculator