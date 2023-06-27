
let users = [
    {id: 1, firstname: "Jean", lastname: "Pol", city: "Ciney", region: "Region Wallone", sex : "m"},
    {id: 2, firstname: "Alice", lastname: "Dubois", city: "Paris", region: "Île-de-France", sex : "f"},
    {id: 3, firstname: "John", lastname: "Smith", city: "New York", region: "New York" , sex : "m"},
    {id: 4, firstname: "Emma", lastname: "Johnson", city: "London", region: "England", sex : "f"},
    {id: 5, firstname: "Mohammed", lastname: "Ali", city: "Cairo", region: "Giza", sex : "m"},
    {id: 6, firstname: "Laura", lastname: "Martinez", city: "Barcelona", region: "Catalonia", sex : "f"},
    {id: 7, firstname: "Luca", lastname: "Rossi", city: "Rome", region: "Lazio", sex : "m"},
    {id: 8, firstname: "Sophie", lastname: "Lefebvre", city: "Paris", region: "Île-de-France", sex : "f"},
    {id: 9, firstname: "David", lastname: "Lee", city: "Los Angeles", region: "California", sex : "m"},
    {id: 10, firstname: "Marta", lastname: "Garcia", city: "Madrid", region: "Community of Madrid", sex : "f"},
    {id: 11, firstname: "Ryan", lastname: "Wilson", city: "Sydney", region: "New South Wales", sex : "m"},
    {id: 12, firstname: "Julia", lastname: "Müller", city: "Berlin", region: "Berlin", sex : "f"},
    {id: 13, firstname: "Gabriel", lastname: "Dubois", city: "Montreal", region: "Quebec", sex : "m"},
    {id: 14, firstname: "Isabella", lastname: "Ricci", city: "Rome", region: "Lazio", sex : "f"},
    {id: 15, firstname: "Liam", lastname: "Anderson", city: "Melbourne", region: "Victoria", sex : "m"},
    {id: 16, firstname: "Emma", lastname: "Sanchez", city: "Barcelona", region: "Catalonia", sex : "f"},
    {id: 17, firstname: "Alex", lastname: "Taylor", city: "London", region: "England", sex : "m"},
    {id: 18, firstname: "Chloé", lastname: "Bouchard", city: "Montreal", region: "Quebec", sex : "f"},
    {id: 19, firstname: "Jacob", lastname: "Kumar", city: "Delhi", region: "Delhi", sex : "m"},
    {id: 20, firstname: "Olivia", lastname: "Leroy", city: "Paris", region: "Île-de-France", sex : "f"},
    {id: 21, firstname: "Noah", lastname: "Gonzalez", city: "Barcelona", region: "Catalonia", sex : "m"},
    {id: 22, firstname: "Ava", lastname: "Peterson", city: "New York", region: "New York", sex : "f"},
    {id: 23, firstname: "Lucas", lastname: "Dubois", city: "Paris", region: "Île-de-France", sex : "m"},
    {id: 24, firstname: "Sophia", lastname: "Cohen", city: "Los Angeles", region: "California", sex : "f"},
    {id: 25, firstname: "Emily", lastname: "Lavoie", city: "Montreal", region: "Quebec", sex : "f"},
    {id: 26, firstname: "Matthew", lastname: "Smith", city: "London", region: "England", sex : "m"},
    {id: 27, firstname: "Charlotte", lastname: "Wang", city: "Beijing", region: "Beijing", sex : "f"},
    {id: 28, firstname: "Dylan", lastname: "Garcia", city: "Madrid", region: "Community of Madrid", sex : "m"},
    {id: 29, firstname: "Amelia", lastname: "Lam", city: "Hong Kong", region: "Hong Kong", sex : "f"},
    {id: 30, firstname: "Daniel", lastname: "Leroy", city: "Paris", region: "Île-de-France", sex : "m"},
    {id: 31, firstname: "Madison", lastname: "Andersen", city: "Sydney", region: "New South Wales", sex : "f"},
    {id: 32, firstname: "Joseph", lastname: "Lefevre", city: "Paris", region: "Île-de-France", sex : "m"},
    {id: 33, firstname: "Harper", lastname: "Dubois", city: "Montreal", region: "Quebec", sex : "f"},
    {id: 34, firstname: "Alexander", lastname: "Sato", city: "Tokyo", region: "Tokyo", sex : "m"},
    {id: 35, firstname: "Mia", lastname: "Dupont", city: "Paris", region: "Île-de-France", sex : "f"},
    {id: 36, firstname: "William", lastname: "Lee", city: "Los Angeles", region: "California", sex : "m"},
    {id: 37, firstname: "Sofia", lastname: "Gomez", city: "Barcelona", region: "Catalonia", sex : "f"},
    {id: 38, firstname: "Ethan", lastname: "Brown", city: "London", region: "England", sex : "m"},
    {id: 39, firstname: "Abigail", lastname: "Laurent", city: "Montreal", region: "Quebec", sex : "m"},
    {id: 40, firstname: "James", lastname: "Kumar", city: "Delhi", region: "Delhi", sex : "m"},
    {id: 41, firstname: "Ella", lastname: "Leblanc", city: "Paris", region: "Île-de-France", sex : "f"},
    {id: 42, firstname: "Benjamin", lastname: "Gonzalez", city: "Barcelona", region: "Catalonia", sex : "m"},
    {id: 43, firstname: "Elizabeth", lastname: "Chen", city: "Shanghai", region: "Shanghai", sex : "f"},
    {id: 44, firstname: "Michael", lastname: "Ricci", city: "Rome", region: "Lazio", sex : "m"},
    {id: 45, firstname: "Camila", lastname: "Miller", city: "New York", region: "New York", sex : "f"},
    {id: 46, firstname: "Henry", lastname: "Rousseau", city: "Paris", region: "Île-de-France", sex : "m"},
    {id: 47, firstname: "Victoria", lastname: "Lopez", city: "Barcelona", region: "Catalonia", sex : "f"},
    {id: 48, firstname: "Sebastian", lastname: "Wu", city: "Shanghai", region: "Shanghai", sex : "m"},
    {id: 49, firstname: "Samantha", lastname: "Caron", city: "Montreal", region: "Quebec", sex : "f"},
    {id: 50, firstname: "Daniel", lastname: "Kim", city: "Seoul", region: "Seoul", sex : "m"}
    ];


let search = () => {
    let value = document.getElementById("search").value
    
    let result = users.filter((i) => 
    {
        if (!value) {
            return false;
        }

        let userName = (i.firstname.toLowerCase() + " " + i.lastname.toLowerCase())
        
        let nameReverse = (i.lastname.toLowerCase() + " " + i.firstname.toLowerCase())
        
        return userName.includes(value.toLowerCase()) || nameReverse.includes(value.toLowerCase());
    })

    

    showResult(result)

    
}
const timer = ms => new Promise(res => setTimeout(res, ms))
let showResult = async (result) => {
    let divResult = document.getElementById("searchResult")

    divResult.innerHTML = ""
    for (const user of result) {

        let elem = document.getElementsByClassName("searchLabel")[0].cloneNode(true)
        elem.style.visibility = "visible"
        let url = `https://www.randomuser.me/api/portraits/${ user.sex == "m" ? "men" : "women" }/${user.id}.jpg`
        elem.getElementsByClassName("image")[0].children[0].src = url
        
        elem.getElementsByClassName("name")[0].innerText = user.firstname + " " + user.lastname;
        elem.getElementsByClassName("city")[0].innerText = user.city + ", " + user.region
        
        divResult.appendChild(elem)
        await timer(20)
    }

}


