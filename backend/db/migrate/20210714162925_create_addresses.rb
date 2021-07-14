class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.belongs_to :trail, foreign_key: true
      t.text :street, required: true
      t.text :city, required: true
      t.text :state, required: true
      t.integer :zipcode, required: true
      t.timestamps
    end
  end
end
