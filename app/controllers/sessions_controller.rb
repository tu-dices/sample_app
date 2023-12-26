class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      p 'user authenticated'
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def destroy; end
end
