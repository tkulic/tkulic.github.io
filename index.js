const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")

let isNavOpen = false

// exclude navigation links from tab order when navigation hidden
function toggleTabIndex(value) {
    navLinks.forEach(link => {
        link.tabIndex = value
        isNavOpen = value === 0 ? true : false
    })
}

toggleTabIndex(-1)

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open')
    if (isNavOpen) {
        toggleTabIndex(-1)
    } else {
        toggleTabIndex(0)
    }

})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
        toggleTabIndex(-1)
    })
})

