class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest_group_id
end
