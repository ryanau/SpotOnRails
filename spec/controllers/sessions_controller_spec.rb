require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
	describe "GET #logout" do
		it "returns http success" do
			get :logout
			expect(response).to have_http_status(:success)
		end
	end

	describe "GET #show" do
		it "returns http success" do
			get :show
			expect(response).to have_http_status(:success)
		end
	end

	describe "GET #accepted_pin" do
		it "returns http success" do
			get :accepted_pin, {'id' => "5"}, {'user_id' => 5}
			expect(response).to have_http_status(:success)
		end
	end

	describe "GET #dropped_pin" do
		it "returns http success" do
			get :dropped_pin
			expect(response).to have_http_status(:success)
		end
	end

	describe "GET #dropped_pin_accepted" do
		it "returns http success" do
			get :dropped_pin_accepted
			expect(response).to have_http_status(:success)
		end
	end
end