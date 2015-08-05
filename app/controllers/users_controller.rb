class UsersController < ApplicationController

	def create
		user = User.new(
			first_name: params["fn"],
			last_name: params["ln"],
			email: params["email"],
			car_make: params["carmake"],
			car_color: params["carcolor"],
			)
		user.password = params["password"]
		if user.save
			session[:user_id] = user.id
			session[:user_email] = user.email
			session[:user_first_name] = user.first_name
			session[:user_last_name] = user.last_name
			render json: user, status: 201
		else
			render nothing: true, status: 400
		end
	end
end
