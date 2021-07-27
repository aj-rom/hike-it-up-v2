class UserController < ApplicationController

  def authenticate
    user = User.find_by(email: user_params[:email])
    return render json: { errors: ['That email has not yet been used to create an account.'] } if user.nil?

    if user.valid_password?(user_params[:password])
      render json: UserSerializer.new(user).to_h
    else
      render json: { errors: [ 'Invalid Password' ] }
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: UserSerializer.new(user).to_h
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
