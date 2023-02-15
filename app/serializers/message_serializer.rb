class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest_group_id, :content

  belongs_to :interest_group
  has_one :user
end
