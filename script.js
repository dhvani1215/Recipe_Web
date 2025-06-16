// Recipe data for timers and steps
const recipeData = {
  "chocolate-cake": { totalTime: 75 * 60, totalSteps: 8 },
  "pasta-primavera": { totalTime: 45 * 60, totalSteps: 8 },
  "chicken-curry": { totalTime: 65 * 60, totalSteps: 8 },
  "berry-smoothie": { totalTime: 5 * 60, totalSteps: 8 },
  "garlic-bread": { totalTime: 25 * 60, totalSteps: 8 },
}

let currentRecipe = "chocolate-cake"
const cookingStates = {}

// Initialize cooking states for all recipes
Object.keys(recipeData).forEach((recipe) => {
  cookingStates[recipe] = {
    currentStep: 0,
    cookingStarted: false,
    timer: null,
    timeRemaining: recipeData[recipe].totalTime,
  }
})

// Theme Management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)

  // Add a subtle animation effect
  document.body.style.transition = "all 0.3s ease"
  setTimeout(() => {
    document.body.style.transition = ""
  }, 300)
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
})

// Modal Functions
function showModal(icon, title, message, buttonText = "Awesome!") {
  const modal = document.getElementById("modal-overlay")
  const modalIcon = document.getElementById("modal-icon")
  const modalTitle = document.getElementById("modal-title")
  const modalMessage = document.getElementById("modal-message")
  const modalButton = modal.querySelector(".modal-button")

  modalIcon.textContent = icon
  modalTitle.textContent = title
  modalMessage.textContent = message
  modalButton.textContent = buttonText

  modal.classList.add("active")

  // Add keyboard support
  document.addEventListener("keydown", handleModalKeydown)
}

function closeModal() {
  const modal = document.getElementById("modal-overlay")
  modal.classList.remove("active")
  document.removeEventListener("keydown", handleModalKeydown)
}

function handleModalKeydown(e) {
  if (e.key === "Escape") {
    closeModal()
  }
}

// Close modal when clicking outside
document.getElementById("modal-overlay").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal()
  }
})

function switchRecipe(recipeId) {
  // Hide all recipe cards
  document.querySelectorAll(".recipe-card").forEach((card) => {
    card.classList.remove("active")
  })

  // Show selected recipe card
  document.getElementById(recipeId).classList.add("active")

  // Update tab states
  document.querySelectorAll(".recipe-tab").forEach((tab) => {
    tab.classList.remove("active")
  })
  event.target.classList.add("active")

  currentRecipe = recipeId
}

function toggleSection(recipeId, sectionName) {
  const content = document.getElementById(recipeId + "-" + sectionName + "-content")
  const toggle = document.getElementById(recipeId + "-" + sectionName + "-toggle")

  if (content.classList.contains("active")) {
    content.classList.remove("active")
    toggle.textContent = "Show " + (sectionName === "ingredients" ? "Ingredients" : "Instructions")
  } else {
    content.classList.add("active")
    toggle.textContent = "Hide " + (sectionName === "ingredients" ? "Ingredients" : "Instructions")
  }
}

function startCooking(recipeId) {
  const state = cookingStates[recipeId]
  state.cookingStarted = true
  state.currentStep = 0

  // Show cooking controls
  const container = document.getElementById(recipeId)
  container.querySelector(".start-cooking-btn").style.display = "none"
  container.querySelector(".next-step-btn").style.display = "inline-block"
  container.querySelector(".reset-btn").style.display = "inline-block"

  // Show timer
  document.getElementById(recipeId + "-timer-display").classList.add("active")

  // Start timer
  startTimer(recipeId)

  // Highlight first step
  highlightStep(recipeId, 0)

  // Auto-expand instructions if not already expanded
  const instructionsContent = document.getElementById(recipeId + "-instructions-content")
  if (!instructionsContent.classList.contains("active")) {
    toggleSection(recipeId, "instructions")
  }

  // Show start cooking modal
  const recipeName = document.querySelector(`#${recipeId} .recipe-title`).textContent
  showModal(
    "🚀",
    "Let's Cook!",
    `Starting your ${recipeName} journey! Follow the highlighted steps and enjoy the process.`,
    "Let's Go!",
  )
}

function nextStep(recipeId) {
  const state = cookingStates[recipeId]
  const totalSteps = recipeData[recipeId].totalSteps

  if (state.currentStep < totalSteps - 1) {
    // Mark current step as completed
    const steps = document.querySelectorAll(`#${recipeId}-steps-list .step-item`)
    steps[state.currentStep].classList.remove("active")
    steps[state.currentStep].classList.add("completed")

    // Move to next step
    state.currentStep++
    highlightStep(recipeId, state.currentStep)

    // Update progress bar
    updateProgressBar(recipeId)

    // If last step, change button text
    if (state.currentStep === totalSteps - 1) {
      document.querySelector(`#${recipeId} .next-step-btn`).textContent = "Finish! 🎉"
    }
  } else {
    // Cooking completed
    completeCooking(recipeId)
  }
}

