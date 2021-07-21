require 'rails_helper'

RSpec.describe Address, type: :model do
  context 'before publication' do
    trail = User.first.trails.build(name: 'Test Trail', description: 'A description', open_at: '10:30', close_at: '22:30')
    trail.save
    it 'must belong to a trail' do
      address_bad = { street: '1234 Street Ln', city: 'Boulder', state: 'CO', zipcode: 80303 }
      a = Address.create(address_bad)
      expect(a.id).to eq nil
    end

    it 'must have a valid city' do
      a = { street: '1234 Street Ln', city: '12345', state: 'CO', zipcode: 80303 }
      trail.address = Address.create(a)
      expect(trail.address.id).to eq nil
      b = { street: '1234 Street Ln', city: 'abc D', state: 'CO', zipcode: 80303 }
      trail.address = Address.create(b)
      expect(trail.address.id).to eq nil
      c = { street: '1234 Street Ln', city: 'ABC', state: 'CO', zipcode: 80303 }
      trail.address = Address.create(c)
      expect(trail.address.id).to eq nil

    end

    it 'must have a valid state' do
      a = { street: '1234 Street Ln', city: 'Boulder', state: 'co', zipcode: 80303 }
      trail.address = Address.create(a)
      expect(trail.address.id).to eq nil

      b = { street: '1234 Street Ln', city: 'Boulder', state: 'NOPE', zipcode: 80303 }
      trail.address = Address.create(b)
      expect(trail.address.id).to eq nil

      c = { street: '1234 Street Ln', city: 'Boulder', state: '90', zipcode: 80303 }
      trail.address = Address.create(c)
      expect(trail.address.id).to eq nil
    end

    it 'must have a valid zipcode' do
      a = { street: '1234 Street Ln', city: 'Boulder', state: 'CO', zipcode: 'string' }
      trail.address = Address.create(a)
      expect(trail.address.id).to eq nil
      b = { street: '1234 Street Ln', city: 'Boulder', state: 'CO', zipcode: 123 }
      trail.address = Address.create(b)
      expect(trail.address.id).to eq nil
      c = { street: '1234 Street Ln', city: 'Boulder', state: 'CO', zipcode: 123456 }
      trail.address = Address.create(c)
      expect(trail.address.id).to eq nil
    end
  end

  context 'on publication' do
    it 'can be created' do
      a = User.first.trails.build(name: 'Test Trail', description: 'Test Description', open_at: '10:30', close_at: '22:30')
      a.address = Address.create(street: '1234 Street Ln', city: 'Boulder County', state: 'CO', zipcode: 80303)
      a.save
      expect(a.address.id).to_not eq nil
    end
  end
end
