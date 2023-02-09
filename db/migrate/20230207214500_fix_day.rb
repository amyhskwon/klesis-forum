class FixDay < ActiveRecord::Migration[6.1]
  def change
    rename_column :interest_groups, :day, :weekday
  end
end
