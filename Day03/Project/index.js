// just practice ref-reel

async function get_data(){
    let url = "https://api.github.com/users/Vaibhya012"
    let response = await fetch(url)
    let data = await response.json()
    Name = data.login
    followers = data.followers
    id = data.id
    console.log("Name :", Name)
    console.log("Followers :", followers)
    console.log("ID :", id)
}

get_data()