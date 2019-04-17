'use strict'

const db = require('../server/db')
const Product = require('../server/db/models/products/product.js');

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const products = await Promise.all([
    //     Product.create({email: 'cody@email.com', password: '123'}),
    //     Product.create({email: 'murphy@email.com', password: '123'})


    Product.create(
      {
        name: 'Cloud One -- Everest Air',
        description: 'Try this woozy concotion of thin air gathered from the summit of Mount Everest at 8850 metres, the highest peak on Planet Earth. There is approximately 33% of the oxygen that is available at sea level. That\'s like climbing up stairs and only getting 1 out of every 3 breathes-- makes for an mind-altering experience! ',
        scent: 'A base note of the smell around the time when rain falls on dry, stony ground intermingled with top notes of the musky scent of yak and fresh snowfall.',
        elevation: '8850 meters',
        quality: 'Pure',
        price: '$6,478.00',
        benefits: 'Intoxication',
        molecularComposition: '78.29% N₂ + 15.33% O₂ + 5.92% Ar + 1.04% CO + 2.02 He + 1.01 % CH₄ + 0.01% H₂O',
        quantity: 1,
        imageUrl: 1,
      }),
    Product.create(
      {
        name: 'Cloud Two -- Dead Sea',
        description: 'This parcel of air hails from the lowest exposed land on Earth, located at the Dead Sea shore. The low elevation of -413 meters creates a highly oxygenated parcel of air.',
        scent: 'A strikingly salty scent featuring base notes of halite with top and middle notes of dried balsam and fresh sycamore fig.',
        elevation: '-413 meters',
        quality: 'Minimal contamination',
        price: '$1,390.00',
        benefits: 'Rejuvination',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Three -- New York City',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Four -- The Amazon Rainforest',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Five -- Antarctica',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Six -- Death Valley',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Seven -- Antarctica',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Eight -- Antarctica',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      }),
    Product.create(
      {
        name: 'Cloud Nine -- Your Choice!',
        description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
        scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
        elevation: '-413 meters',
        quality: 'Heavily polluted',
        price: '$718.00',
        benefits: 'Novelty',
        molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
        quantity: 1,
        imageUrl: 'TBA',
      })







  ])

  console.log(`seeded ${products.length} Products`)
  console.log(`seeded successfully`)
}

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed



// const {db} = require('../server/db.js')
// const { green, red } = require('chalk')



// const Product = require('./server/db/models/Product');



// const product = [
// {
//   name: 'Cloud One -- Everest Air',
//   description: 'Try this woozy concotion of thin air gathered from the summit of Mount Everest at 8850 metres, the highest peak on Planet Earth. There is approximately 33% of the oxygen that is available at sea level. That\'s like climbing up stairs and only getting 1 out of every 3 breathes-- makes for an mind-altering experience! ',
//   scent: 'A base note of the smell around the time when rain falls on dry, stony ground intermingled with top notes of the musky scent of yak and fresh snowfall.',
//   elevation: '8850 meters',
//   quality: 'Pure',
//   price: '$6,478.00',
//   benefits: 'Intoxication',
//   molecularComposition: '78.29% N₂ + 15.33% O₂ + 5.92% Ar + 1.04% CO + 2.02 He + 1.01 % CH₄ + 0.01% H₂O',
//   quantity: 1,
//   imageUrl: 1,
// },
// {
//   name: 'Cloud Two -- Dead Sea',
//   description: 'This parcel of air hails from the lowest exposed land on Earth, located at the Dead Sea shore. The low elevation of -413 meters creates a highly oxygenated parcel of air.',
//   scent: 'A strikingly salty scent featuring base notes of halite with top and middle notes of dried balsam and fresh sycamore fig.',
//   elevation: '-413 meters',
//   quality: 'Minimal contamination',
//   price: '$1,390.00',
//   benefits: 'Rejuvination',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Three -- New York City',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Four -- The Amazon Rainforest',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Five -- Antarctica',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Six -- Death Valley',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Seven -- Antarctica',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Eight -- Antarctica',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// },
// {
//   name: 'Cloud Nine -- Your Choice!',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-413 meters',
//   quality: 'Heavily polluted',
//   price: '$718.00',
//   benefits: 'Novelty',
//   molecularComposition: '60.12% N₂ + 43.31% O₂ + 1.44% Ar + 1.14% CO + 1.02 He + 1.01 % CH₄ + 0.06% H₂O',
//   quantity: 1,
//   imageUrl: 'TBA',
// }
// ]


