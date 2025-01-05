// sidebar
let sideBar = document.querySelector('#sidebar')
const handleOpenSidebar = () => {
    sideBar.classList.add('translate-x-0')
    sideBar.classList.remove('translate-x-full')
}

const handleCloseSidebar = () => {
    sideBar.classList.remove('translate-x-0')
    sideBar.classList.add('translate-x-full')
}

// filter
const handleFilter = () => {
    let destinationInput = document.getElementById('destination')
    if (destinationInput) {

        destinationInput.value
    }
}