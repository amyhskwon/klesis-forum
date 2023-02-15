# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Membership.destroy_all
InterestGroup.destroy_all
Event.destroy_all
Rsvp.destroy_all
Message.destroy_all

puts "Seeding users...🌱👤"
u1 = User.create(first_name: 'Amy', last_name: 'Kwon', email: 'amy.kwon@gpmail.org', password: '12345', photo: 'https://avatars.githubusercontent.com/u/115328047?v=4', grad_year: 2020, phone_number: '415-470-0926', admin: true, role: 2)
u2 = User.create(first_name: 'Philip', last_name: 'Sun', email: 'philip.sun@gpmail.org', password: 'abcde', photo: 'https://media.licdn.com/dms/image/C5603AQGnn7f3UYIBmw/profile-displayphoto-shrink_800_800/0/1562002182041?e=1681344000&v=beta&t=h56MA8zxdBOPlsMd6PIOnnfsCOixXjlgCjOblyFWnKs', grad_year: 2019, phone_number: '925-719-0388', admin: true, role: 2)
u3 = User.create(first_name: 'Harry', last_name: 'Potter', email: 'urawizardharry@gmail.com', password: 'stupefy', photo: 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg', grad_year: 2023, phone_number: '925-123-4567', admin: false, role: 0)
u4 = User.create(first_name: 'Luke', last_name: 'Skywalker', email: 'lukes@hotmail.com', password: 'yoda', photo: 'https://www.toplessrobot.com/wp-content/uploads/2008/10/Episode_4_Luke_Skywalker_1.jpg', grad_year: 2024, phone_number: '626-879-2847', admin: false, role: 1)
u5 = User.create(first_name: 'Frodo', last_name: 'Baggins', email: 'iloveshire@gmail.com', password: 'precious', photo: 'https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest?cb=20221006065757', grad_year: 2026, phone_number: '510-398-4629', admin: false, role: 0)

puts "Seeding interest groups...🌱🏀"
i1 = InterestGroup.create(name: 'Basketball', description: 'Come hoop with us and create an IM team!', location: 'RSF Berkeley', weekday: 3, time: '7PM', is_weekly: true, moderator: 2)
i2 = InterestGroup.create(name: 'Baking', description: 'Do you love pastries? Baked goods? Join us weekly to bake!', location: '2239 Dwight Street, Berkeley', weekday: 2, time: '6:30PM', is_weekly: true, moderator: 4)
i3 = InterestGroup.create(name: 'C.S. Lewis Reading Club', description: 'Dive into the deep mind of C.S. Lewis - read and have discussions through some of his most famous books!', location: '1951 Cafe', weekday: 4, time: '4PM', is_weekly: true, moderator: 5)
i4 = InterestGroup.create(name: 'Quidditch', description: 'Score or capture the snitch! Join our quidditch IM team!', location: 'California Memorial Stadium', weekday: 5, time: '7PM', is_weekly: false, moderator: 3)

puts "Seeding memberships...🌱👑"
m1 = Membership.create(user_id: u1.id, interest_group_id: i3.id)
m2 = Membership.create(user_id: u2.id, interest_group_id: i1.id)
m3 = Membership.create(user_id: u2.id, interest_group_id: i2.id)
m4 = Membership.create(user_id: u3.id, interest_group_id: i2.id)
m5 = Membership.create(user_id: u4.id, interest_group_id: i1.id)
m6 = Membership.create(user_id: u4.id, interest_group_id: i3.id)
m7 = Membership.create(user_id: u5.id, interest_group_id: i3.id)
m8 = Membership.create(user_id: u5.id, interest_group_id: i2.id)
m9 = Membership.create(user_id: u3.id, interest_group_id: i4.id)
m10 = Membership.create(user_id: u1.id, interest_group_id: i4.id)
m11 = Membership.create(user_id: u2.id, interest_group_id: i4.id)

puts "Seeding events...🌱🗓"
e1 = Event.create(name: 'TFN', description: 'The Friday Night', location: '2518 Durant Ave, Berkeley', weekday: 4, time: '6:30PM', is_weekly: true)
e2 = Event.create(name: 'Sierra Lodge Trip', description: 'Weekend getaway to our beloved Sierra Lodge!', location: 'Sierra Lodge', weekday: 5, time: '1PM', is_weekly: true)
e3 = Event.create(name: 'Yosemite Trip', description: 'Freshmen getaway to Yosemite House for the weekend!', location: 'Yosemite House', weekday: 4, time: '5PM', is_weekly: false)
e4 = Event.create(name: 'Fishing Trip', description: 'Use your free Saturday to come fish with us!', location: 'Lake Merritt', weekday: 5, time: '8AM', is_weekly: false)
# e5 = Event.create(name: '', description: '', location: '', weekday: , end_date: '', is_weekly: )
# e6 = Event.create(name: '', description: '', location: '', weekday: , end_date: '', is_weekly: )
# e7 = Event.create(name: '', description: '', location: '', weekday: , end_date: '', is_weekly: )

puts "Seeding rsvps...🌱✅"
r1 = Rsvp.create(user_id: u3.id, event_id: e1.id)
r2 = Rsvp.create(user_id: u3.id, event_id: e3.id)
r3 = Rsvp.create(user_id: u2.id, event_id: e4.id)
r4 = Rsvp.create(user_id: u4.id, event_id: e2.id)
r5 = Rsvp.create(user_id: u1.id, event_id: e1.id)


puts "Seeding messages...🌱💬"
c1 = Message.create(user_id: u2.id, interest_group_id: i1.id, content: 'We will meet at HB this week! See you there!', time: '14:00')
# c2 = Message.create(user_id: , interest_group_id: , content: '', time: '')
# c3 = Message.create(user_id: , interest_group_id: , content: '', time: '')
# c4 = Message.create(user_id: , interest_group_id: , content: '', time: '')
# c5 = Message.create(user_id: , interest_group_id: , content: '', time: '')
# c6 = Message.create(user_id: , interest_group_id: , content: '', time: '')
