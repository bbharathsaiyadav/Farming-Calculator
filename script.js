function showData() {
    let data = JSON.parse(localStorage.getItem("farmBook")) || [];

    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((item, index) => {
        list.innerHTML += `
        <div class="card">
            <h4>${item.title}</h4>
            <p>${item.note}</p>

            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        </div>`;
    });
}

function deleteNote(index) {
    let data = JSON.parse(localStorage.getItem("farmBook")) || [];

    data.splice(index, 1);

    localStorage.setItem("farmBook", JSON.stringify(data));

    showData();
}

function editNote(index) {
    let data = JSON.parse(localStorage.getItem("farmBook")) || [];

    document.getElementById("title").value = data[index].title;
    document.getElementById("note").value = data[index].note;

    data.splice(index, 1);

    localStorage.setItem("farmBook", JSON.stringify(data));

    showData();
}