class CreatePins < ActiveRecord::Migration
  def change
  	create_table :pins do |t|
  		t.boolean :active
  		t.integer :user_id, default: 0
  		t.integer :accepted_user_id, default: 0
  		t.boolean :accepted, default: false
  		t.float :latitude, default: nil
  		t.float :longitude, default: nil
  		t.timestamps null: false
    end
  end
end
