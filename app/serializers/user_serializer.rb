class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :photo, :grad_year, :phone_number, :admin

  has_many :memberships
  has_many :rsvps
  has_many :interest_groups
end
