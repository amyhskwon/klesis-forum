class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :role, :interest_group_id
end
