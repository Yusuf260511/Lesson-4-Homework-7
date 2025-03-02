const body = document.body;
const button = document.getElementById('button');

async function fetchApi() {
    try {
        const url = await fetch('https://randomuser.me/api/');
        const res = await url.json();
        const data = res.results[0];

        const picture = data.picture;
        const img = picture.medium;
        const name = data.name;
        const first = name.first;
        const last = name.last;
        const phone = data.phone;
        const location = data.location;
        const street = location.street;
        const streetName = street.name;
        const city = location.city;
        const dob = data.dob;
        const age = dob.age;
        const email = data.email;

        let user = document.getElementById('user');
        if (user) {
            user.remove();
        }

        user = document.createElement('div');
        user.id = 'user';
        user.innerHTML = `
            <img src="${img}" alt="" id="userimg">
            <div id="texts">
                <div id="maininfo">
                    <h1 id="name">${first} ${last}</h1>
                    <h2 id="job">Frontend Developer</h2>
                </div>
                <div id="otherinfo">
                    <p id="phone">Phone: ${phone}</p>
                    <p id="address">Address: ${streetName}, ${city}</p>
                    <p id="age">Age: ${age}</p>
                    <p id="email">Email: ${email}</p>
                </div>

                <button id="button">Change user</button>
            </div>
        `;
        body.appendChild(user);
    } catch (error) {
        console.log('Произошла ошибка при получении данных. Ошибка:', error);
    }
}

button.addEventListener('click', fetchApi);
