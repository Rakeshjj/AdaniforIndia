// const data = [
//     { image: 'assets/image/banner/Banner_ports.jpg', content: 'APSEZ to acquire 80% of Astro Offshore for $185M, valuing the deal at $235M with an EV/FY25E EBITDA of 4.4x.' },
//     { image: 'assets/image/banner/banner_green_energy.jpg', content: 'content-2">Adani Green Energy launches 1,000 MW solar power at Khavda RE Park, Gujarat.' },
//     { image: 'assets/image/banner/adani_themal_plant.jpg', content: 'BHEL wins ₹11,000 crore in contracts from Adani Power for advanced thermal projects.' },
//     { image: 'assets/image/banner/Banner_news1.jpg', content: 'Gautam Adani on Dharavi Revitalization' },
//     { image: 'assets/image/banner/Banner-adani-foundation.jpg', content: 'Adani Foundation Launches Rural Infrastructure Projects Across India' },
//     { image: 'assets/image/banner/new6.jpg', content: 'New Content 6' },
//     { image: 'assets/image/banner/new7.jpg', content: 'New Content 7' },
//     { image: 'assets/image/banner/new8.jpg', content: 'New Content 8' },
//     { image: 'assets/image/banner/new9.jpg', content: 'New Content 9' },
//     { image: 'assets/image/banner/new10.jpg', content: 'New Content 10' },
//     { image: 'assets/image/banner/new11.jpg', content: 'New Content 11' },
//     { image: 'assets/image/banner/new12.jpg', content: 'New Content 12' },
//     { image: 'assets/image/banner/new13.jpg', content: 'New Content 13' },
//     { image: 'assets/image/banner/new14.jpg', content: 'New Content 14' },
//     { image: 'assets/image/banner/new15.jpg', content: 'New Content 15' },
// ];

// let currentCycle = 0;

// function updateContent() {
//     const images = [
//         { id: 'image-1', contentId: 'content-1' },
//         { id: 'image-2', contentId: 'content-2' },
//         { id: 'image-3', contentId: 'content-3' },
//         { id: 'image-4', contentId: 'content-4' },
//         { id: 'image-5', contentId: 'content-5' },
//         // Add more IDs as needed
//     ];

//     let currentCycle = 0;

//     function getUniqueRandomIndices(count, max) {
//         const indices = [];
//         while (indices.length < count) {
//             const index = Math.floor(Math.random() * max);
//             if (!indices.includes(index)) {
//                 indices.push(index);
//             }
//         }
//         return indices;
//     }

//     function getUniqueContent(existingContent) {
//         const availableData = data.filter(d => !existingContent.includes(d.image));
//         const selectedData = [];
//         while (selectedData.length < 3) {
//             const randomIndex = Math.floor(Math.random() * availableData.length);
//             selectedData.push(availableData[randomIndex]);
//             availableData.splice(randomIndex, 1); // Remove used item
//         }
//         return selectedData;
//     }

//     function updateContent() {
//         const totalElements = elements.length;
//         let indicesToChange;

//         if (currentCycle % 3 === 0) {
//             indicesToChange = getUniqueRandomIndices(3, totalElements);
//         } else if (currentCycle % 3 === 1) {
//             indicesToChange = getUniqueRandomIndices(2, totalElements);
//         } else {
//             indicesToChange = getUniqueRandomIndices(3, totalElements);
//         }

//         // Get existing content to avoid duplicates
//         const existingContent = elements.map(e => document.getElementById(e.id).src);

//         // Select new unique content
//         const newContent = getUniqueContent(existingContent);

//         elements.forEach((element, index) => {
//             if (indicesToChange.includes(index)) {
//                 const dataIndex = indicesToChange.indexOf(index);
//                 const content = newContent[dataIndex];
//                 document.getElementById(element.id).src = content.image;
//                 document.getElementById(element.contentId).innerText = content.content;
//             }
//         });

//         currentCycle++;
//     }

//     // Update content every 5 seconds
//     setInterval(updateContent, 6000);

//     // Initial call to set content
//     updateContent();
// }

// // Elements to be updated
// const elements = [
//   { id: "image-1", contentId: "content-1" },
//   { id: "image-2", contentId: "content-2" },
//   { id: "image-3", contentId: "content-3" },
//   { id: "image-4", contentId: "content-4" },
//   { id: "image-5", contentId: "content-5" },
// ];

// let currentCycle = 0;

// // Function to get unique random indices
// function getUniqueRandomIndices(count, max) {
//   const indices = [];
//   while (indices.length < count) {
//     const index = Math.floor(Math.random() * max);
//     if (!indices.includes(index)) {
//       indices.push(index);
//     }
//   }
//   return indices;
// }

// // Function to get unique content
// function getUniqueContent(existingContent) {
//   const availableData = data.filter((d) => !existingContent.includes(d.image));

//   // Check if enough unique data is available
//   if (availableData.length < 3) {
//     console.error("Not enough unique content available.");
//     return [];
//   }

//   const selectedData = [];
//   while (selectedData.length < 3) {
//     const randomIndex = Math.floor(Math.random() * availableData.length);
//     selectedData.push(availableData[randomIndex]);
//     availableData.splice(randomIndex, 1); // Remove used item
//   }
//   return selectedData;
// }

// function updateContent() {
//   const totalElements = elements.length;
//   let indicesToChange;

