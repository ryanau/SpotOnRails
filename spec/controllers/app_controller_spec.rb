require 'rails_helper'

RSpec.describe AppController, type: :controller do

  context '#show' do
    it 'will render the layout' do
      get :show

      expect(response.status).to eq 200
      expect(response).to have_rendered 'show'
    end
  end
end
