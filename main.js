// Extensive list of food recommendations
const foods = [
  "김치찌개", "된장찌개", "제육볶음", "돈까스", "비빔밥", 
  "짜장면", "짬뽕", "탕수육", "마라탕", "초밥", 
  "회덮밥", "라멘", "우동", "파스타", "피자", 
  "햄버거", "치킨", "삼겹살", "소고기 구이", "냉면", 
  "칼국수", "수제비", "떡볶이", "순대국", "해장국",
  "감자탕", "부대찌개", "갈비탕", "설렁탕", "국밥",
  "덮밥류", "카레", "스테이크", "샐러드", "샌드위치",
  "쌀국수", "팟타이", "마라샹궈", "양꼬치", "족발",
  "보쌈", "닭갈비", "찜닭", "아구찜", "해물찜",
  "오징어볶음", "낙지볶음", "쭈꾸미볶음", "곱창", "막창",
  "샤브샤브", "훠궈", "밀면", "막국수", "콩국수"
];

const recommendBtn = document.getElementById("recommend-btn");
const resultsContainer = document.getElementById("results-container");

/**
 * Returns an array of `count` randomly selected unique items from `arr`.
 */
function getRandomItems(arr, count) {
  // Create a copy of the array so we don't mutate the original
  const shuffled = [...arr];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the first `count` items
  return shuffled.slice(0, count);
}

/**
 * Renders the recommendations into the DOM.
 */
function renderRecommendations(recommendations) {
  // Clear previous results
  resultsContainer.innerHTML = '';
  
  // Create and append new result items
  recommendations.forEach(food => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("food-item");
    itemEl.textContent = food;
    resultsContainer.appendChild(itemEl);
  });
}

/**
 * Event handler for the recommendation button.
 */
function handleRecommendClick() {
  const selectedFoods = getRandomItems(foods, 5);
  renderRecommendations(selectedFoods);
}

// Add event listener to the button
if (recommendBtn) {
  recommendBtn.addEventListener("click", handleRecommendClick);
} else {
  console.error("Recommendation button not found in the DOM.");
}

/* Dark/Light Mode Theme Toggle */
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Check local storage or system preference on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}
