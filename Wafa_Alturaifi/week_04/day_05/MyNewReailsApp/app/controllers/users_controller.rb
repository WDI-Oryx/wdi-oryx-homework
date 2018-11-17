class UsersController < ApplicationController
  def index
  end

  def show
    username = params[:username]
    @user = {
      first_name: "jack",
      last_name: "coust",
      email: "jack@ga.com",
    }
  end
end
