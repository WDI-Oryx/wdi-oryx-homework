class FieldsController < ApplicationController
  def index
    @fields = Field.all
  end

  def show
    @field = Field.find_by(id: params[:id])
  end
end
