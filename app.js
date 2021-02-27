// sppiner
const toggleSpiner = (show) => {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.toggle('d-none');
    spinner.classList.toggle('d-flex');
}

const loadData = async () => {
    const url = 'https://randomuser.me/api/?results=48';
    toggleSpiner();
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCountries(data.results);
    }
    catch (error) {
        console.log(error);
    }
}
loadData();

const displayCountries = users => {
    const usersDiv = document.getElementById('users');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        const countryInfo = `
        <div class="col">
                    <div class="card">
                    <img class="w-75 py-2 mx-auto" src="${user.picture.large}" alt="${user.name}">
                    <div class="card-body">
                        <h2 class="card-title">${user.name.first} ${user.name.last}</h2>
                    </div>
                    <div class="card-footer">
                        <h5>${user.location.country}</h5>
                        <h5> City:${user.location.city}</h5>
                        <h5>Phone: ${user.phone}</h5>
                        <h5>Age: ${user.dob.age} Years Old</h5>
                    </div>
                    </div>
            </div>
        `;
        userDiv.innerHTML = countryInfo;
        usersDiv.appendChild(userDiv);
    });
    toggleSpiner();
}

