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

	def accepted
		status = User.find(session[:user_id]).accept
		session[:user_accept] = status
		render json: status
	end

	def engaged
		status = User.find(session[:user_id]).engage
		session[:user_engaged] = status
		render json: status
	end

end
