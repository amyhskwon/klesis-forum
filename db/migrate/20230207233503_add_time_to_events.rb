class AddTimeToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :time, :string
  end
end
