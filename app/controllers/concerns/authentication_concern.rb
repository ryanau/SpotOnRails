module AuthenticationConcern
	extend ActiveSupport::Concern


	included do
		helper_method :current_user
		helper_method :logged_in?

		def current_user
			return nil if session[:user_id].blank?
			@current_user ||= User.find_by(id: session[:user_id])
		end

		def logged_in?
			!current_user.nil?
		end
	end
end