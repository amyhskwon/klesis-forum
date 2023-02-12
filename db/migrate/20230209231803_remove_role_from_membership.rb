class RemoveRoleFromMembership < ActiveRecord::Migration[6.1]
  def change
    remove_column :memberships, :role
  end
end