//   if (currentCycle % 3 === 0) {
//     indicesToChange = getUniqueRandomIndices(3, totalElements);
//   } else if (currentCycle % 3 === 1) {
//     indicesToChange = getUniqueRandomIndices(2, totalElements);
//   } else {
//     indicesToChange = getUniqueRandomIndices(3, totalElements);
//   }

//   // Get existing content to avoid duplicates
//   const existingContent = elements.map(
//     (e) => document.getElementById(e.id).src
//   );

//   // Select new unique content
//   const newContent = getUniqueContent(existingContent);

//   // If there are not enough new content, abort update
//   if (newContent.length < indicesToChange.length) {
//     console.error("Not enough unique content available.");
//     return;
//   }

//   elements.forEach((element, index) => {
//     if (indicesToChange.includes(index)) {
//       const dataIndex = indicesToChange.indexOf(index);
//       const content = newContent[dataIndex];
//       document.getElementById(element.id).src = content.image;
//       document.getElementById(element.contentId).innerText = content.content;
//     }
//   });

//   currentCycle++;
// }

// // Update content every 5 seconds
// setInterval(updateContent, 5000);

// // Initial call to set content
// updateContent();


//   step 1

// Data for dynamic changes

// const data = [
//   {
//     image: "assets/image/banner/Banner_ports.jpg",
//     content:
//       "APSEZ to acquire 80% of Astro Offshore for $185M, valuing the deal at $235M with an EV/FY25E EBITDA of 4.4x.",
//   },
//   {
//     image: "assets/image/banner/banner_green_energy.jpg",
//     content:
//       "Adani Green Energy launches 1,000 MW solar power at Khavda RE Park, Gujarat.",
//   },
//   {
//     image: "assets/image/banner/adani_themal_plant.jpg",
//     content:
//       "BHEL wins ₹11,000 crore in contracts from Adani Power for advanced thermal projects.",
//   },
//   {
//     image: "assets/image/banner/Banner_news1.jpg",
//     content: "Gautam Adani on Dharavi Revitalization",
//   },
//   {
//     image: "assets/image/banner/Banner-adani-foundation.jpg",
//     content:
//       "Adani Foundation Have Transformed The Lives Of 18 Farmers In Maharashtra",
//   },
//   {
//     image: "../assets/image/banner/adaniports.jpg",
//     content:
//       " Adani Ports signs concession agreement for multipurpose terminal at Deendayal Port",
//   },
//   {
//     image: "../assets/image/banner/airports.jpg",
//     content:
//       "Adani Airports launches aviio to give passengers real-time access data",
//   },
//   {
//     image: "../assets/image/banner/wilamrbanner.jpg",
//     content:
//       " Adani Wilmar looking to acquire 3 FMCG brands in a billion-dollar shopping plan",
//   },
//   {
//     image: "../assets/image/banner/defence.jpg",
//     content:
//       "Adani Defence and Thales Group to manufacture 70mm rockets in India",
//   },
//   {
//     image: "../assets/image/banner/power.png",
//     content:
//       "Adani Power to boost Kawai plant capacity with Rs 18,000 crore investment",
//   },
//   {
//     image: "../assets/image/banner/adani.jpg",
//     content:
//       "Gautam Adani to become world’s second trillionaire by 2028",
//   },
//   {
//     image: "../assets/image/banner/adani-blood.avif",
//     content:
//       "Adani Foundation Organises Nationwide Blood Donation On Gautam Adani’s 62nd Birthday",
//   },
//   {
//     image: "../assets/image/banner/aadaniambujaBanner.jpg",
//     content:
//       "Ambuja-ACC plans to set up Rs 1,000 crore offices in Ahmedabad, Delhi",
//   },
//   {
//     image: "../assets/image/banner/adanigroup.jpg",
//     content:
//       "Adani Group Honoured in TIME's World's Best Companies of 2024",
//   },
//   {
//     image: "../assets/image/banner/semiconductor.jpg",
//     content:
//       "Adani Group partners Israel's Tower Semiconductor to build $10 billion chip plant in India",
//   },
// ];


// let currentCycle=0;

// const elements = [
//   { id: "image-1", contentId: "content-1" },
//   { id: "image-2", contentId: "content-2" },
//   { id: "image-3", contentId: "content-3" },
//   { id: "image-4", contentId: "content-4" },
//   { id: "image-5", contentId: "content-5" },
// ];

// let previouslyShown = [];

// // Function to get unique content
// function getUniqueContent(count) {
//   const availableData = data.filter(d => !previouslyShown.includes(d.image));

//   if (availableData.length < count) {
//     console.error("Not enough unique content available.");
//     return [];
//   }

//   const selectedData = [];
//   while (selectedData.length < count) {
//     const randomIndex = Math.floor(Math.random() * availableData.length);
//     selectedData.push(availableData[randomIndex]);
//     availableData.splice(randomIndex, 1);
//   }

//   return selectedData;
// }

// // Function to update content
// function updateContent() {
//   const count = elements.length;
//   const newContent = getUniqueContent(count);

//   if (newContent.length < count) {
//     console.error("Not enough unique content available.");
//     return;
//   }

//   // Shuffle new content array
//   newContent.sort(() => Math.random() - 0.5);

