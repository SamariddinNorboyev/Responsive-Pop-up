const showModal = (openButton, modalContent)=>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show__modal');
        })
    }
}
showModal('open__modal', 'modal__container')





const closeBtn = document.querySelectorAll('.close__modal')
function closeModal(){
    console.log('h');
    const modalContainer = document.getElementById('modal__container')
    modalContainer.classList.remove('show__modal')
}

closeBtn.forEach(c => c.addEventListener('click', closeModal))