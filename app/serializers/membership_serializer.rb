class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest_group_id

  has_one :user
  has_one :interest_group
end
