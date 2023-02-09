class AddTimeToInterestGroup < ActiveRecord::Migration[6.1]
  def change
    add_column :interest_groups, :time, :string
  end
end
