class UserController < ApplicationController

  def show
    user = User.find_by(id: params[:id])
    if user
      render_json user
    else
      render json: { errors: ['User not found.'] }
    end
  end

  def authenticate
    user = User.find_by(email: user_params[:email])
    return render json: { errors: ['Invalid email or password.'] } if user.nil?

    if user.valid_password?(user_params[:password])
      render json: { id: user.id, auth_token: user.auth_token }
    else
      render json: { errors: ['Invalid email or password.'] }
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: { id: user.id, auth_token: user.auth_token }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def destroy
    validate_user
    @user.destroy
  end

  private

  def render_json(user)
    render json: UserSerializer.new(user).to_h
  end

  def validate_user
    @user = User.find_by(auth_token: auth_params)
    render json: { error: ['Invalid credentials.'] }, status: 401 unless @user
  end

  def auth_params
    params.require(:auth_token)
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
