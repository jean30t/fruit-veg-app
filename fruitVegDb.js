const fruitVegDb = [
  { name: "Apple", dimensions: { length: 8, width: 8, height: 8 } },
  { name: "Banana", dimensions: { length: 20, width: 4, height: 4 } },
  { name: "Carrot", dimensions: { length: 18, width: 3, height: 3 } },
  { name: "Tomato", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Potato", dimensions: { length: 10, width: 7, height: 7 } },
  { name: "Onion", dimensions: { length: 7, width: 7, height: 6 } },
  { name: "Cucumber", dimensions: { length: 25, width: 5, height: 5 } },
  { name: "Lettuce", dimensions: { length: 20, width: 20, height: 15 } },
  { name: "Orange", dimensions: { length: 7, width: 7, height: 7 } },
  { name: "Pineapple", dimensions: { length: 30, width: 15, height: 15 } },
  { name: "Strawberry", dimensions: { length: 4, width: 3, height: 3 } },
  { name: "Blueberry", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Grape", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Watermelon", dimensions: { length: 40, width: 25, height: 25 } },
  { name: "Peach", dimensions: { length: 7, width: 7, height: 7 } },
  { name: "Pear", dimensions: { length: 8, width: 6, height: 6 } },
  { name: "Plum", dimensions: { length: 5, width: 4, height: 4 } },
  { name: "Kiwi", dimensions: { length: 6, width: 5, height: 5 } },
  { name: "Avocado", dimensions: { length: 10, width: 7, height: 7 } },
  { name: "Mango", dimensions: { length: 12, width: 8, height: 7 } },
  { name: "Cabbage", dimensions: { length: 25, width: 25, height: 20 } },
  { name: "Broccoli", dimensions: { length: 15, width: 15, height: 12 } },
  { name: "Cauliflower", dimensions: { length: 20, width: 20, height: 15 } },
  { name: "Zucchini", dimensions: { length: 20, width: 5, height: 5 } },
  { name: "Eggplant", dimensions: { length: 18, width: 7, height: 7 } },
  { name: "Bell Pepper", dimensions: { length: 8, width: 8, height: 8 } },
  { name: "Chili Pepper", dimensions: { length: 10, width: 2, height: 2 } },
  { name: "Spinach", dimensions: { length: 12, width: 8, height: 2 } },
  { name: "Kale", dimensions: { length: 15, width: 10, height: 3 } },
  { name: "Celery", dimensions: { length: 30, width: 5, height: 5 } },
  { name: "Radish", dimensions: { length: 4, width: 4, height: 4 } },
  { name: "Turnip", dimensions: { length: 7, width: 7, height: 6 } },
  { name: "Beetroot", dimensions: { length: 7, width: 7, height: 6 } },
  { name: "Sweet Potato", dimensions: { length: 15, width: 6, height: 6 } },
  { name: "Pumpkin", dimensions: { length: 35, width: 30, height: 25 } },
  { name: "Corn", dimensions: { length: 20, width: 5, height: 5 } },
  { name: "Green Beans", dimensions: { length: 12, width: 1, height: 1 } },
  { name: "Peas", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Artichoke", dimensions: { length: 10, width: 10, height: 8 } },
  { name: "Asparagus", dimensions: { length: 20, width: 1, height: 1 } },
  { name: "Leek", dimensions: { length: 30, width: 5, height: 5 } },
  { name: "Garlic", dimensions: { length: 5, width: 5, height: 4 } },
  { name: "Ginger", dimensions: { length: 7, width: 3, height: 3 } },
  { name: "Lime", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Lemon", dimensions: { length: 7, width: 6, height: 6 } },
  { name: "Cherry", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Fig", dimensions: { length: 5, width: 4, height: 4 } },
  { name: "Date", dimensions: { length: 4, width: 2, height: 2 } },
  { name: "Passionfruit", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Guava", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Papaya", dimensions: { length: 25, width: 10, height: 10 } },
  { name: "Lychee", dimensions: { length: 3, width: 3, height: 3 } },
  { name: "Raspberry", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Blackberry", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Mulberry", dimensions: { length: 2, width: 1, height: 1 } },
  { name: "Cranberry", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Starfruit", dimensions: { length: 10, width: 5, height: 5 } },
  { name: "Jackfruit", dimensions: { length: 50, width: 30, height: 25 } },
  { name: "Durian", dimensions: { length: 30, width: 25, height: 25 } },
  { name: "Tamarind", dimensions: { length: 15, width: 3, height: 3 } },
  { name: "Persimmon", dimensions: { length: 7, width: 7, height: 7 } },
  { name: "Pomegranate", dimensions: { length: 9, width: 9, height: 9 } },
  { name: "Sapodilla", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Breadfruit", dimensions: { length: 25, width: 25, height: 20 } },
  { name: "Longan", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Gooseberry", dimensions: { length: 2, width: 2, height: 2 } },
  { name: "Nectarine", dimensions: { length: 7, width: 7, height: 7 } },
  { name: "Olive", dimensions: { length: 2, width: 1, height: 1 } },
  { name: "Clementine", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Mandarin", dimensions: { length: 6, width: 6, height: 6 } },
  { name: "Plantain", dimensions: { length: 25, width: 6, height: 6 } },
  { name: "Endive", dimensions: { length: 15, width: 8, height: 6 } },
  { name: "Fennel", dimensions: { length: 15, width: 10, height: 10 } },
  { name: "Chard", dimensions: { length: 20, width: 10, height: 4 } },
  { name: "Parsnip", dimensions: { length: 20, width: 5, height: 5 } },
  { name: "Rutabaga", dimensions: { length: 10, width: 10, height: 8 } },
  { name: "Yam", dimensions: { length: 20, width: 6, height: 6 } },
  { name: "Taro", dimensions: { length: 10, width: 7, height: 7 } },
  { name: "Scallion", dimensions: { length: 25, width: 2, height: 2 } },
  { name: "Mustard Greens", dimensions: { length: 15, width: 10, height: 4 } },
  { name: "Collard Greens", dimensions: { length: 20, width: 10, height: 4 } },
  { name: "Okra", dimensions: { length: 10, width: 2, height: 2 } },
  { name: "Snow Peas", dimensions: { length: 8, width: 2, height: 1 } },
  { name: "Sugar Snap Peas", dimensions: { length: 8, width: 2, height: 2 } },
  { name: "Horseradish", dimensions: { length: 20, width: 5, height: 5 } },
  { name: "Wasabi", dimensions: { length: 10, width: 4, height: 4 } },
  { name: "Bok Choy", dimensions: { length: 20, width: 10, height: 8 } },
  { name: "Daikon", dimensions: { length: 30, width: 6, height: 6 } },
  { name: "Watercress", dimensions: { length: 10, width: 5, height: 3 } },
  { name: "Chayote", dimensions: { length: 10, width: 7, height: 7 } },
  { name: "Kohlrabi", dimensions: { length: 8, width: 8, height: 7 } },
  { name: "Jicama", dimensions: { length: 12, width: 12, height: 10 } },
  { name: "Sunchoke", dimensions: { length: 10, width: 6, height: 6 } },
  { name: "Seaweed", dimensions: { length: 15, width: 10, height: 1 } },
  { name: "Nopal (Cactus)", dimensions: { length: 20, width: 10, height: 3 } },
  { name: "Lotus Root", dimensions: { length: 25, width: 7, height: 7 } },
  { name: "Turmeric Root", dimensions: { length: 7, width: 2, height: 2 } },
  { name: "Bamboo Shoot", dimensions: { length: 30, width: 6, height: 6 } },
  { name: "Acorn Squash", dimensions: { length: 15, width: 15, height: 12 } },
  { name: "Butternut Squash", dimensions: { length: 25, width: 12, height: 12 } },
  { name: "Spaghetti Squash", dimensions: { length: 25, width: 15, height: 15 } },
  { name: "Ziziphus (Jujube)", dimensions: { length: 3, width: 3, height: 3 } },
  { name: "Ackee", dimensions: { length: 10, width: 7, height: 7 } },
  { name: "Bilberry", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Elderberry", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Huckleberry", dimensions: { length: 1, width: 1, height: 1 } },
  { name: "Salal Berry", dimensions: { length: 1, width: 1, height: 1 } }
];
