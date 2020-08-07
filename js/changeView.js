document.addEventListener('DOMContentLoaded', function () {

    const gridBtn = document.querySelector(".gridBtn");
    const listWrapper = document.querySelector(".category-list");
    const gridWrapper = document.querySelector(".category-grid");
    const listBtn = document.querySelector(".listBtn");

    function changeViewGrid() {
        if (gridWrapper.classList.contains('d-none')) {
            gridWrapper.classList.remove('d-none');
            gridBtn.classList.add('active');
            listWrapper.classList.add('d-none');
            listBtn.classList.remove('active');
        } 
    }

    
    function changeViewList() {
        if (listWrapper.classList.contains('d-none')) {
            listWrapper.classList.remove('d-none');
            listBtn.classList.add('active');
            gridWrapper.classList.add('d-none');
            gridBtn.classList.remove('active');
        } 
    }


    gridBtn.addEventListener('click', changeViewGrid);
    listBtn.addEventListener('click', changeViewList);
});