//   elements.forEach((element, index) => {
//     const content = newContent[index];
//     if (content) {
//       document.getElementById(element.id).src = content.image;
//       document.getElementById(element.contentId).innerText = content.content;
//     }
//   });

//   // Update previously shown images
//   previouslyShown = newContent.map(content => content.image);

//   // Limit the number of previously shown images to avoid memory issues
//   if (previouslyShown.length > data.length - count) {
//     previouslyShown.splice(0, previouslyShown.length - (data.length - count));
//   }
// }

// // Update content every 5 seconds
// setInterval(updateContent, 9000);

// // Initial call to set content
// updateContent();

const data = [
  {
    image: "assets/image/banner/Banner_ports.jpg",
    content:
      "APSEZ to acquire 80% of Astro Offshore for $185M, valuing the deal at $235M with an EV/FY25E EBITDA of 4.4x.",
  },
  {
    image: "assets/image/banner/banner_green_energy.jpg",
    content:
      "Adani Green Energy launches 1,000 MW solar power at Khavda RE Park, Gujarat.",
  },
  {
    image: "assets/image/banner/Banner-adani-foundation.jpg",
    content:
      "Adani Foundation Have Transformed The Lives Of 18 Farmers In Maharashtra",
  },

  {
    image: "assets/image/banner/Banner_news1.jpg",
    content: "Gautam Adani on Dharavi Revitalization",
  },
  {
    image: "assets/image/banner/adani_themal_plant.jpg",
    content:
      "BHEL wins ₹11,000 crore in contracts from Adani Power for advanced thermal projects.",
  },
  {
    image: "../assets/image/banner/power.png",
    content:
      "Adani Power to boost Kawai plant capacity with Rs 18,000 crore investment",
  },

  {
    image: "../assets/image/banner/adaniports.jpg",
    content:
      " Adani Ports signs concession agreement for multipurpose terminal at Deendayal Port",
  },

  {
    image: "../assets/image/banner/aadaniambujaBanner.jpg",
    content:
      "Ambuja-ACC plans to set up Rs 1,000 crore offices in Ahmedabad, Delhi",
  },

  {
    image: "../assets/image/banner/defence.jpg",
    content:
      "Adani Defence and Thales Group to manufacture 70mm rockets in India",
  },
  {
    image: "../assets/image/banner/semiconductor.jpg",
    content:
      "Adani Group partners Israel's Tower Semiconductor to build $10 billion chip plant in India",
  },


  {
    image: "../assets/image/banner/adani.jpg",
    content:
      "Gautam Adani to become world’s second trillionaire by 2028",
  },
  {
    image: "../assets/image/banner/adani-blood.avif",
    content:
      "Adani Foundation Organises Nationwide Blood Donation On Gautam Adani’s 62nd Birthday",
  },
  {
    image: "../assets/image/banner/airports.jpg",
    content:
      "Adani Airports launches aviio to give passengers real-time access data",
  },

  {
    image: "../assets/image/banner/adanigroup.jpg",
    content:
      "Adani Group Honoured in TIME's World's Best Companies of 2024",
  },
  {
    image: "../assets/image/banner/wilamrbanner.jpg",
    content:
      "Adani Power,Adani Green shares surge up to 5% on 6,600 MW supply deal with Maharashtra govt",
  },

];

const elements = [
  { id: "image-1", contentId: "content-1" },
  { id: "image-2", contentId: "content-2" },
  { id: "image-3", contentId: "content-3" },
  { id: "image-4", contentId: "content-4" },
  { id: "image-5", contentId: "content-5" },
];

let currentCycle = 0; // Track the current set
const batchSize = elements.length; // How many elements per set (5)
const totalSets = Math.ceil(data.length / batchSize); // Calculate total sets

// Function to update content for a specific set
function updateContent() {
  const startIndex = currentCycle * batchSize;
  const endIndex = startIndex + batchSize;

  const newContent = data.slice(startIndex, endIndex);

  // Update the elements with the new content
  elements.forEach((element, index) => {
    const content = newContent[index];
    if (content) {
      document.getElementById(element.id).src = content.image;
      document.getElementById(element.contentId).innerText = content.content;
    }
  });
}

// Function for navigating to the previous set
function showPrevious() {
  currentCycle = (currentCycle - 1 + totalSets) % totalSets;
  updateContent();
}

// Function for navigating to the next set
function showNext() {
  currentCycle = (currentCycle + 1) % totalSets;
  updateContent();
}

// Update content every 9 seconds
let autoSlide = setInterval(showNext, 15000);

// Allow manual navigation through the arrows
document.getElementById("prev-arrow").addEventListener("click", function () {
  clearInterval(autoSlide); // Stop auto-sliding when manual navigation is used
  showPrevious();
  autoSlide = setInterval(showNext, 15000); // Restart the interval after a click
});

document.getElementById("next-arrow").addEventListener("click", function () {
  clearInterval(autoSlide); // Stop auto-sliding when manual navigation is used
  showNext();
  autoSlide = setInterval(showNext, 15000); // Restart the interval after a click
});

// Initial call to set content
updateContent();




const portfolios = [
  "All",
  "Ports",
  "Airports",
  "Power & Gas",
  "Renewables",
  "Infrastructure",
  "Defence",
  "Technology",
  "Logistics",
  "FMCG & Agri",
  "Philanthropy",
  "Sustainability",
];

