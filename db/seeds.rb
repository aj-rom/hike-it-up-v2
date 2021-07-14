trail_one = {
  name: 'Test Trail #1',
  description: 'Test trail #1 description',
  address: Address.create(street: 'Flagstaff Summit', city: 'Boulder', state: 'CO', zipcode: 80303),
  open_at: '8:30',
  close_at: '20:00'
}

Trail.create(trail_one)

trail_two = {
  name: 'Test Trail #2',
  description: 'Test Trail #2 description',
  address: Address.create(street: 'Artist Point', city: 'Boulder', state: 'CO', zipcode: 80303),
  open_at: '10:30',
  close_at: '22:30'
}

Trail.create(trail_two)