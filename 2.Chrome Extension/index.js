let leadsList = []
const inputElement = document.getElementById("inputElement")
const addButton = document.getElementById("addButton")
const ulElement = document.getElementById("leadsListUl")

addButton.addEventListener("click", function () {
    if(inputElement.value !== "") {
        leadsList.push(inputElement.value)
        inputElement.value = ""
        renderLeads()
    }
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < leadsList.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leadsList[i]}'>
                    ${leadsList[i]}
                </a>
            </li>
        `
    }
    ulElement.innerHTML = listItems
}