// Map portfolio options to specific images
const portfolioImages = {
  All: "../assets/image/adaniAll.jpg",
  Ports: "../assets/image/AdaniPorts.jpg",
  Airports: "../assets/image/AdaniAirport.jpg",
  "Power & Gas": "../assets/image/AdaniPower.jpg",
  Renewables: "../assets/image/AdaniGreen.jpg",
  Infrastructure: "../assets/image/Adani-A.png",
  Defence: "../assets/image/adaniDefence.jpg",
  Technology: "../assets/image/AdaniTech.jpg",
  Logistics: "../assets/image/Adani-agri-A.png",
  "FMCG & Agri": "../assets/image/Adani-agri-A.png",
  Philanthropy: "../assets/image/adani_foundation-A.png",
  Sustainability: "../assets/image/adani_sub-A.jpg",
};

function renderPortfolioDropdown() {
  const portfolioDropdownMenu = document.getElementById(
    "portfolioDropdownMenu"
  );
  portfolioDropdownMenu.innerHTML = ""; // Clear existing options

  // Add portfolio options as dropdown items
  portfolios.forEach((portfolio) => {
    const dropdownItem = document.createElement("a");
    dropdownItem.classList.add("dropdown-item");
    dropdownItem.href = "#"; // This can be changed based on your routing
    dropdownItem.textContent = portfolio;

    // Add click event listener to update the infographic on selection
    dropdownItem.addEventListener("click", (e) => {
      e.preventDefault();
      displayInfographic(portfolio);
    });

    portfolioDropdownMenu.appendChild(dropdownItem);
  });
}

// Function to display the selected infographic
function displayInfographic(portfolio) {
  const infographicDisplay = document.getElementById("infographicDisplay");
  const selectedImage =
    portfolioImages[portfolio] || "assets/image/default.jpg"; // Fallback to default if not found

  infographicDisplay.innerHTML = `
      <img src="${selectedImage}" style="width: 100%;" alt="${portfolio} Image" class="img-fluid portfolio-image mb-3">`;
  infographicDisplay.style.display = "block";
}

// Initial render
renderPortfolioDropdown();
displayInfographic(portfolios[0]);

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  document.getElementById("updateTime").textContent = timeString;
}

// Update the time immediately
updateTime();

// Update the time every 2 minutes (120,000 milliseconds)
setInterval(updateTime, 120000);




const marketCaps = {
  usd: "$197.17 Billion",
  inr: "₹16,53,324.28 Crore" // Example static INR value
};

let isUSD = true; // Track which value is currently displayed

function updateMarketCap() {
  const marketCapElement = document.getElementById('market-cap');

  // Toggle between USD and INR
  if (isUSD) {
    marketCapElement.textContent = marketCaps.usd;
  } else {
    marketCapElement.textContent = marketCaps.inr;
  }
  isUSD = !isUSD; // Toggle value

  // Update the value every 5 seconds
  setTimeout(updateMarketCap, 5000);
}

// Start the update process
updateMarketCap();










const url =
  "https://script.google.com/macros/s/AKfycby8FN-HZQx-jFzIZ-JLySuw18m8UFY75i_gjQTbwB1LSNH1akk0zc0xfefC3maJosXc/exec"; // Replace with your script's web app URL

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("dattttta", data);
    console.log(
      "Total MarketCap (in Crores INR):",
      data.totalMarketCapCroresINR || "Data not available"
    );
    console.log(
      "Total MarketCap (in Billion USD):",
      data.totalMarketCapBillionUSD || "Data not available"
    );
    console.log(
      "Average Current Price:",
      data.averageCurrentPrice || "Data not available"
    );
    console.log(
      "Average Change in %:",
      data.averageChangePercent || "Data not available"
    );
  })
  .catch((error) => console.error("Error fetching data:", error));

// const portfolioData = {
//   'All': {
//       image: '../assets/image/Adani_Group.png',
//       icons: [
//           { src: '../assets/portfolio_icons/All/rectangle-list-regular.svg', text: '10 Listed Companies' },
//           { src: '../assets/portfolio_icons/All/trophy-solid.svg', text: '30 Years' },
//           { src: '../assets/portfolio_icons/All/user-group-solid.svg', text: '46000+ Team strength' },
//           { src: '../assets/portfolio_icons/All/industry-solid.svg', text: '15+  Industries' },
//           { src: '../assets/portfolio_icons/All/user-check-solid.svg', text: '3.4 mn Beneficiaries' },
//           { src: '../assets/portfolio_icons/All/network-wired-solid.svg', text: '350 mn Userbase of Core Infra Platform' },

//       ]
//   },
//   'Ports': {
//       image: '../assets/image/Adani_Ports.png',
//       icons: [
//           { src: '../assets/portfolio_icons/ports/anchor-solid.svg', text: '15 Domestic Ports' },
//           { src: '../assets/portfolio_icons/ports/ship-solid.svg', text: '3 International Ports' },
//           { src: '../assets/portfolio_icons/ports/boxes-stacked-solid.svg', text: '627 MMT Cargo Volume' },
//           { src: '../assets/portfolio_icons/ports/chart-pie-solid.svg', text: '27%  Handled the Country total Cargo' },
//           { src: '../assets/portfolio_icons/ports/box-solid.svg', text: '10.4 Mn TEUs handled' },
//           { src: '../assets/portfolio_icons/ports/truck-fast-solid.svg', text: '127 Total Rakes Count' },

