let sideBar = document.querySelector('#sidebar')
const handleOpenSidebar = () => {
    sideBar.classList.add('translate-x-0', 'shadow-xl')
    sideBar.classList.remove('translate-x-full')
}

const handleCloseSidebar = () => {
    sideBar.classList.remove('translate-x-0', 'shadow-xl')
    sideBar.classList.add('translate-x-full')
}