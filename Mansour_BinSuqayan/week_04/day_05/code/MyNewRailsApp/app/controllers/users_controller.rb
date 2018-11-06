class UsersController < ApplicationController
    def index
        
    end
    def show
        @username = params[:username]
        # raise("an error")
    end
    
end