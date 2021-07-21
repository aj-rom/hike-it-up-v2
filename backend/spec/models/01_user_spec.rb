require 'rails_helper'

RSpec.describe User, type: :model do
  context 'before publication' do
    it 'cannot have an invalid email' do
      pass = 'password'
      a = User.create(email: nil, password: pass, password_confirmation: pass)
      b = User.create(email: '', password: pass, password_confirmation: pass)
      c = User.create(email: 'badmail', password: pass, password_confirmation: pass)
      expect(a.id).to eq nil
      expect(b.id).to eq nil
      expect(c.id).to eq nil
    end

    it 'cannot have a missing password' do
      email = 'missing_pass@mail.com'
      a = User.create(email: email, password: '', password_confirmation: '')
      b = User.create(email: email, password: nil, password_confirmation: nil)

      expect(a.id).to eq nil
      expect(b.id).to eq nil
    end

    it 'must have matching passwords' do
      email = 'matching_pass@mail.com'
      a = User.create(email: email, password: 'password', password_confirmation: 'password!')
      expect(a.errors.full_messages.length).to eq(1)
      expect(a.id).to eq nil
    end

    it 'must have a password length of at least 6' do
      email = 'pass_length@mail.com'
      a = User.create(email: email, password: '12345', password_confirmation: '12345')

      expect(a.errors.full_messages.length).to eq 1
      expect(a.id).to eq nil

      b = User.create(email: email, password: '123456', password_confirmation: '123456')

      expect(b.id).to_not eq nil
    end

  end

  context 'on publication' do
    it 'can be created with valid email and password' do
      user = {
        email: 'valid_email@mail.com',
        password: 'password',
        password_confirmation: 'password'
      }
      a = User.create(user)

      expect(a.id).to_not eq nil
    end
  end
end
