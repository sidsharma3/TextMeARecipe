5.times do 
    User.create({
        name: Faker::Superhero.name,
        number: Faker::Number.number(digits: 10),
        body: Faker::Lorem.sentence
    })
end