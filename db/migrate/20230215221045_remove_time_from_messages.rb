class RemoveTimeFromMessages < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :time
  end
end
