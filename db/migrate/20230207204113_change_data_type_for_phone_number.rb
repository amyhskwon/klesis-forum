class ChangeDataTypeForPhoneNumber < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :phone_number, :string
  end
end