//       ]
//   },
//   'Airports': {
//       image: '../assets/image/adani airport-A.jpg',
//       icons: [
//           { src: '../assets/portfolio_icons/airports/plane-solid.svg', text: '7 Airports' },
//           { src: '../assets/portfolio_icons/airports/envira-brands-solid.svg', text: '1 Green Field Airports' },
//           { src: '../assets/portfolio_icons/airports/van-shuttle-solid.svg', text: '89 mn Footfall handled' },
//           { src: '../assets/portfolio_icons/airports/cart-flatbed-suitcase-solid.svg', text: '1 mn MT Cargo Load Handled' },
//           { src: '../assets/portfolio_icons/airports/plane-arrival-solid.svg', text: '6 Lac+ Air traffic Movement' },
//           { src: '../assets/portfolio_icons/airports/chart-line-solid.svg', text: '19% of Air Passenger traffic Growth in FY24' },
//       ]
//   },
//   'Power & Gas': {
//       image: '../assets/image/adani_gas.png',
//       icons: [
//           { src: '../assets/portfolio_icons/power&gas/bolt-solid.svg', text: '16.9 GW Capacity of Thermal Power' },
//           { src: '../assets/portfolio_icons/power&gas/plug-solid.svg', text: '15.2 GW Operating Portfolio' },
//           { src: '../assets/portfolio_icons/power&gas/gas-pump-solid.svg', text: '300+ Gas Station' },
//           { src: '../assets/portfolio_icons/power&gas/user-solid.svg', text: '3 Lac+ Customer For Gas' },
//           { src: '../assets/portfolio_icons/power&gas/lightbulb-solid.svg', text: 'Power Supply to 12 mn People' },
//           { src: '../assets/portfolio_icons/power&gas/ethernet-solid.svg', text: '900 km of Transmission line' },

//       ]
//   },
//   'Renewables': {
//       image: '../assets/image/Adani-ren-A.png',
//       icons: [
//           { src: '../assets/portfolio_icons/Renewables/leaf-solid.svg', text: '25 GW of Green Energy Portfolio' },
//           { src: '../assets/portfolio_icons/Renewables/plug-circle-bolt-solid.svg', text: '10.9 GW of Operating Portfolio' },
//           { src: '../assets/portfolio_icons/Renewables/smog-solid.svg', text: '15.2 mn tons of CO2 Emission in FY24' },
//           { src: '../assets/portfolio_icons/Renewables/solar-panel-solid.svg', text: '7.3 GW of Solar Power' },
//           { src: '../assets/portfolio_icons/Renewables/fan-solid.svg', text: '1.4 GW Wind Power' },
//           { src: '../assets/portfolio_icons/Renewables/recycle-solid.svg', text: '2.4 GW of Hybrid' },
//           { src: '../assets/portfolio_icons/Renewables/chart-line-solid.svg', text: '50 GW Commitment by 2040' },
//       ]
//   },
//   'Infrastructure': {
//       image: '../assets/image/Adani-A.png',
//       icons: [
//           { src: '../assets/portfolio_icons/Infrastructure/house-chimney-window-solid.svg', text: '10 mn People Rehabilitation in Dharavi' },
//           { src: '../assets/portfolio_icons/Infrastructure/road-solid.svg', text: '10 Road Construction Project' },
//           { src: '../assets/portfolio_icons/Infrastructure/industry-solid.svg', text: '89 MTPA Cement Manufacturing Units' },
//           { src: '../assets/portfolio_icons/Infrastructure/chart-line-solid.svg', text: '140 MTPA By 2028' },
//           { src: '../assets/portfolio_icons/Infrastructure/tree-city-solid.svg', text: '24 Mn Sq.ft area Developed' },

//       ]
//   },
//   'Defence': {
//       image: '../assets/image/Adani_defence-A.jpeg',
//       icons: [
//           { src: '../assets/portfolio_icons/Defence/robot-solid.svg', text: '10 Unmanned Systems' },
//           { src: '../assets/portfolio_icons/Defence/shield-halved-solid.svg', text: '6 Counter Drone System' },
//           { src: '../assets/portfolio_icons/Defence/location-crosshairs-solid.svg', text: '7 Models of Small Arms' },
//           { src: '../assets/portfolio_icons/Defence/circle-dot-solid.svg', text: '5 Models of Ammunition' },
//           { src: '../assets/portfolio_icons/Defence/rocket-solid.svg', text: '5 Models of Missiles' },

//       ]
//   },
//   'Technology': {
//       image: '../assets/image/adani_technology-A.jpg',
//       icons: [
//           { src: '../assets/portfolio_icons/Technology/server-solid.svg', text: '250+ MW Data Centre worldwide' },
//           { src: '../assets/portfolio_icons/All/network-wired-solid.svg', text: '50+ Edge, Hyper-scale and built-to-order data centres' },
//           { src: '../assets/portfolio_icons/Renewables/leaf-solid.svg', text: '100% Renewable Energy Usage' },
//           { src: '../assets/portfolio_icons/Technology/fingerprint-solid.svg', text: '7 Layered security Permeter' },

