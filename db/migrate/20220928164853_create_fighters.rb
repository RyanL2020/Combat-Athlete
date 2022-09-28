class CreateFighters < ActiveRecord::Migration[6.1]
  def change
    create_table :fighters do |t|
      t.string :name
      t.string :image
      t.string :style
      t.integer :age
      t.integer :height
      t.float :weight
      t.float :reach
      t.integer :win
      t.integer :loss
      t.string :gender
      t.timestamps
    end
  end
end
