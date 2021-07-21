class TrailsController < ApplicationController

  def index
    trails = Trail.order('created_at DESC')
    trails_json = TrailSerializer.new(trails).to_h
    render json: trails_json
  end

  def show
    trail = Trail.find_by(id: params[:id])
    render json: TrailSerializer.new(trail).to_h
  end

  def create
    trail = Trail.create(trail_params)
    if trail.id
      redirect_to trail_path(trail)
    else
      render json: trail.errors.full_messages
    end
  end

  def destroy; end

  def update; end

  private

  def trail_params
    params.require(:trail).permit(:name, :description, :open_at, :close_at, :address, :user_id)
  end

end
