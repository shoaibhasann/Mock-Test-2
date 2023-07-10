const loader = document.getElementById("loader");
const dataContainer = document.getElementById("dataContainer");

function displayData(data) {
  dataContainer.innerHTML = "";

  if (data.length === 0) {
    dataContainer.textContent = "No data found.";
    return;
  }

  data.forEach(function (item) {
    const card = document.createElement("div");
    card.classList.add("skeleton-loader");
    dataContainer.appendChild(card);

    card.textContent = item.title;
    card.classList.remove("skeleton-loader");
  });

  loader.classList.add("hidden");
  dataContainer.classList.remove("hidden");
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    setTimeout(function () {
      displayData(data);
    }, 2000); // Delay for 2 seconds before displaying the data
  } catch (error) {
    console.log("Error:", error.message);
    loader.classList.add("hidden");
  }
}

// Show the loader initially
loader.classList.remove("hidden");

// Fetch data when the page is loaded
window.addEventListener("load", fetchData);
