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
    const destinationInput = document.getElementById('destination').value
    const checkInInput = document.getElementById('check_in').value
    const checkOut = document.getElementById('check_out').value
    const roomGuestInput = document.getElementById('room_guest').value
    console.log(destinationInput, checkInInput, checkOut, roomGuestInput)
}