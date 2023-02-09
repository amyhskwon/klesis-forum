class RemoveTimeFromInterestGroup < ActiveRecord::Migration[6.1]
  def change
    remove_column :interest_groups, :time
  end
end
