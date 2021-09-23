class CreateSeries < ActiveRecord::Migration[6.1]
  def change
    create_table :series do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.string :slug

      t.timestamps
    end
  end
end
