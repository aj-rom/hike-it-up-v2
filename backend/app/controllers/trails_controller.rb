class TrailsController < ApplicationController

  def index
    trails = Trail.all
    trails_json = TrailsSerializer.new(trails).serialized_json
    render json: trails_json
  end

  def show
    trail = Trail.find_by(id: params[:id])
    render json: TrailSerializer.new(trail).serialized_json
  end

  def create; end

  def destroy; end

  def update; end

  private

  def trail_params
    params.require(:trail).permit(:title, :description, :images)
  end

end
