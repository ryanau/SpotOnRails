require 'bcrypt'

class User < ActiveRecord::Base
	has_many :pins
	validates :email, uniqueness: true
	validates :first_name, :last_name, :email, :car_make, :car_color, presence: true

	  include BCrypt

		def password
			@password ||= Password.new(password_hash)
		end

		def password=(new_password)
			@password = Password.create(new_password)
			self.password_hash = @password
		end
		
end
