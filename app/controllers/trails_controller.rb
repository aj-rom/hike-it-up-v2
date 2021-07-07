class TrailsController < ApplicationController
  before_action

  def index
    trails = Trail.all
    trails_json = TrailsSerializer.new(trails).to_h
    render json: trails_json
  end

  def show
    trail = Trail.find_by(id: params[:id])
    render json: TrailSerializer.new(trail).to_h
  end

  def create
    trail = Trail.create(trail_params)
    if trail
      puts 'Created...'
      puts trail.attributes
      redirect_to trail_path(trail)
    else
      render json: trail.errors.full_messages
    end
  end

  def destroy; end

  def update; end

  private

  def trail_params
    puts "Trail Params"
    puts params[:trail]
    params.require(:trail).permit(:name, :description, :hour_open, :hour_close, :images, :user_id)
  end

end
