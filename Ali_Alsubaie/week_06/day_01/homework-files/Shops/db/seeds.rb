
Shop.destroy_all

Shop.create([
  {
    name: "Jarir",
    description: "Best Buy wanna be",
    location: "East of Riyadh",
  },
  {
    name: "Eddi",
    description: "Jarir wanna be",
    location: "South-East of Riyadh",
  },
  {
    name: "Extra",
    description: "Cheapest of all competitors",
    location: "Middle of Riyadh",
  },
])

Product.destroy_all

Product.create([
  {
    name: "Macbook Pro",
    brand: "Apple",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 12500.50,
    shop_id: 1,
  },
  {
    name: "Surface Book",
    brand: "Microsoft",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 7695.50,
    shop_id: 1,
  },
  {
    name: "Macbook Pro",
    brand: "Apple",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 11000.50,
    shop_id: 2,
  },
  {
    name: "15' Asus Laptop",
    brand: "Asus",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 8000,
    shop_id: 2,
  },
  {
    name: "Macbook Pro",
    brand: "Apple",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 10000,
    shop_id: 3,
  },
  {
    name: "Surface Book",
    brand: "Microsoft",
    description: "16 GB RAM, 256 GB SSD, Intel core i7",
    price: 6999.50,
    shop_id: 3,
  },
  {
    name: "Mackbook Air",
    brand: "Apple",
    description: "4 GB RAM, 128 GB SSD, Intel core i7",
    price: 7500.50,
    shop_id: 3,
  },
])
