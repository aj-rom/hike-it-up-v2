admin_account = {
  name: 'ayo',
  email: 'ayo@gmail.com',
  password: 'Testing',
  password_confirmation: 'Testing'
}

user ||= User.create(admin_account)

trail_one = {
  name: 'Test Trail #1',
  description: 'Test trail #1 description',
  open_at: "8:30",
  close_at: "20:00"
}

user.trails.build(trail_one).save

trail_two = {
  name: 'Test Trail #2',
  description: 'Test Trail #2 description',
  open_at: "10:30",
  close_at: "22:30"
}

user.trails.build(trail_two).save
