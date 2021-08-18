class TrailsController < ApplicationController
  before_action :validate_user, only: %i[create destroy update]
  before_action :find_trail, only: %i[show destroy update]

  def index
    trails = Trail.order('created_at DESC')
    serialize trails
  end

  def show
    serialize @trail
  end

  def create
    trail = @user.trails.create(trail_params)
    if trail.save
      serialize trail
    else
      puts "Creation failed..."
      render json: trail.errors.full_messages
    end
  end

  def destroy
    if @user.id == @trail.user_id
      @trail.destroy
    else
      render json: { error: ['You must be the owner of the trail to do this.'] }
    end
  end

  def update; end

  private

  def serialize(trail)
    render json: TrailSerializer.new(trail).to_h
  end

  def find_trail
    puts "Finding trail"
    @trail = Trail.find_by(id: params[:id])
    render json: { error: 'Trail not found!' }, statues: 404 unless @trail
    puts "Trail found"
  end

  def validate_user
    puts "Finding User"
    @user = User.find_by(auth_token: auth_params)
    render json: { error: ['Invalid credentials.'] }, status: 402 unless @user
    puts "User found!"
  end

  def auth_params
    params.require(:auth_token)
  end

  def trail_params
    params.require(:trail)
          .permit(:name, :description, :open_at, :close_at, address_attributes: %i[street city state zipcode])
  end

end
