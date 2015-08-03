class PinsController < ApplicationController
	def index
		if params["active"] == "true"
			render json: Pin.where(active: true)
		elsif params["active"] == "false"
			render json: Pin.where(active: false)
		end
	end

	def create
		pin = Pin.create(active: true)
		render json: pin
	end

	def destroy
		pin = Pin.find(params["id"].to_i)
		pin.destroy
		render json: pin
	end
end
