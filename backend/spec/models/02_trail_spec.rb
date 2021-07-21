require 'rails_helper'

RSpec.describe Trail, type: :model do

  context 'before publication' do

    user = User.create(email: 'TRAIL_SPEC@mail.com', password: 'password', password_confirmation: 'password')
    address = Address.create(street: '1234 Street Ln', city: 'Boulder', state: 'CO', zipcode: 80303)
    valid_trail = {
      name: 'Trail Name',
      description: 'A valid description',
      open_at: '10:30',
      close_at: '22:30'
    }

    it 'must belong to user' do
      a = Trail.create(valid_trail)
      a.address = address
      a.save
      expect(a.id).to eq nil

      b = user.trails.build(valid_trail)
      b.address = address
      b.save
      expect(b.id).to_not eq nil
    end

    it 'must have a valid name' do
      valid_trail['name'] = ''
      a = user.trails.build(valid_trail)
      a.address = address
      a.save
      expect(a.id).to eq nil

      valid_trail['name'] = 'Valid Trail'
      b = user.trails.build(valid_trail)
      b.address = address
      b.save
      expect(b.id).to_not eq nil
    end

    it 'must have a valid description' do
      valid_trail['description'] = 'Short'
      a = user.trails.build(valid_trail)
      a.address = address
      a.save
      expect(a.id).to eq nil

      valid_trail['description'] = 'A valid description'
      b = user.trails.build(valid_trail)
      b.address = address
      b.save
      expect(b.id).to_not eq nil
    end

    it 'must have an associated address' do
      a = user.trails.build(valid_trail)
      a.save
      expect(a.id).to eq nil

      b = user.trails.build(valid_trail)
      b.address = address
      b.save
      expect(b.id).to_not eq nil
    end

    it 'must have open & closing hours ' do
      valid_trail['open_at'] = ''
      a = user.trails.build(valid_trail)
      a.address = address
      a.save
      expect(a.id).to eq nil

      valid_trail['open_at'] = '10:30'
      b = user.trails.build(valid_trail)
      b.address = address
      b.save
      expect(b.id).to_not eq nil
    end
  end
end