function highlightStep(recipeId, stepIndex) {
  const steps = document.querySelectorAll(`#${recipeId}-steps-list .step-item`)

  // Remove active class from all steps
  steps.forEach((step) => step.classList.remove("active"))

  // Add active class to current step
  if (steps[stepIndex]) {
    steps[stepIndex].classList.add("active")
    steps[stepIndex].scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

function updateProgressBar(recipeId) {
  const state = cookingStates[recipeId]
  const totalSteps = recipeData[recipeId].totalSteps
  const progress = ((state.currentStep + 1) / totalSteps) * 100
  document.getElementById(recipeId + "-progress-bar").style.width = progress + "%"
}

function resetCooking(recipeId) {
  const state = cookingStates[recipeId]
  state.cookingStarted = false
  state.currentStep = 0

  // Reset UI
  const container = document.getElementById(recipeId)
  container.querySelector(".start-cooking-btn").style.display = "inline-block"
  container.querySelector(".next-step-btn").style.display = "none"
  container.querySelector(".next-step-btn").textContent = "Next Step ➡️"
  container.querySelector(".reset-btn").style.display = "none"

  // Hide timer
  document.getElementById(recipeId + "-timer-display").classList.remove("active")

  // Stop timer
  if (state.timer) {
    clearInterval(state.timer)
    state.timer = null
  }
  state.timeRemaining = recipeData[recipeId].totalTime
  updateTimerDisplay(recipeId)

  // Reset steps
  const steps = document.querySelectorAll(`#${recipeId}-steps-list .step-item`)
  steps.forEach((step) => {
    step.classList.remove("active", "completed")
  })

  // Reset progress bar
  document.getElementById(recipeId + "-progress-bar").style.width = "0%"

  // Show reset confirmation modal
  showModal("🔄", "Recipe Reset", "Your cooking session has been reset. Ready to start fresh!", "Got it!")
}

function completeCooking(recipeId) {
  const state = cookingStates[recipeId]
  const totalSteps = recipeData[recipeId].totalSteps

  // Mark last step as completed
  const steps = document.querySelectorAll(`#${recipeId}-steps-list .step-item`)
  steps[state.currentStep].classList.remove("active")
  steps[state.currentStep].classList.add("completed")

  // Update progress bar to 100%
  document.getElementById(recipeId + "-progress-bar").style.width = "100%"

  // Stop timer
  if (state.timer) {
    clearInterval(state.timer)
    state.timer = null
  }

  // Show completion modal
  const recipeName = document.querySelector(`#${recipeId} .recipe-title`).textContent
  showModal(
    "🎉",
    "Congratulations!",
    `Your delicious ${recipeName} is ready! Time to enjoy your culinary masterpiece.`,
    "Amazing!",
  )

  // Reset for next use
  setTimeout(() => {
    resetCooking(recipeId)
  }, 3000)
}

function startTimer(recipeId) {
  const state = cookingStates[recipeId]
  state.timer = setInterval(() => {
    state.timeRemaining--
    updateTimerDisplay(recipeId)

    if (state.timeRemaining <= 0) {
      clearInterval(state.timer)
      state.timer = null
      showModal(
        "⏰",
        "Time's Up!",
        "Your cooking time has finished! Check your dish and see how it turned out.",
        "Check Now!",
      )
    }
  }, 1000)
}

function updateTimerDisplay(recipeId) {
  const state = cookingStates[recipeId]
  const minutes = Math.floor(state.timeRemaining / 60)
  const seconds = state.timeRemaining % 60
  const display = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  document.getElementById(recipeId + "-timer-text").textContent = display
}

// Add click handlers for ingredients to create interactive effects
document.addEventListener("DOMContentLoaded", () => {
  const ingredients = document.querySelectorAll(".ingredient-item")
  ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function () {
      this.style.background = "var(--mint-green)"
      this.style.borderColor = "var(--dark-mint)"
      this.style.transform = "scale(1.02)"
      setTimeout(() => {
        this.style.background = ""
        this.style.borderColor = ""
        this.style.transform = ""
      }, 1000)
    })
  })
})

// Print functionality
function printRecipe() {
  // Expand all sections before printing
  const sections = ["ingredients", "instructions"]
  sections.forEach((section) => {
    const content = document.getElementById(currentRecipe + "-" + section + "-content")
    if (!content.classList.contains("active")) {
      toggleSection(currentRecipe, section)
    }
  })

  setTimeout(() => {
    window.print()
  }, 500)
}
