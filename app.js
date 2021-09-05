let storeItem = [];
const btnAdd = document.getElementById('btn-add');
const btnDel = document.getElementById('btn-del');
const inputItems = document.getElementById('input-items');
const fullListHolder = document.getElementById('list');

function addListItem() {
    let s = inputItems.value;
    if (s) {
        let li = document.createElement('li');
        li.innerText = s;
        fullListHolder.appendChild(li);
        inputItems.value = '';
        storeItem.push(s);
        saveAllItems()
    }
}
function saveAllItems() {
    localStorage.setItem("listItem", JSON.stringify(storeItem));
}
function loadItems() {
    if (storeItem) {
        
        storeItem.forEach(s => {
            // console.log(s)

            let li = document.createElement('li');
            li.innerText = s;
            fullListHolder.appendChild(li);
            // inputItems.value = '';
            // storeItem.push(s);
            // saveAllItems()

        });
    }
}

function deleteAllItemsFromList() {
    fullListHolder.innerHTML = ''
    storeItem=[]
    saveAllItems()
}
function onLoad() {
    let temp = localStorage.getItem("listItem");
    if (temp) {
        storeItem = JSON.parse(localStorage.getItem("listItem"));
        console.log(storeItem)
        loadItems();
    }
}

onLoad()
btnDel.addEventListener('click', deleteAllItemsFromList)

btnAdd.addEventListener("click", addListItem)