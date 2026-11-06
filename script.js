// Mobile Navigation Drawer Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking any navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Dynamic Card Filter / Search Bar Functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  const allCards = document.querySelectorAll('.card');

  allCards.forEach(card => {
    const cardData = card.getAttribute('data-name') || '';
    const cardTitle = card.querySelector('h3').textContent.toLowerCase();
    
    if (cardData.includes(query) || cardTitle.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

searchBtn.addEventListener('click', filterCards);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') filterCards();
});

// Interactive Destination Modal Popup
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSeason = document.getElementById('modalSeason');
const modalAccess = document.getElementById('modalAccess');

function openModal(title, description, season, access) {
  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modalSeason.textContent = season;
  modalAccess.textContent = access;
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

// Close modal when clicking on dark backdrop outside modal window
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Interactive Trip Cost Estimator
const calculateBtn = document.getElementById('calculateBtn');
const calcDaysInput = document.getElementById('calcDays');
const calcPeopleInput = document.getElementById('calcPeople');
const calcStyleSelect = document.getElementById('calcStyle');
const budgetOutput = document.getElementById('budgetOutput');

calculateBtn.addEventListener('click', () => {
  const days = parseInt(calcDaysInput.value) || 1;
  const people = parseInt(calcPeopleInput.value) || 1;
  const ratePerPersonPerDay = parseInt(calcStyleSelect.value);

  const totalCost = days * people * ratePerPersonPerDay;
  
  // Format as Indian Rupee (INR) currency representation
  budgetOutput.textContent = '₹' + totalCost.toLocaleString('en-IN');
});