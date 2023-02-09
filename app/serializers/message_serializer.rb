class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest_group_id, :content, :time

  belongs_to :interest_group
end