//       ]
//   },
//   'Logistics': {
//       image: '../assets/image/Adani-agri-A.png',
//       icons: [
//           { src: '../assets/portfolio_icons/Logistics/boxes-stacked-solid.svg', text: '1.35+ mn TEUs capacity of Logistics Parks' },
//           { src: '../assets/portfolio_icons/ports/truck-fast-solid.svg', text: '127 Rakes ' },
//           { src: '../assets/portfolio_icons/Logistics/train-solid.svg', text: '65 Operating Container Trains'},
//           { src: '../assets/portfolio_icons/Logistics/truck-moving-solid.svg', text: '900+ Fleet For Road Logistics' },
//           { src: '../assets/portfolio_icons/Logistics/warehouse-solid.svg', text: '2.42+mn Sq.ft of Warehouse across India' },

//       ]
//   },
//   'FMCG & Agri': {
//       image: '../assets/image/Adani-agri-A.png',
//       icons: [
//           { src: '../assets/portfolio_icons/FMCG _Agri/money-bill-wheat-solid.svg', text: '5.5 Lac+ Metric Tons of Silos' },
//           { src: '../assets/portfolio_icons/Logistics/train-solid.svg', text: '7 Rakes with 350 wagons' },
//           { src: '../assets/portfolio_icons/Infrastructure/industry-solid.svg', text: '23 FMCG Manufacturing Units' },
//           { src: '../assets/portfolio_icons/All/network-wired-solid.svg', text: '10700+ FMCG Distributors network' },
//           { src: '../assets/portfolio_icons/FMCG _Agri/house-solid.svg', text: '118 mn+ House hold Reach' },

//       ]
//   },
//   'Philanthropy': {
//       image: '../assets/image/adani_foundation-A.png',
//       icons: [
//           { src: '../assets/portfolio_icons/Philanthropy/handshake-angle-solid.svg', text: '9.1 Million Lives touched annually' },
//           { src: '../assets/portfolio_icons/Philanthropy/earth-asia-solid.svg', text: '19 States' },
//           { src: '../assets/portfolio_icons/FMCG _Agri/house-solid.svg', text: '6769 Villages' },
//           { src: '../assets/portfolio_icons/Philanthropy/calendar-check-solid.svg', text: '28 Years of Service' },

//       ]
//   },
//   'Sustainability': {
//       image: '../assets/image/adani_sub-A.jpg',
//       icons: [
//           { src: '../assets/portfolio_icons/Renewables/solar-panel-solid.svg', text: '20% Increase in Renewable Energy at AEL' },
//           { src: '../assets/portfolio_icons/Renewables/recycle-solid.svg', text: '100% Single use plastic free Zones at AGEL' },
//           { src: '../assets/portfolio_icons/Sustainability/trash-can-arrow-up-solid.svg', text: '78% Hazardous waste reduction at AESL'},
//           { src: '../assets/portfolio_icons/Logistics/truck-moving-solid.svg', text: '100% Decarbonisation Fleet at ATGL'},
//           { src: '../assets/portfolio_icons/Sustainability/cloud-sun-solid.svg', text: '49% Reduction Emission Intensity at APSEZ'},
//           { src: '../assets/portfolio_icons/Sustainability/droplet-solid.svg', text: '5X Water Positive at ACC'},
//       ]
//   }

// };

// function renderPortfolioDropdown() {
//   const portfolioDropdownMenu = document.getElementById('portfolioDropdownMenu');
//   portfolioDropdownMenu.innerHTML = ''; // Clear existing options

//   // Add portfolio options as dropdown items
//   Object.keys(portfolioData).forEach(portfolio => {
//       const dropdownItem = document.createElement('a');
//       dropdownItem.classList.add('dropdown-item');
//       dropdownItem.href = '#'; // This can be changed based on your routing
//       dropdownItem.textContent = portfolio;

//       // Add click event listener to update the infographic on selection
//       dropdownItem.addEventListener('click', (e) => {
//           e.preventDefault();
//           displayInfographic(portfolio);
//           displayCircleDetails(portfolio);
//       });

//       portfolioDropdownMenu.appendChild(dropdownItem);
//   });
// }

// // Function to display the selected infographic
// function displayInfographic(portfolio) {
//   const infographicDisplay = document.getElementById('infographicDisplay');
//   const selectedImage = portfolioData[portfolio].image || 'assets/image/default.jpg'; // Fallback to default if not found

//   infographicDisplay.innerHTML = `
//       <img src="${selectedImage}" style="width: 100%;" alt="${portfolio} Image" class="img-fluid portfolio-image mb-3">`;
//   infographicDisplay.style.display = 'block';
// }

// // Function to display circle details dynamically
// function displayCircleDetails(portfolio) {
//   const percentageCircles = document.querySelector('.percentage-circles');
//   const icons = portfolioData[portfolio].icons;

//   percentageCircles.innerHTML = ''; // Clear existing circle details

//   icons.forEach(icon => {
//       const circleBox = document.createElement('div');
//       circleBox.classList.add('circle-box', 'mb-3');
//       circleBox.innerHTML = `
//           <div class="circle">
//               <img src="${icon.src}" alt="Icon" class="circle-icon">
//           </div>
//           <div class="circle-details">
//               <p>${highlightNumbers(icon.text)}</p>
//           </div>`;

//       // Add event listener to the circle box to show more details (optional)
//       circleBox.addEventListener('click', () => {
//           showDetails(`${icon.text}`);
//       });

//       percentageCircles.appendChild(circleBox);
//   });
// }

