class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest_group_id, :content, :time
end
