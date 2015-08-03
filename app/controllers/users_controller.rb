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
			render json: user
		end
	end
end
