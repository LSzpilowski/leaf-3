export interface IMockProjects {
  id: number;
  title: string;
  location: string;
  district: string;
  author: string;
  dateSubmitted: string;
  category: string;
  excerpt: string;
  content: string;
  estimatedCost: string;
  benefits: string[];
}

export const mockProjects: IMockProjects[] = [
{
    id: 7639,
    title: "Renovation of Meadows Park Playground",
    location: "The Meadows, Edinburgh",
    district: "South-East",
    author: "Alice Robertson",
    dateSubmitted: "2024-02-05",
    category: "Playground Modernization",
    excerpt: "This project proposes a complete transformation of the aging children’s playground in The Meadows, including the installation of modern play equipment, new safety surfaces, and accessible features to ensure children of all abilities can enjoy the space.",
    content: "The Meadows Park Playground has been a staple for families in the South-East district, but it is now in need of significant upgrades. This project aims to completely overhaul the playground, replacing outdated structures with modern, safe, and inclusive equipment. In addition to new play structures, rubberized safety surfaces will be installed, and special care will be taken to add ramps and sensory play areas for children with disabilities. The renovation will make the playground a safer and more enjoyable place for all children and their families.",
    estimatedCost: "£150,000",
    benefits: ["Improved safety", "Accessibility for all children", "Modern play experience"]
  },
  {
    id: 7258,
    title: "Parkour and Street Workout Park at Holyrood Park",
    location: "Holyrood Park, Edinburgh",
    district: "South-East",
    author: "John Murray",
    dateSubmitted: "2024-01-25",
    category: "Recreational Facility",
    excerpt: "This project suggests the construction of a specialized parkour and street workout park in Holyrood Park, providing a space for people to practice free movement, bodyweight exercises, and calisthenics.",
    content: "The creation of a street workout and parkour area in Holyrood Park would cater to a growing demand for outdoor fitness spaces. This facility will include equipment for bodyweight training such as pull-up bars, parallel bars, and parkour structures. Parkour enthusiasts and street workout athletes will have a safe, dedicated space to practice, while casual park-goers will be introduced to new forms of exercise. The park will be free for public use and encourage fitness for all ages.",
    estimatedCost: "£80,000",
    benefits: ["Promotes physical fitness", "Free and accessible to all", "Encourages outdoor activities"]
  },
  {
    id: 8457,
    title: "Cycle Lane Expansion on Leith Walk",
    location: "Leith Walk, Edinburgh",
    district: "North-East",
    author: "Sarah MacDonald",
    dateSubmitted: "2024-02-10",
    category: "Road Infrastructure",
    excerpt: "The project aims to expand the existing cycle lanes along Leith Walk to ensure cyclist safety and promote eco-friendly modes of transport, reducing congestion and pollution in the area.",
    content: "Leith Walk is one of the busiest roads in Edinburgh and is currently used by both cyclists and motorists. However, the existing cycling infrastructure is insufficient, leading to safety concerns. This project proposes the expansion and improvement of cycle lanes to create safer, dedicated paths for cyclists, separating them from vehicular traffic. These changes will encourage more residents to use bicycles as their primary mode of transportation, leading to reduced traffic congestion, lower emissions, and a healthier population.",
    estimatedCost: "£120,000",
    benefits: ["Increased cyclist safety", "Promotes eco-friendly transportation", "Reduces traffic congestion"]
  },
  {
    id: 7510,
    title: "Community Garden in Inverleith Park",
    location: "Inverleith Park, Edinburgh",
    district: "North-West",
    author: "James Stewart",
    dateSubmitted: "2024-01-15",
    category: "Green Space Development",
    excerpt: "A proposal to create a community garden in Inverleith Park, where residents can grow their own vegetables and flowers, fostering a sense of community and sustainability.",
    content: "The proposed community garden in Inverleith Park will offer residents a place to grow their own vegetables, herbs, and flowers, creating a sustainable environment and fostering a sense of community. This garden will provide plots for individuals and families, as well as shared areas for workshops on sustainable gardening practices. The garden will also serve as a community meeting place, encouraging social interaction and promoting healthy eating through the cultivation of fresh, organic produce.",
    estimatedCost: "£45,000",
    benefits: ["Promotes sustainability", "Builds community", "Encourages healthy eating"]
  },
  {
    id: 8631,
    title: "Revitalization of Water of Leith Walkway",
    location: "Water of Leith Walkway, Edinburgh",
    district: "North-West",
    author: "Emily Campbell",
    dateSubmitted: "2024-02-01",
    category: "Pathway and Public Space Improvement",
    excerpt: "This project seeks to restore and enhance the Water of Leith Walkway, improving safety, accessibility, and overall user experience for pedestrians and cyclists.",
    content: "The Water of Leith Walkway is a cherished route for walkers, cyclists, and nature lovers. Over the years, certain parts of the path have deteriorated, making it less accessible and unsafe in places. This project aims to restore and enhance the walkway by resurfacing damaged areas, improving lighting, and adding new seating and signage. Accessibility will be improved with the installation of ramps and wider paths, ensuring the walkway is accessible to everyone, including those with mobility challenges. The revitalization will enhance the beauty of the area while making it safer and more enjoyable for all visitors.",
    estimatedCost: "£100,000",
    benefits: ["Increased safety", "Accessibility for all users", "Improved public space"]
  },
  {
    id: 6352,
    title: "Skatepark Construction in Sighthill",
    location: "Sighthill Park, Edinburgh",
    district: "South-West",
    author: "Michael Taylor",
    dateSubmitted: "2024-01-20",
    category: "Youth Facilities",
    excerpt: "The construction of a modern skatepark in Sighthill Park will provide a dedicated space for young people to practice skateboarding, rollerblading, and BMX riding in a safe environment.",
    content: "Sighthill is an area in need of youth-oriented public spaces. The construction of a modern skatepark in Sighthill Park will provide young people with a safe and engaging space to practice skateboarding, rollerblading, BMX riding, and scootering. The skatepark will be built with input from local skaters to ensure it meets their needs and includes features such as ramps, rails, and bowls for different skill levels. This facility will encourage outdoor activities, help young people stay active, and create a vibrant community hub.",
    estimatedCost: "£90,000",
    benefits: ["Engages local youth", "Encourages outdoor activities", "Safe space for recreational sports"]
  },
  {
    id: 5729,
    title: "Renovation of Fountainbridge Community Centre",
    location: "Fountainbridge, Edinburgh",
    district: "South-West",
    author: "Helen Douglas",
    dateSubmitted: "2024-01-30",
    category: "Community Infrastructure",
    excerpt: "Renovating the Fountainbridge Community Centre will ensure modern, functional spaces for community events, workshops, and social gatherings, increasing local participation.",
    content: "The Fountainbridge Community Centre serves as a hub for residents in the area, offering spaces for workshops, social gatherings, and community events. However, the facilities are in need of modernization. This project proposes a full renovation of the centre, including updates to the building’s interior, improved accessibility, and the installation of energy-efficient lighting and heating systems. With these improvements, the community centre will better serve its residents, providing a modern, welcoming space for a wide range of activities and events.",
    estimatedCost: "£75,000",
    benefits: ["Supports community events", "Modern, functional spaces", "Increases participation in local activities"]
  },
  {
    id: 8045,
    title: "Lighting and Path Improvement for Arthur's Seat Trails",
    location: "Arthur's Seat, Edinburgh",
    district: "South-East",
    author: "Paul Scott",
    dateSubmitted: "2024-02-12",
    category: "Pathway Enhancement",
    excerpt: "The project will install eco-friendly lighting and improve the surfaces of Arthur’s Seat trails to enhance safety and accessibility for all visitors, especially during the evening.",
    content: "Arthur's Seat is one of Edinburgh’s most popular destinations for locals and tourists alike, but the trails can become hazardous after dark due to poor lighting. This project proposes the installation of low-impact, eco-friendly lighting along the primary trails to improve visibility and safety during evening hours. In addition, the project will resurface the most worn paths to make them more accessible for walkers, runners, and cyclists. These enhancements will ensure the trails remain safe and enjoyable for all users, including those with mobility challenges.",
    estimatedCost: "£110,000",
    benefits: ["Increased safety", "Improved accessibility", "Eco-friendly lighting"]
  },
  {
    id: 4321,
    title: "New Basketball Courts in Leith Links",
    location: "Leith Links, Edinburgh",
    district: "North-East",
    author: "David Hamilton",
    dateSubmitted: "2024-02-08",
    category: "Sports Facility",
    excerpt: "The construction of new public basketball courts in Leith Links will encourage youth sports participation and provide a free, accessible space for local residents to engage in physical activities.",
    content: "Leith Links is a popular park, but it currently lacks adequate facilities for sports. This project proposes the construction of two new outdoor basketball courts that will be free and open to the public. These courts will cater to both casual players and local youth, providing a space for people to engage in physical activity and promote a healthy, active lifestyle. By encouraging sports participation, the basketball courts will also serve as a place for community building and social interaction among residents.",
    estimatedCost: "£60,000",
    benefits: ["Free public sports facility", "Encourages youth sports participation", "Promotes community interaction"]
  },
  {
    id: 6548,
    title: "Edinburgh City Library Digital Upgrade",
    location: "Edinburgh Central Library",
    district: "South-East",
    author: "Fiona MacLeod",
    dateSubmitted: "2024-01-28",
    category: "Cultural and Educational Infrastructure",
    excerpt: "This project aims to digitally upgrade Edinburgh Central Library by providing modern learning spaces, high-speed internet, and new computers, making it a hub for education and job training.",
    content: "Edinburgh Central Library has been a cornerstone of education and culture in the city, but its digital infrastructure is outdated. This project will focus on upgrading the library’s technology, including the installation of high-speed internet, new computers, and interactive learning tools. The goal is to create a modern, accessible space for students, job seekers, and the general public to benefit from educational resources and digital job training programs. With these upgrades, the library will continue to play a vital role in supporting lifelong learning and career development in Edinburgh.",
    estimatedCost: "£85,000",
    benefits: ["Modernized learning spaces", "Increased digital accessibility", "Promotes education and job training"]
  },
  {
    id: 8943,
    title: "Improved Drainage System in Stockbridge",
    location: "Stockbridge, Edinburgh",
    district: "North-West",
    author: "George Clarke",
    dateSubmitted: "2024-02-05",
    category: "Infrastructure",
    excerpt: "The installation of an improved drainage system in Stockbridge will address the frequent flooding issues during heavy rainfall, ensuring that the area remains dry and safe for residents and visitors.",
    content: "Stockbridge has long faced issues with flooding during periods of heavy rain, causing disruptions for residents and businesses alike. This project proposes the installation of a state-of-the-art drainage system to better manage rainwater runoff and prevent flooding in low-lying areas. The system will be eco-friendly, incorporating sustainable water management techniques to reduce the risk of overflow. This upgrade will improve the infrastructure and contribute to a more resilient local environment, benefiting both public safety and property protection.",
    estimatedCost: "£120,000",
    benefits: ["Flood prevention", "Improved infrastructure", "Eco-friendly water management"]
  },
  {
    id: 5217,
    title: "Dog-Friendly Zones in Princes Street Gardens",
    location: "Princes Street Gardens, Edinburgh",
    district: "South-East",
    author: "Laura Fraser",
    dateSubmitted: "2024-01-31",
    category: "Public Space Enhancement",
    excerpt: "This project aims to create dedicated dog-friendly zones in Princes Street Gardens, providing safe spaces for pets and their owners to enjoy the park without disturbing other visitors.",
    content: "Princes Street Gardens is a popular public space in the heart of Edinburgh, but it currently lacks designated areas where dogs can roam freely. This project proposes the creation of specific dog-friendly zones within the gardens, featuring fenced areas, waste stations, and dog-friendly amenities such as water fountains and agility equipment. These zones will allow dogs to play off-leash in a safe environment, while other park-goers can enjoy the space undisturbed. The zones will enhance the park’s appeal to pet owners while promoting responsible pet ownership.",
    estimatedCost: "£55,000",
    benefits: ["Improved pet amenities", "Safer spaces for dogs", "Enhances community experience"]
  },
  {
    id: 3986,
    title: "Solar Panels for Craigmillar Community Centre",
    location: "Craigmillar, Edinburgh",
    district: "South-East",
    author: "Eleanor MacKenzie",
    dateSubmitted: "2024-01-23",
    category: "Sustainability",
    excerpt: "This project will install solar panels on the roof of Craigmillar Community Centre, reducing energy costs and promoting the use of renewable energy in community infrastructure.",
    content: "Craigmillar Community Centre serves as a vital resource for local residents, but the building's energy costs are significant. This project proposes the installation of solar panels on the centre's roof, allowing the facility to harness renewable energy and reduce its carbon footprint. The solar panels will not only lower the centre's operational costs but also serve as an educational tool for the community, highlighting the benefits of sustainability. The project will contribute to long-term energy savings while promoting environmental responsibility.",
    estimatedCost: "£50,000",
    benefits: ["Reduced energy costs", "Promotes renewable energy", "Long-term sustainability"]
  },
  {
    id: 7104,
    title: "Expansion of Victoria Park Allotments",
    location: "Victoria Park, Edinburgh",
    district: "North-West",
    author: "Andrew Scott",
    dateSubmitted: "2024-01-26",
    category: "Green Space Development",
    excerpt: "The expansion of allotment plots in Victoria Park will provide more residents with the opportunity to grow their own food, fostering sustainability and community engagement.",
    content: "Victoria Park’s allotments have been incredibly popular among local residents, with waiting lists for plots growing each year. This project proposes the expansion of the existing allotment space, allowing more people to participate in urban gardening. The new plots will be equipped with water access and secure storage facilities, ensuring they are suitable for year-round use. By promoting local food production and providing a green space for residents to cultivate, the project will enhance community bonds and encourage sustainable living.",
    estimatedCost: "£35,000",
    benefits: ["Promotes local food production", "Encourages sustainability", "Builds community"]
  },
  {
    id: 9047,
    title: "Bike Storage Hubs in Marchmont",
    location: "Marchmont, Edinburgh",
    district: "South-East",
    author: "Rebecca Ross",
    dateSubmitted: "2024-02-02",
    category: "Transportation Infrastructure",
    excerpt: "This project will install secure bike storage hubs across Marchmont to promote cycling as a green mode of transportation while reducing the risk of bike theft.",
    content: "Marchmont is a bustling neighborhood, and many residents rely on bicycles for commuting. However, the lack of secure bike storage has led to frequent cases of bike theft. This project proposes the installation of multiple bike storage hubs in key areas throughout Marchmont, providing cyclists with a safe place to store their bikes. The hubs will be well-lit, monitored by CCTV, and accessible 24/7. By encouraging more people to cycle and offering a secure solution for bike storage, this project will support green transportation and enhance the neighborhood’s infrastructure.",
    estimatedCost: "£70,000",
    benefits: ["Encourages cycling", "Reduces bike theft", "Promotes green transport"]
  },
  {
    id: 8419,
    title: "Tree Planting Initiative in Braid Hills",
    location: "Braid Hills, Edinburgh",
    district: "South-West",
    author: "Gavin Wallace",
    dateSubmitted: "2024-02-09",
    category: "Environmental Conservation",
    excerpt: "The project will plant 500 new native trees in Braid Hills, improving air quality, supporting wildlife habitats, and preventing soil erosion in the area.",
    content: "Braid Hills is an important green space in Edinburgh, but parts of the area have suffered from deforestation and soil erosion. This project aims to reverse these effects by planting 500 native trees, including species that are well-suited to the local environment. These trees will not only improve air quality by absorbing carbon dioxide, but they will also provide habitats for local wildlife and help prevent further erosion. The tree planting initiative will enhance the area’s natural beauty and promote environmental sustainability.",
    estimatedCost: "£30,000",
    benefits: ["Improves air quality", "Supports biodiversity", "Prevents erosion"]
  },


  {
    id: 9762,
    title: "Upgrade of Tollcross Sports Centre",
    location: "Tollcross, Edinburgh",
    district: "South-West",
    author: "Rachel McLean",
    dateSubmitted: "2024-01-30",
    category: "Sports Facility",
    excerpt: "Upgrading the facilities at Tollcross Sports Centre will provide modern, accessible spaces for sports and fitness activities, encouraging more people to lead active lifestyles.",
    content: "Tollcross Sports Centre is a key venue for fitness and sports in Edinburgh, but its facilities are in need of modernization. This project proposes a comprehensive upgrade, including new gym equipment, improved changing rooms, and better accessibility for users with disabilities. The renovations will make the centre a more appealing and functional space for people of all ages to engage in physical activities, from swimming to weight training. The upgrade will ensure that the centre remains a valuable resource for the local community, promoting health and wellness.",
    estimatedCost: "£200,000",
    benefits: ["Modern facilities", "Increased accessibility", "Encourages healthy living"]
  },
  {
    id: 4379,
    title: "Public Wi-Fi Installation in Morningside",
    location: "Morningside, Edinburgh",
    district: "South-West",
    author: "Matthew Kerr",
    dateSubmitted: "2024-01-25",
    category: "Technology Infrastructure",
    excerpt: "This project will install free public Wi-Fi in key areas of Morningside, improving digital access for residents, businesses, and visitors.",
    content: "Morningside is a vibrant neighborhood with a mix of businesses and residential areas, but public Wi-Fi access is limited. This project proposes the installation of free, high-speed Wi-Fi in key public spaces such as parks, squares, and shopping areas. The Wi-Fi network will support local businesses by providing connectivity for visitors, and it will enhance the digital experience for residents. By offering free internet access, the project will also support education, job searches, and social inclusion, particularly for those who may not have reliable internet at home.",
    estimatedCost: "£65,000",
    benefits: ["Improves digital access", "Supports local businesses", "Attracts visitors"]
  },
  {
    id: 7846,
    title: "Community Sports Hub in Newhaven",
    location: "Newhaven, Edinburgh",
    district: "North-East",
    author: "Liam Duncan",
    dateSubmitted: "2024-02-15",
    category: "Sports Facility",
    excerpt: "This project will create a community sports hub in Newhaven, offering facilities for football, basketball, and fitness classes, with a focus on promoting physical health and social engagement.",
    content: "Newhaven has a growing population, but the area lacks dedicated spaces for sports and fitness. This project aims to establish a community sports hub with facilities for football, basketball, and fitness classes. The hub will be designed to cater to people of all ages, from children to seniors, promoting physical activity and social interaction. In addition to sports courts, the hub will feature indoor fitness spaces for group classes and individual training. The community hub will provide a safe, welcoming environment where residents can stay active and connect with their neighbors.",
    estimatedCost: "£90,000",
    benefits: ["Promotes physical health", "Engages local community", "Provides free sports facilities"]
  },
  {
    id: 9842,
    title: "Renovation of Seafield Beachfront",
    location: "Seafield, Edinburgh",
    district: "North-East",
    author: "Emily Fraser",
    dateSubmitted: "2024-02-18",
    category: "Public Space Improvement",
    excerpt: "This project seeks to improve Seafield’s beachfront by adding new seating areas, walking paths, and better litter management, creating a more welcoming environment for locals and visitors.",
    content: "Seafield's beachfront is a scenic area, but it lacks the amenities and infrastructure needed to fully attract and serve visitors. This project will revitalize the beachfront by installing new benches, creating clearly marked walking paths, and implementing a comprehensive litter management system. These improvements will make the beachfront more accessible and enjoyable for both locals and tourists, encouraging more people to visit the area. The project will also promote environmental responsibility through regular clean-up efforts and public awareness campaigns.",
    estimatedCost: "£120,000",
    benefits: ["Improves public space", "Attracts tourists", "Promotes environmental responsibility"]
  },
  {
    id: 6289,
    title: "Upgrade of Leith Theatre",
    location: "Leith, Edinburgh",
    district: "North-East",
    author: "Sophie Ramsay",
    dateSubmitted: "2024-02-20",
    category: "Cultural Infrastructure",
    excerpt: "Upgrading Leith Theatre with modern sound and lighting equipment will enhance its ability to host high-quality community performances and cultural events.",
    content: "Leith Theatre has a long history of hosting community events and cultural performances, but its outdated sound and lighting systems are in need of an upgrade. This project will provide the theatre with modern equipment, allowing it to host larger, more professional productions and events. The improvements will also make the venue more appealing to visiting performers and artists, helping to bring a wider range of cultural experiences to Leith. By investing in these upgrades, the theatre will continue to be a vibrant cultural hub for the community.",
    estimatedCost: "£200,000",
    benefits: ["Supports local culture", "Enhances performance quality", "Attracts more visitors"]
  },
  {
    id: 7431,
    title: "Green Roofs Initiative in Leith Docks",
    location: "Leith Docks, Edinburgh",
    district: "North-East",
    author: "Daniel Johnston",
    dateSubmitted: "2024-02-17",
    category: "Sustainability",
    excerpt: "This initiative will introduce green roofs to industrial buildings in Leith Docks, improving air quality and supporting urban biodiversity in the area.",
    content: "Leith Docks is a key industrial area, but its large, flat-roofed buildings offer an opportunity to support urban greening. This project proposes the installation of green roofs on several of these buildings, transforming them into functional spaces that promote biodiversity and environmental sustainability. Green roofs help to insulate buildings, reducing energy consumption, while also improving air quality by absorbing pollutants. Additionally, these rooftops will support local wildlife, such as birds and insects, by providing habitats in an otherwise industrial setting. The initiative will set a new standard for eco-friendly infrastructure in the area.",
    estimatedCost: "£75,000",
    benefits: ["Improves air quality", "Supports urban biodiversity", "Reduces energy costs"]
  },
  {
    id: 4512,
    title: "Creation of a Public Park in Granton",
    location: "Granton, Edinburgh",
    district: "North-East",
    author: "Fiona Wallace",
    dateSubmitted: "2024-02-19",
    category: "Green Space Development",
    excerpt: "This project proposes the transformation of unused land in Granton into a vibrant public park, featuring walking paths, a playground, and communal spaces for local gatherings and events.",
    content: "Granton is in need of more green spaces for recreation and community activities. This project will transform a vacant plot of land into a fully-developed public park, designed with walking paths, a children's playground, and seating areas where residents can relax or gather for events. The park will provide a safe and beautiful environment for outdoor activities and will be a focal point for community engagement. The addition of green space will also improve the neighborhood’s aesthetic, making it more attractive for families and visitors alike.",
    estimatedCost: "£100,000",
    benefits: ["Promotes outdoor activities", "Enhances neighborhood aesthetics", "Builds community"]
  },
  {
    id: 5624,
    title: "Expansion of Roseburn Path for Cyclists and Pedestrians",
    location: "Roseburn, Edinburgh",
    district: "North-West",
    author: "Tom Hamilton",
    dateSubmitted: "2024-02-12",
    category: "Transportation Infrastructure",
    excerpt: "Expanding Roseburn Path to better accommodate both cyclists and pedestrians, with clearly marked lanes that improve safety and encourage greater use of the pathway for commuting and leisure.",
    content: "Roseburn Path is a popular route for both cyclists and pedestrians, but conflicts between these two groups often arise due to the narrow pathway. This project aims to expand the path, creating distinct lanes for cyclists and pedestrians to ensure the safety and comfort of all users. The improved path will encourage more people to walk or cycle for their daily commutes, reducing traffic congestion and promoting eco-friendly transportation. The expansion will also make the path more accessible for families and individuals looking to enjoy the outdoors.",
    estimatedCost: "£60,000",
    benefits: ["Improves safety", "Encourages cycling", "Promotes eco-friendly transport"]
  },
  {
    id: 8113,
    title: "Granton Youth Centre Renovation",
    location: "Granton, Edinburgh",
    district: "North-West",
    author: "Katherine Bell",
    dateSubmitted: "2024-02-16",
    category: "Youth Facility",
    excerpt: "This project will renovate Granton Youth Centre, upgrading its facilities to provide modern spaces for educational programs, creative workshops, and recreational activities.",
    content: "Granton Youth Centre plays a crucial role in supporting young people in the community, but its current facilities are outdated and in need of modernization. This renovation project will update the centre with new classrooms, a music studio, and recreational areas, providing a better environment for educational programs, creative workshops, and sports activities. The updated facilities will engage more young people, offering them a safe and productive space to develop new skills, socialize, and stay active. The project aims to enhance the youth centre's role as a community resource that encourages learning and personal growth.",
    estimatedCost: "£85,000",
    benefits: ["Engages local youth", "Provides educational support", "Safe recreational space"]
  },
  {
    id: 9725,
    title: "Water Sports Centre in Cramond",
    location: "Cramond, Edinburgh",
    district: "North-West",
    author: "Jamie Stewart",
    dateSubmitted: "2024-02-14",
    category: "Sports Facility",
    excerpt: "This project will develop a water sports centre in Cramond, offering facilities for kayaking, rowing, and sailing, encouraging outdoor activities and water-based recreation for all ages.",
    content: "Cramond’s waterfront provides an excellent location for water sports, but currently lacks the necessary infrastructure to support these activities. This project proposes the construction of a water sports centre where people can participate in kayaking, rowing, and sailing. The centre will offer lessons for beginners, equipment rentals, and safe access to the water. By creating this facility, the project aims to make water sports more accessible to the local community and visitors alike, encouraging physical fitness and outdoor recreation. The centre will also serve as a social hub for enthusiasts and those interested in learning new water-based skills.",
    estimatedCost: "£150,000",
    benefits: ["Encourages water sports", "Promotes outdoor activity", "Attracts visitors to the area"]
  },
  {
    id: 8541,
    title: "Eco-Friendly Bus Shelters in South Gyle",
    location: "South Gyle, Edinburgh",
    district: "South-West",
    author: "Oliver Mitchell",
    dateSubmitted: "2024-02-13",
    category: "Sustainability",
    excerpt: "This project will install eco-friendly bus shelters in South Gyle, featuring solar panels for energy efficiency and green roofs to absorb rainwater and provide insulation, promoting sustainability in public transport infrastructure.",
    content: "The current bus shelters in South Gyle are outdated and inefficient, lacking modern sustainability features. This project aims to install eco-friendly bus shelters equipped with solar panels to power lighting and other amenities, reducing reliance on the grid. Additionally, the shelters will have green roofs to absorb rainwater, reduce urban heat, and provide insulation. These shelters will not only improve the experience for bus users but also contribute to the overall environmental goals of the community by promoting sustainable public transport infrastructure. The shelters will be a model of modern, eco-friendly design and encourage greater use of public transportation.",
    estimatedCost: "£45,000",
    benefits: ["Promotes sustainability", "Improves public transport facilities", "Reduces energy usage"]
  },
  {
    id: 6943,
    title: "Upgrade of Saughton Park Rose Gardens",
    location: "Saughton Park, Edinburgh",
    district: "South-West",
    author: "Charlotte Reid",
    dateSubmitted: "2024-02-11",
    category: "Green Space Development",
    excerpt: "This project proposes the restoration and upgrade of the historic Rose Gardens in Saughton Park, adding new varieties of roses, improving walkways, and making the space more accessible for all visitors, including those with mobility challenges.",
    content: "The Rose Gardens at Saughton Park are a historic part of Edinburgh’s heritage, but they are in need of restoration to maintain their beauty and accessibility. This project aims to restore the gardens by planting new varieties of roses, ensuring year-round blooms and visual appeal. In addition, the walkways will be resurfaced and widened to accommodate visitors with mobility challenges, and new accessible paths will be created. Benches and informational signs about the history of the gardens will also be added. The project will preserve the gardens as a cherished space for relaxation and reflection, while improving accessibility for all visitors.",
    estimatedCost: "£70,000",
    benefits: ["Enhances park aesthetics", "Improves accessibility", "Preserves local heritage"]
  }
];

