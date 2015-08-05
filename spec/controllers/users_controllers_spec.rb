require 'rails_helper'

RSpec.describe UsersController, type: :controller do
	describe "POST #create" do
		it "returns http success" do
			params = {firstname: 'Tester',
								lastname: 'Tank',
								email: 'test@tester.com',
								password: '123',
								car_make: 'audi',
								car_color: 'white', }

			post :create, params

			expect(response).to have_http_status(:success)
		end
	end
end