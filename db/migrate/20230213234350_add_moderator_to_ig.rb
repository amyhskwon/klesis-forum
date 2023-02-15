class AddModeratorToIg < ActiveRecord::Migration[6.1]
  def change
    add_column :interest_groups, :moderator, :integer
  end
end
