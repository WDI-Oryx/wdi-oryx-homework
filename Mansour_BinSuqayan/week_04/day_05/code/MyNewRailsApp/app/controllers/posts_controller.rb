class PostsController < ApplicationController
    
    def index 
    end

    def show
        @is_admin = true
        @fav_number = 42
    end
end