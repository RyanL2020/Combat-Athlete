# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Fighter.destroy_all


5.times do Fighter.create(
    name: Faker::Name.name, 
    image: Faker::Avatar.image,
    style: "Martial Arts",
    age: Faker::Number.number, 
    height: Faker::Number.number,
    weight: Faker::Number.decimal,
    reach: Faker::Number.decimal,
    win: Faker::Number.number,
    loss: Faker::Number.number,
    gender: "N/A"
    )
end 

puts "You GOt seeds"