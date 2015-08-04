class PinsController < ApplicationController
	def index
		if params["query"] == "all_active_pins"
			render json: Pin.where(active: true, accepted_user_id: 0).where.not(user_id: params["user_id"])
		elsif params["query"] == 'your_dropped_pin'
			user = User.find(session[:user_id])
			pin = user.pins.where(active: true).last
			render json: pin
		elsif params["query"] == 'your_accepted_pin'
			pin = Pin.where(active: true, accepted_user_id: params["user_id"]).order(updated_at: :DESC).first
			render json: pin
		end
	end

	def create
		user = User.find(params["id"])
		pin = user.pins.create(active: true)
		user.update_attributes(engage: true)
		render json: pin
	end

	def update
		if params["query"] == "accept"
			pin = Pin.find(params["pin_id"]).update_attributes(accepted: true, accepted_user_id: params["user_id"])
			render json: pin
		end
	end

	def destroy
		pin = Pin.destroy(params["id"].to_i)
		user = User.find(session[:user_id]).update_attributes(engage: false)
		render json: pin
	end

end
