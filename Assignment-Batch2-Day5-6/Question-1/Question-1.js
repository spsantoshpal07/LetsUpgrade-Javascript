const data = [
    {
        name: 'Beckky',
        age: 25,
        city: 'Texas',
        salary: '20000$'
    },
    {
        name: 'Neilson',
        age: 32,
        city: 'Dallas',
        salary: '15500$'
    },
    {
        name: 'Rahul',
        age: 26,
        city: 'Delhi',
        salary: 'Rs. 57800'
    },
    {
        name: 'Abhinaba',
        age: 26,
        city: 'Kolkata',
        salary: 'Rs. 45000'
    },
    {
        name: 'Ayush',
        age: 28,
        city: 'Darbhanga',
        salary: 'Rs. 32000'
    }
]

const onDelete = (index) => {
    data.splice(index, 1);
    displayData(data);
}

const displayData = (array) => {
    let htmlData = '';
    array.forEach((arrData, index) => {
        let row = `<tr>
            <td>${index+1}</td>
            <td>${arrData.name}</td>
            <td>${arrData.age}</td>
            <td>${arrData.city}</td>
            <td>${arrData.salary}</td>
            <th><button onclick='onDelete(${index})'>Delete</button></th>
        </tr>`;
        htmlData += row;
    });
    document.getElementsByClassName('tabledata')[0].innerHTML=htmlData;
}

displayData(data);

const onSearch = (event) => {
    let search = data.filter(
        (arrData) => (arrData.name.toLowerCase().includes(event.target.value.toLowerCase())) || (arrData.city.toLowerCase().includes(event.target.value.toLowerCase())));
    console.log(search)
    displayData(search);
}