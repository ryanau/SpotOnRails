class SessionsController < ApplicationController

	def login
		user = User.find_by_email(params["email"])
		if user && user.password == params["password"]
			session[:user_id] = user.id
			render json: user
		end
	end

	def logout
		session.clear
		message = 'logged out'
		render json: {x:message}
	end

	def check
		if session[:user_id]
			render json: session[:user_id]
		end
	end

end
