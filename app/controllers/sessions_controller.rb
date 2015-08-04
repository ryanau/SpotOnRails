class SessionsController < ApplicationController

	def login
		user = User.find_by_email(params["email"])
		if user && user.password == params["password"]
			session[:user_id] = user.id
			session[:user_email] = user.email
			session[:user_first_name] = user.first_name
			session[:user_last_name] = user.last_name
			render json: user
		end
	end

	def logout
		reset_session
		message = 'logged out'
		render json: {x:message}
	end

	def show
		render json: session
	end

	def accepted_pin
		status = User.find(session[:user_id]).accepted_pin
		session[:user_accepted_pin] = status
		render json: status
	end

	def dropped_pin
		status = User.find(session[:user_id]).dropped_pin
		session[:user_dropped_pin] = status
		render json: status
	end	

	def dropped_pin_accepted
		status = User.find(session[:user_id]).dropped_pin_accepted
		session[:user_dropped_pin_accepted] = status
		render json: status
	end

end
