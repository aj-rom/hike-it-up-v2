# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(name: 'ayo', email: 'ayo@gmail.com', password: 'Testing', password_confirmation: 'Testing')

user.trails.build(name: 'Test Trail #1', description: 'Test trail #1 description', hour_open: 6, hour_close: 7).save

User.first.trails.build(name: 'Test Trail #2', description: 'Test Trail #2 description', hour_open: 8, hour_close: 9).save