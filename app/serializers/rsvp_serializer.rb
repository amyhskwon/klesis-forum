class RsvpSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id

  has_one :user
  has_one :event
end