// // Function to make numbers bolder
// function highlightNumbers(text) {
//   return text.replace(/(\d+)/g, '<span class="bold-number">$1</span>');
// }

// // Function to show more detailed information when a circle is clicked
// function showDetails(details) {
//   alert(details); // You can replace this with a modal or a details section
// }

// // Initial render
// renderPortfolioDropdown();
// displayInfographic('All'); // Default view on page load
// displayCircleDetails('All');

const foundationData = [
  {
    heading: "All Initiatives",
    paragraph:
      "The Adani Foundation drives impactful change through initiatives in education, healthcare, sustainable livelihoods, rural infrastructure, environmental conservation, and disaster relief. Its efforts aim to empower communities and improve quality of life across India.",
    percentages: [
      { percentage: "75%", details: "Education Initiatives" },
      { percentage: "60%", details: "Healthcare Programs" },
      { percentage: "80%", details: "Community Support" },
    ],
    imageSrc: "../assets/image/adani_foundation_All Initiative.jpeg",
    imageAlt: "Foundation Image 1",
  },
  {
    heading: "Education",
    paragraph:
      "The Adani Foundation Education initiative is committed to enhancing access to quality education for children and youth across India. Through schools, scholarships, digital learning programs, and vocational training centers, the foundation supports over 100,000 students, ensuring holistic development and fostering future-ready skills for a brighter tomorrow.",
    percentages: [
      { percentage: "75%", details: "Education Initiatives" },
      { percentage: "60%", details: "Healthcare Programs" },
      { percentage: "80%", details: "Community Support" },
    ],
    imageSrc: "../assets/image/school.jpg",
    imageAlt: "Foundation Image 1",
  },
  {
    heading: "Health Care",
    paragraph:
      "The Adani Foundation Health Department is dedicated to improving healthcare accessibility and quality for underserved communities. Through initiatives like mobile healthcare units, rural health camps, and partnerships with hospitals, they provide essential medical services to those in need.",
    percentages: [
      { percentage: "85%", details: "Employment Programs" },
      { percentage: "50%", details: "Environmental Projects" },
      { percentage: "90%", details: "Rural Development" },
    ],
    imageSrc: "../assets/image/adani_health_care_found.jpg",
    imageAlt: "Foundation Image 2",
  },
  {
    heading: "Community Development",
    paragraph:
      "The Adani Foundation Community Development initiatives focus on uplifting marginalized communities by improving access to education, healthcare, and sustainable livelihoods. Through infrastructure development, skill-building programs, and women empowerment efforts, the foundation fosters holistic growth and long-term self-reliance in rural and urban areas.",
    percentages: [
      { percentage: "55%", details: "Water Conservation" },
      { percentage: "40%", details: "Disaster Relief" },
      { percentage: "95%", details: "Renewable Energy" },
    ],
    imageSrc: "../assets/image/School renovation.JPG",
    imageAlt: "Foundation Image 3",
  },
  {
    heading: "Sustainable Livelihood",
    paragraph:
      "The Adani Foundation’s Sustainable Livelihoods initiative focuses on empowering communities by providing skill development, promoting sustainable agriculture, and supporting women’s self-help groups. These programs aim to create economic self-reliance by enhancing employability, encouraging entrepreneurship, and improving access to income-generating opportunities, particularly in rural areas.",
    percentages: [
      { percentage: "55%", details: "Water Conservation" },
      { percentage: "40%", details: "Disaster Relief" },
      { percentage: "95%", details: "Renewable Energy" },
    ],
    imageSrc: "../assets/image/Sustainable Livelihoods.JPG",
    imageAlt: "Foundation Image 3",
  },
];

let currentIndex = 0;
let autoPlayInterval;

// Function to smoothly transition content
function smoothTransition(contentId, newData) {
  const element = document.getElementById(contentId);

  // Fade out the content
  element.classList.remove("fade-in");
  element.classList.add("fade");

  // Once the fade out completes, update the content
  setTimeout(() => {
    if (contentId === "dynamicImage") {
      element.src = newData;
    } else {
      element.textContent = newData;
    }

    // Fade back in the new content
    element.classList.remove("fade");
    element.classList.add("fade-in");
  }, 300); // Match the transition duration (600ms)
}

// Function to populate content dynamically
function loadContent() {
  const currentData = foundationData[currentIndex];

  // Smoothly update heading, paragraph, and image
  smoothTransition("dynamicHeading", currentData.heading);
  smoothTransition("dynamicParagraph", currentData.paragraph);
  smoothTransition("dynamicImage", currentData.imageSrc);

  // Handle percentages separately (remove, update, fade-in)
  const percentagesContainer = document.getElementById("dynamicPercentages");
  percentagesContainer.classList.remove("fade-in");
  percentagesContainer.classList.add("fade");

  setTimeout(() => {
    percentagesContainer.innerHTML = ""; // Clear previous content
    currentData.percentages.forEach((item) => {
      const percentageElement = document.createElement("div");
      percentageElement.className = "percentage-box";

      // Create percentage text
      const percentageText = document.createElement("div");
      percentageText.className = "percentage";
      percentageText.textContent = item.percentage;

      // Create details text
      const percentageDetails = document.createElement("div");
      percentageDetails.className = "percentage-details";
      percentageDetails.textContent = item.details;

      // Append percentage and details to percentage box
      percentageElement.appendChild(percentageText);
      percentageElement.appendChild(percentageDetails);

      // Append the percentage box to the container
      percentagesContainer.appendChild(percentageElement);
    });

    // Fade in the updated percentages
    percentagesContainer.classList.remove("fade");
    percentagesContainer.classList.add("fade-in");
  }, 300); // Match the transition duration (600ms)
}

