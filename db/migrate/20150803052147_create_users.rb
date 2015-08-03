class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :first_name
			t.string :last_name
			t.string :email
			t.string :password_hash
			t.string :car_make
			t.string :car_color
			t.boolean :engage, default: false
			t.boolean :accept, default: false
			t.float :latitude, default: nil
			t.float :longitude, default: nil
			t.integer :active_pin_id
			t.timestamps null: false
		end
	end
end
