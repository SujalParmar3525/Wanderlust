const sampleListing = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and morning walks on the beach.",
    image: {
      filename: "listingimage",
      url: "https://ca-times.brightspotcdn.com/dims4/default/6b165bc/2147483647/strip/true/crop/2048x1170+0+0/resize/1200x686!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3b%2F2f%2F341a30c84da398dd6685d44b524a%2Fimage-06.jpg",
    },
    price: 3000,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "A peaceful retreat in the heart of the mountains. Perfect for hiking and enjoying nature.",
    image: {
      filename: "listingimage",
      url: "https://images.mansionglobal.com/im-230309?width=1280&size=1.77777778",
    },
    price: 1800,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this sleek and stylish apartment close to everything.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKEDNqmFq-N2uxqK-7aJ9EV2ccj-KaYWUZ_POAPXVp9e7LnE9J_GRt7X4oLuQwakqbUk&usqp=CAU",
    },
    price: 2200,
    location: "New York",
    country: "United States",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Indulge in a luxurious villa complete with a private pool and tropical garden.",
    image: {
      filename: "listingimage",
      url: "https://images.luxuryescapes.com/q_auto:good/i3sj66suocxbp1f7w6d",
    },
    price: 4500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Unplug in this cozy farmhouse surrounded by lush fields and friendly farm animals.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6COjjKA1y7NzWx-LKWAYZb1-HQzyhNfns6aa2im0WWQNvCYHLanG9hzlitojwsFwG4R4&usqp=CAU",
    },
    price: 1500,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Lakefront Cottage",
    description:
      "Serene lake views and cozy evenings by the fireplace await at this lakefront gem.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs28npynJkId6NPZbvC9K8jRIhQ8AmmD3wvbQKo1mgVinTAxWuuKuCriKV9oYUXulft8M&usqp=CAU",
    },
    price: 2100,
    location: "Ontario",
    country: "Canada",
  },
  {
    title: "Desert Dome Retreat",
    description:
      "Unique dome house experience in the desert with panoramic starry skies.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKsPAEyrcaSygbJt5LmKQv2GR99jNi-7QIQNCE0wTXKm6_7rOQtrTAJms9Kca1t17VM8&usqp=CAU",
    },
    price: 1700,
    location: "Joshua Tree",
    country: "United States",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this authentic medieval castle with antique decor.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0_i-LAMguk_bA1xVJQSQOMrIeCGRq2YrABZsOetI1ZEaGc_1NLbNZpxmEzSaeJ3a6rI&usqp=CAU",
    },
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Charming Cottage in Forest",
    description:
      "Reconnect with nature in a secluded forest cottage filled with charm.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=612x612&w=0&k=20&c=C-peb5w4MRU4rcl0M45-zX6NMUXPwtmIDPWRbuJ4Quw=",
    },
    price: 1300,
    location: "Black Forest",
    country: "Germany",
  },
  {
    title: "Treehouse Adventure",
    description:
      "Sleep among the treetops in this cozy and adventurous treehouse stay.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/81d412c4-e692-4673-9fcb-cea00502bae4.jpg?im_w=720",
    },
    price: 1600,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Seaside Bungalow",
    description: "Relax to the sound of waves in this breezy seaside bungalow.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwVd5F1FIXpIqZHYTtMK0kvtY2OeTKBgy05cfJijgSnrLhXbxDKEHxImNSefliVxyrN4&usqp=CAU",
    },
    price: 2700,
    location: "Goa",
    country: "India",
  },
  {
    title: "Icelandic Cabin with Northern Lights",
    description:
      "Watch the aurora from your warm wooden cabin surrounded by icy landscapes.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL9Egu_t_SQBcGte0KoUqzgP5t7h6ICBz01_fkaB_2fWsLwVPoThat66lA-ABmcnvk54&usqp=CAU",
    },
    price: 3200,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Japanese Ryokan",
    description:
      "Traditional tatami mats, hot springs, and tea ceremonies await you here.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b7/a8/e5/rikyu.jpg?w=1200&h=-1&s=1",
    },
    price: 2400,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Ski Chalet",
    description:
      "Hit the slopes by day and warm up by the fire in this mountain chalet.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG8SDFG85_iWF4IXgQ5PyZGVdg9SBkvsjYdnhuLAkzVyX30nClB6CHzLLm_jb4y7RZik&usqp=CAU",
    },
    price: 4000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Bohemian Loft",
    description:
      "Artistically decorated loft with an eclectic boho vibe and rooftop views.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-469710/original/35658e04-5cd1-45df-84c6-ac695b903692.jpeg?im_w=720",
    },
    price: 1900,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Underwater Hotel Room",
    description:
      "Sleep surrounded by marine life in this one-of-a-kind underwater room.",
    image: {
      filename: "listingimage",
      url: "https://media.cnn.com/api/v1/images/stellar/prod/180418163431-conrad-maldives-rangali-island-underwater-villa-cmri-usv-bedroom.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
    },
    price: 8000,
    location: "Malé",
    country: "Maldives",
  },
  {
    title: "Hobbit House",
    description:
      "Live like a hobbit in this whimsical earth-sheltered home in the hills.",
    image: {
      filename: "listingimage",
      url: "https://www.pandotrip.com/wp-content/uploads/2023/10/Hobbit-Village-Hobbiton-New-Zealand.jpg",
    },
    price: 2200,
    location: "Matamata",
    country: "New Zealand",
  },
  {
    title: "Floating Villa",
    description:
      "Experience life on water in a floating home with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d2-NVLAPUybmn5oTYy2M0QRowjRPGnh377dJwNxud52Coj1sR_E0KCrv16pT9COkKYk&usqp=CAU",
    },
    price: 3500,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Art Deco Apartment",
    description:
      "Step back in time in this stylish art deco apartment filled with history.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/596052834.jpg?k=25ba209e5f96fc1fc90867c140ba5f0aa7c561d920024b6a0bc275f53e75b2a7&o=&hp=1",
    },
    price: 2000,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Safari Tent",
    description:
      "Sleep in the wild with comfort in this luxury safari tent experience.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/69/72/c2/nairobi-tented-camp.jpg?w=500&h=-1&s=1",
    },
    price: 3000,
    location: "Nairobi",
    country: "Kenya",
  },
  {
    title: "Alpine Chalet",
    description:
      "Nestled in snowy peaks, this alpine chalet is a winter dream getaway.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN55Jpyis1kRejlYIMQRe5li_Fl70eJAUVz7ZaUyWccki-KP_QbokcQtszH5rNrqvGH3o&usqp=CAU",
    },
    price: 3700,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Tiny House Retreat",
    description:
      "Minimalist tiny house surrounded by woods, ideal for peaceful solitude.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iNs2oXjrBqPPNkG9K2qw6LNLdRG-MqxwR1Jn-43QD2p0ajePYdKmDAsfs0XzfXetdjI&usqp=CAU",
    },
    price: 1100,
    location: "Vermont",
    country: "United States",
  },
  {
    title: "Santorini Cliff House",
    description:
      "White-washed house with a stunning caldera view in iconic Santorini.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--GxWBo83_-HKIIgHxw18TP7wx0Q2PNhK1CLevnKbYGCQdNMUU762BuIHV1z67B2wybU&usqp=CAU",
    },
    price: 3800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Jungle Eco-Lodge",
    description:
      "Eco-friendly jungle stay with wildlife all around and solar-powered amenities.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HIeAFDOSpwpIyJg9MAXicsxBf9TA6RsoKANl71yeCn-3eNTGcGtW_fwT2oq8VIlZQ6g&usqp=CAU",
    },
    price: 2600,
    location: "Amazon",
    country: "Brazil",
  },
  {
    title: "Ice Hotel Room",
    description:
      "Sleep in a room made of ice with thermal sleeping bags and hot cocoa.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcPOMpuOjpkq2i9dTaEtDc7j5f7gJ6E-CkuJ--tpYYe-5ljJP6UKYmbv7UHuAFHI-5f0&usqp=CAU",
    },
    price: 3100,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Boathouse on the River",
    description:
      "Rustic boathouse stay right on the river, with kayaking and fishing nearby.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGWR0x6SvkgF-0Com_-iaMSGgd0jsFgNbMci4rD8edYvZUoo2De1teLGxTVGgAYZjg4E&usqp=CAU",
    },
    price: 1900,
    location: "Cologne",
    country: "Germany",
  },
  {
    title: "Historical Mansion",
    description:
      "Live in history in a grand mansion with vintage furnishings and gardens.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Aj3Za-PbmAtFCXg6cdgLWSUj7q0Q5wgh9UlKFtwd_-vXE4W9-7yvAya_b2Go11Smkh8&usqp=CAU",
    },
    price: 4200,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Island Hut",
    description:
      "Simple and peaceful beach hut perfect for disconnecting from the world.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeiG7ED9-pqD3DBKHqLGJShDup7rIfNR-8vs3XRs1dKImKi4z3mbxv_bW59AhRh-yE2Q&usqp=CAU",
    },
    price: 1400,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Modern Studio Flat",
    description:
      "Compact yet cozy studio in the heart of downtown with all amenities.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKJdW6udVSi9ZDNRtoQvQEoQHxOmT6Z6JnZeXtoiR3K76tswozeKiSlnyqFXOm7R87RE&usqp=CAU",
    },
    price: 1600,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Desert Cave House",
    description:
      "Live underground in this uniquely carved sandstone cave home.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216951713.jpg?k=3ab26ece0a2c4783cb3e79a727ab96497f0f357ac327e09942d4e212935620d5&o=&hp=1",
    },
    price: 2800,
    location: "Coober Pedy",
    country: "Australia",
  },
];

module.exports = { data: sampleListing };