// const seedProduct = [
//   {
//     name: 'Icewind Dale',
//     imageUrl: 'https://i.imgur.com/FYv2kXv.jpg',
//     address: '01 Ten Towns, Frozenfar, Northwest Faerûn, Faerûn, Toril, Prime Material Plane, Realmspace, D&D Universe',
//     description: 'Icewind Dale was an arctic region, along the northernmost part of the Sword Coast. Icewind Dale was an icy tundra and the northernmost explored area of Faerûn. Its only permanent settlements were known as Ten-Towns, a confederation of a number of minor settlements cooperating with each other. A chill place to code.',
//     students: [
//       {
//         firstName: 'Renée',
//         lastName: 'Gudd',
//         email: 'dgudd5@walmart.com',
//         imageUrl: 'https://i.imgur.com/M8G8HXF.png',
//         gpa: 3.0,
//         description: 'sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur rcampusIdiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravcampusIda sem'
//       }, {
//         firstName: 'Adélaïde',
//         lastName: 'Morrice',
//         email: 'tmorrice6@fc2.com',
//         imageUrl: 'https://i.imgur.com/E8BkffM.png',
//         gpa: 3.0,
//         description: 'felis donec semper sapien a libero nam dui proin leo odio porttitor campusId consequat in consequat ut'
//       }, {
//         firstName: 'Athén',
//         lastName: 'Anthonies',
//         email: 'ganthonies7@globo.com',
//         imageUrl: 'https://i.imgur.com/jWGHjmn.png',
//         gpa: 3.7,
//         description: 'luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat'
//       }
//     ]
//   },
//   {
//     name: 'Waterdeep',
//     imageUrl: 'https://i.imgur.com/irAf53h.jpg',
//     address: '44 Castle Ward, Sword Coast North, Northwest Faerûn, Faerûn, Toril, Prime Material Plane, Realmspace, D&D Universe',
//     description: 'Waterdeep, also known as the City of Splendors or the Crown of the North, was the most important and influential city in the North and perhaps in all Faerûn. For this reason it was considered part of the Western Heartlands of the Realms, even though it lay 150 miles north of Daggerford on the shores of the Sword Coast. A relaxing place to code. ',
//     students: [
//       {
//         firstName: 'Dù',
//         lastName: 'Olligan',
//         email: 'rolligan3@epa.gov',
//         imageUrl: 'https://i.imgur.com/4tz1Xlh.png',
//         gpa: 3.2,
//         description: 'neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa',
//       },
//       {
//         firstName: 'Méline',
//         lastName: 'Swainsbury',
//         email: 'dswainsbury4@microsoft.com',
//         imageUrl: 'https://i.imgur.com/hwXqfwl.png',
//         gpa: 1.2,
//         description: 'ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque',
//       },
//       {
//         firstName: 'Délfin',
//         lastName: 'Ainsfurjsa',
//         email: 'dAinsfurjsay4@gmail.com',
//         imageUrl: 'https://i.imgur.com/6ZBAZxU.png',
//         gpa: 2.2,
//         description: 'liat erat quisque eeleifend pede libeer sapien a libero nam dui proin leo odio porsellus in felus pellentesque',
//       }
//     ]
//   },
//   {
//     name: 'Sildëyuir ',
//     imageUrl: 'https://i.imgur.com/dElkwFT.jpg',
//     address: '00 Night Realm, The Feywild, Realmspace, D&D Universe',
//     description: 'Sildëyuir was a region of the Feywild conterminous with the Yuirwood in Faerûn, perhaps two to three hundred miles from end to end. It was the home of the reclusive star, or mithral, elves, who constructed the realm nearly two thousand years ago[as of when?] by breaking it off from the Feywild and turning it into a demiplane of finite size. A cool place to code.',
//     students: [
//       {
//         firstName: 'Liśa',
//         lastName: 'Jakubczyk',
//         email: 'lj0@google.com.pl',
//         imageUrl: 'https://i.imgur.com/52CrnPg.png',
//         gpa: 4.0,
//         description: 'The pinnacle of astral-academia, and the first student in space. After working tirelessly as a student at GH@FSA, Lisa went on to continue her education in space. She also went on to rule a small empire of space rats on the galactic outskirts.',
//       }, {
//         firstName: 'Mills',
//         lastName: 'Wébster',
//         email: 'mweb@sbwire.com',
//         imageUrl: 'https://i.imgur.com/9PRx9Ft.png',
//         gpa: 4.0,
//         description: 'Big stinkin nerdo suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur',
//       }, {
//         firstName: 'Réjane',
//         lastName: 'Wybern',
//         email: 'twybern1@sbwire.com',
//         imageUrl: 'https://i.imgur.com/j3DGop4.png',
//         gpa: 1.3,
//         description: 'suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur',
//       }, {
//         firstName: 'Félicie',
//         lastName: 'Bullivant',
//         email: 'bbullivant2@usgs.gov',
//         imageUrl: 'https://i.imgur.com/14B13Nc.png',
//         gpa: 3.7,
//         description: 'mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tinccampusIdunt eu felis fusce posuere felis',
//       }
//     ]
//   },
//   {
//     name: 'The Underdark',
//     imageUrl: 'https://i.imgur.com/BSlxkRy.jpg',
//     address: '66 Maerimydra, The Deep Wastes,The Middledark,The Underdark, Faerûn, Toril, Prime Material Plane, Realmspace, D&D Universe',
//     description: 'The Underdark is a vast subterranean realm inhabited by drow, mind flayers, aboleth, and other strange, sinister creatures. It is a place where few humans go and from where even fewer return. It extends well past the dungeons made by surface dwellers, encompassing myriad caverns, tunnels and complexes. A great place to learn coding.',
//     students: [
//       {
//         firstName: 'Simplifiés',
//         lastName: 'Readett',
//         email: 'vreadett8@123-reg.co.uk',
//         imageUrl: 'https://i.imgur.com/qyYPSKC.png',
//         gpa: 1.7,
//         description: 'eu massa donec dapibus duis at velit eu est congue',
//         campusId: 4
//       }, {
//         firstName: 'Maéna',
//         lastName: 'McClymond',
//         email: 'rmcclymond9@hhs.gov',
//         imageUrl: 'https://i.imgur.com/SB32Bt2.png',
//         gpa: 2.8,
//         description: 'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus campusId sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur',
//         campusId: 4
//       }
//     ]
//   }
// ];

// async function seed() {
//   try {
//     console.log('Seeding the database...')
//     await db.sync({ force: true })

//     await Product.create(seedProducts[0])
//     await Product.create(seedProducts[1])
//     await Product.create(seedProducts[2])
//     await Product.create(seedProducts[3])

//     // await Product.create(seedProducts[1], {
//     //   include: [Student]
//     // })

//     // await Product.create(seedProducts[2], {
//     //   include: [Student]
//     // })

//     // await Product.create(seedProducts[3], {
//     //   include: [Student]
//     // })

//     await db.close()
//     console.log(green('Seeding success!'))
//   } catch (err) {
//     console.error(red('Oh noes! Something went wrong!'))
//     console.error(err)
//   }
// }
// seed()


//   for (product of products) {
//     var newProduct = new Product(product);
//     newProduct.save();
//   }

//   // seeded!
//   res.send('Database seeded!');
// }



async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
