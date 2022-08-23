console.log("This is working");

const data = [
    {
        name: "Ahmad",
        age: 21,
        city: "Peshawar",
        language: "javaScript",
        framework: "node js",
        image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        name: "Mubasher",
        age: 24,
        city: "Peshawar",
        language: "Networking",
        framework: "Networking",
        image: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
        name: "Noman",
        age: 21,
        city: "Peshawar",
        language: "Accounting",
        framework: "Accounting",
        image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        name: "Farrukh",
        age: 21,
        city: "Peshawar",
        language: "javaScript",
        framework: "node js",
        image: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
        name: "Hashir",
        age: 22,
        city: "Peshawar",
        language: "javaScript",
        framework: "node js",
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
        name: "Kamran",
        age: 21,
        city: "Peshawar",
        language: "javaScript",
        framework: "node js",
        image: "https://randomuser.me/api/portraits/men/60.jpg"
    }
]

// CV Iterator

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++],
            done: false} : 
            {done: true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate !== undefined){
    image.innerHTML = `<img src="${CurrentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
    <li class="list-group-item">${CurrentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${CurrentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${CurrentCandidate.language}</li>
    <li class="list-group-item">with ${CurrentCandidate.framework} framework</li>
    </ul>`
    }
    else{
        alert("End of applications");
        window.location.reload();
    }
}