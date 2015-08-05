class PinsController < ApplicationController
	def index
		if params["query"] == "all_active_pins"
			render json: Pin.where(active: true, accepted_user_id: 0).where.not(user_id: session[:user_id])
		elsif params["query"] == 'your_dropped_pin'
			user = User.find(session[:user_id])
			pin = user.pins.where(active: true).last
			render json: pin
		elsif params["query"] == 'your_accepted_pin'
			pin = Pin.where(active: true, accepted_user_id: params["user_id"]).order(updated_at: :DESC).first
			render json: pin
		elsif params["query"] == 'your_requested_pin'
			pin = Pin.where(accepted_user_id: session[:user_id]).last
			render json: pin
		end
	end

	def create
		user = User.find(params["id"])
		if user.pins[0]
			render json: {message: 'You have already dropped a pin'}
		else
			pin = user.pins.create(active: true)
			user.update_attributes(dropped_pin: true)
			render json: pin
		end
	end

	def update
		if params["query"] == "request"
			pin = Pin.find(params["pin_id"]).update_attributes(accepted: true, accepted_user_id: session[:user_id])
			User.find(Pin.find(params["pin_id"]).accepted_user_id).update_attributes(accepted_pin: true)
			User.find(Pin.find(params["pin_id"]).user_id).update_attributes(dropped_pin_accepted: true)
			render json: pin
		elsif params["query"] == "cancel_request"
			pin = Pin.find(params["pin_id"])
			User.find(pin.accepted_user_id).update_attributes(accepted_pin: false)
			User.find(pin.user_id).update_attributes(dropped_pin_accepted: false)
			pin.update_attributes(accepted: false, accepted_user_id: 0)
			render json: pin
		end
	end

	def destroy
		pin = Pin.find((params["id"].to_i))
		if pin.accepted_user_id != 0
			User.find(pin.accepted_user_id).update_attributes(dropped_pin: false, dropped_pin_accepted: false, accepted_pin: false)
		end
		User.find(pin.user_id).update_attributes(dropped_pin: false, dropped_pin_accepted: false, accepted_pin: false)
		Pin.destroy(params["id"].to_i)
		render json: pin
	end

end
