class PagesController < ApplicationController
    def home
        render("pages/home")
    end
    def contact
        render("pages/contacts")
    end

    def color
        @chosen_color = params[:color]
    end
end