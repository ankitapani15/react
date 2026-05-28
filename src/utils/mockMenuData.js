export const mockMenuData = {
  data: {
    cards: [
      {
        card: {
          card: {
            text: "The Spice House",
            cloudinaryImageId: "test-image-id",
            cuisines: ["North Indian", "Indian", "Chinese"],
            costForTwo: "300 for two",
            deliveryTime: 30,
            rating: 4.5,
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      categoryId: "1",
                      title: "Appetizers",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "101",
                              name: "Samosa",
                              category: "Appetizers",
                              description:
                                "Crispy fried pastry with potato filling",
                              price: 8000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.5,
                                  ratingCount: 150,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "102",
                              name: "Pakora",
                              category: "Appetizers",
                              description: "Vegetable fritters",
                              price: 6000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.2,
                                  ratingCount: 120,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      categoryId: "2",
                      title: "Main Course",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "201",
                              name: "Butter Chicken",
                              category: "Main Course",
                              description:
                                "Tender chicken in creamy tomato sauce",
                              price: 35000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.7,
                                  ratingCount: 500,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "202",
                              name: "Paneer Tikka Masala",
                              category: "Main Course",
                              description: "Cottage cheese in spiced sauce",
                              price: 30000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.6,
                                  ratingCount: 400,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      categoryId: "3",
                      title: "Breads",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "301",
                              name: "Naan",
                              category: "Breads",
                              description: "Soft Indian bread",
                              price: 5000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.4,
                                  ratingCount: 300,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "302",
                              name: "Garlic Naan",
                              category: "Breads",
                              description: "Naan with garlic and butter",
                              price: 6000,
                              ratings: {
                                aggregatedRating: {
                                  rating: 4.5,
                                  ratingCount: 350,
                                },
                              },
                              cloudinaryImageId: "test-image",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};