// Function to start auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % foundationData.length;
    loadContent();
  }, 5000); // Change content every 5 seconds
}

// Function to stop auto-play
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function populateDropdown() {
  const dropdownMenu = document.getElementById("sectorDropdownMenu");
  foundationData.forEach((data, index) => {
    const dropdownItem = document.createElement("a");
    dropdownItem.className = "dropdown-item";
    dropdownItem.href = "#";
    dropdownItem.textContent = data.heading;

    dropdownItem.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior (scroll to top)
      currentIndex = index;
      loadContent();
      stopAutoPlay(); // Stop auto-play when user selects an item
    });

    dropdownMenu.appendChild(dropdownItem);
  });
}


// Initialize the dropdown and first content on page load
populateDropdown();
loadContent();
startAutoPlay();

$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-tab");
  const panes = document.querySelectorAll(".tabs-container .pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panes.forEach((pane) => {
        if (pane.id === target) {
          pane.classList.add("active");
        } else {
          pane.classList.remove("active");
        }
      });
    });
  });

  // Set default active tab
  document.querySelector('.nav-tab[data-tab="tab1"]').click();
});

document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".pane")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6; // Adjust if you have more or fewer items per page
  const items = document.querySelectorAll(".case-list .page"); // Select all items
  const paginationLinks = document.querySelectorAll(".pagination .page-item a");

  function showPage(page) {
    // Hide all items
    items.forEach((item) => {
      item.style.display = "none";
    });

    // Show items for the selected page
    items.forEach((item) => {
      if (item.getAttribute("data-page") == page) {
        item.style.display = "block";
      }
    });

    // Highlight the current page link
    paginationLinks.forEach((link) =>
      link.parentElement.classList.remove("active")
    );
    document
      .querySelector(`.pagination .page-item a[data-page="${page}"]`)
      .parentElement.classList.add("active");
  }

  paginationLinks.forEach((pageLink) => {
    pageLink.addEventListener("click", function (event) {
      event.preventDefault();
      const page = parseInt(this.getAttribute("data-page"));
      showPage(page);
    });
  });

  document
    .getElementById("prev-page")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let currentPage = parseInt(
        document
          .querySelector(".pagination .page-item.active a")
          .getAttribute("data-page")
      );
      if (currentPage > 1) showPage(currentPage - 1);
    });

  document
    .getElementById("next-page")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let currentPage = parseInt(
        document
          .querySelector(".pagination .page-item.active a")
          .getAttribute("data-page")
      );
      if (currentPage < paginationLinks.length - 2) showPage(currentPage + 1);
    });

  // Initialize the first page
  showPage(1);
});

function toggleMenu() {
  const tabs = document.querySelector(".nav-tabset");
  tabs.style.display = tabs.style.display === "block" ? "none" : "block";
}

function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// Handle tab clicks
document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    // Hide all panes and remove 'active' class from tabs
    document.querySelectorAll(".pane").forEach((pane) => {
      pane.classList.remove("active");
    });
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.classList.remove("active");
    });

    // Show the selected content pane and set the tab as

    const selectedPane = document.getElementById(tabId);
    selectedPane.classList.add("active");
    this.classList.add("active");

    // Update the dropdown content with the selected pane content
    if (window.innerWidth <= 768) {
      document.getElementById("dropdown-content").innerHTML =
        selectedPane.innerHTML;
    }
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdownContent = document.getElementById("dropdown-content");
  if (
    !dropdownContent.contains(event.target) &&
    !event.target.classList.contains("menu-toggle")
  ) {
    dropdownContent.style.display = "none";
  }
});

document.querySelectorAll(".pagination .page-item").forEach((pageItem) => {
  pageItem.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the page number
    const page = this.getAttribute("data-page");

    // Hide all page contents
    document.querySelectorAll(".page-content").forEach((pageContent) => {
      pageContent.style.display = "none";
    });

    // Show the selected page content
    document.querySelector(`.page-content[data-page="${page}"]`).style.display =
      "flex";

    // Highlight the active pagination button
    document.querySelectorAll(".pagination .page-item").forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.addEventListener("scroll", function () {
  var reportsSection = document.getElementById("reportssection");
  var sectorsButton = document.getElementById("sectors");

  // Get the position of the section
  var sectionRect = reportsSection.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionRect.top <= 0 && sectionRect.bottom >= 0) {
    // Section is in the viewport
    sectorsButton.style.display = "block";
  } else {
    // Section is out of the viewport
    sectorsButton.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  const sectorsButton = document.getElementById("sectors");
  const specificSection = document.querySelector("#yourSectionID"); // Replace with your section ID

  // Check if the user has scrolled past the specific section
  const sectionTop = specificSection.getBoundingClientRect().top;
  const sectionBottom = specificSection.getBoundingClientRect().bottom;

  if (window.innerWidth <= 767) {
    // Only applies to mobile view
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      sectorsButton.style.display = "block"; // Show button when the section is visible
    } else {
      sectorsButton.style.display = "none"; // Hide button when not in the section
    }
  }
});













