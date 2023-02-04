class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :interest_group_id
      t.string :content
      t.timestamp :time

      t.timestamps
    end
  end
end
