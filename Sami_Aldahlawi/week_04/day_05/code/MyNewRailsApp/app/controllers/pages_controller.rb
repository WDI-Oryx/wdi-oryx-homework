
class PagesController < ApplicationController
  def home
    # render("pages/home")
  end

  def contact
    render("pages/contact")
  end

  def about
    @username = params[:username]
    # raise("AN ERROR")
  end
end
