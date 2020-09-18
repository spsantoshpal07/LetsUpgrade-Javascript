let busData = [
]

if(localStorage.getItem('busData') == null) {
    localStorage.setItem('busData', JSON.stringify(busData));
} else {
    busData = JSON.parse(localStorage.getItem('busData'));
}

const onDelete = (index) => {
    busData.splice(index,1)
    localStorage.setItem('busData', JSON.stringify(busData));
    displayData(JSON.parse(localStorage.getItem('busData')));
}

const addBusData = (event) => {
    event.preventDefault();

    let newBus = {};

    newBus.name = document.getElementById('name').value;
    newBus.source = document.getElementById('source').value;
    newBus.destination = document.getElementById('destination').value;
    newBus.number = document.getElementById('number').value;
    newBus.capacity = Number(document.getElementById('capacity').value);

    busData.push(newBus);
    localStorage.setItem('busData', JSON.stringify(busData));
    displayData(JSON.parse(localStorage.getItem('busData')));
}

const displayData = (array) => {
    let htmlData = '';
    array.forEach((arrData, index) => {
        let row = `<tr>
            <td>${arrData.number}</td>
            <td>${arrData.name}</td>
            <td>${arrData.source}</td>
            <td>${arrData.destination}</td>
            <td>${arrData.capacity}</td>
            <th><button onclick='onDelete(${index})'>Delete</button></th>
        </tr>`;
        htmlData += row;
    });
    document.getElementsByClassName('tabledata')[0].innerHTML=htmlData;
}

displayData(JSON.parse(localStorage.getItem('busData')));

const onSearch = (event) => {
    let search = busData.filter(
        (arrData) => (arrData.source.toLowerCase().includes(event.target.value.toLowerCase())) || (arrData.destination.toLowerCase().includes(event.target.value.toLowerCase())));
    displayData(search);
}