class Robot
  attr_accessor :name, :counter, :creation_date

  def initialize
    @counter = 0
    @creation_date = Time.now
    @name = make_name
  end

  def make_name
    @counter += 1
    # Random 2 letters
    letters = ("A".."Z").to_a.sample(2).join
    # Random 3 numbers
    numbers = (0..9).to_a.sample(3).join
    name = letters + numbers
    # name
  end

  def name
    @counter += 1
    @name
  end

  def reset
    @name = make_name
  end

  def counter
    @counter
  end

  def timers
    puts "#{Time.now - @creation_date} seconds since creation."
  end
end

jack = Robot.new
p jack.name
sleep 1
jack.timers
