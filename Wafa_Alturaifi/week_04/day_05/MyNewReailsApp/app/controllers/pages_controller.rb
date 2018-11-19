class PagesController < ApplicationController
  def home
  end

  def contact
    render("pages/contact")
  end

  def about
    render("pages/about")
  end

  def color
    @chosen_color = params[:color]
  end
end
