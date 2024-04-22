// const searchResult = document.querySelector('.search-result')
// const elList = document.querySelector('.list')


// searchResult.textContent = `Search results: ${daryoPostlari.length}`
// for(let item of daryoPostlari){
//     console.log(item);
//     const ListBox =document.createElement('li')
//     const heading = document.createElement('h3')
//     const newDate = document.createElement('p')
//     const newLink = document.createElement('a')
    


//     ListBox.setAttribute('class', 'p-4 border rounded-md')
//     heading.setAttribute('class', 'font-medium text-xl mb-2')
//     newDate.setAttribute('class', 'mb-4')
//     newLink.setAttribute('href', item.link)
//     newLink.setAttribute('class', 'py-1.5 px-3 rounded-md border border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white transition')



//     heading.textContent = item.title
//     newDate.textContent = item.date 
//     newLink.textContent = "link"

//     elList.append(ListBox )
//     ListBox.append(heading, newDate, newLink)
// }












// const elForm = document.querySelector('.form')
// const elFormInput = document.querySelector('.form-input')
// const elList = document.querySelector('.list')

// const todos = []

// elForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const inputValue = elFormInput.value

//     const todoObj = {
//         title: inputValue,
//         id: todos.length,
//         isCompleted: false,
        

//     }
//     todos.push(todoObj)
//     elList.innerHTML = null


    
//     for(let item of todos){
//         const newItem = document.createElement('li')
//         const newTextId = document.createElement ('p')
//         const newRadioInput = document.createElement ('input')
//         const newMainText = document.createElement ('p')
//         const newEditBtn = document.createElement ('button')
//         const newRemoveBtn = document.createElement ('button')


//         newItem.setAttribute ('class', 'flex gap-10 items-center justify-center mb-2')
//         newRadioInput.setAttribute ('type', 'checkbox' )
//         newEditBtn.setAttribute ('class', 'py-2 px-2.5 text-green-600 border border-green-600 hover:bg-green-600 hover:text-white rounded-md transition')
//         newRemoveBtn.setAttribute ('class', 'py-2 px-2.5 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-md transition')


                
//         newTextId.textContent = 'id:' + item.id 
//         newEditBtn.textContent = 'Edit'
//         newRemoveBtn.textContent = 'Remove'
//         newMainText.textContent = item.title



//         elList.append(newItem)
//         newItem.append(newTextId, newRadioInput, newMainText, newEditBtn, newRemoveBtn)
     
//     }
        
// }
// )