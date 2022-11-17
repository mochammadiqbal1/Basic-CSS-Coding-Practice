let user = {
    Monica: {
        name : "Monica",
        gender: "Female",
        age: 17,
        email: "Monica@dingdong.com",
        favoritColor: ["Yellow,Pink,White,Purple"],
        isHavePet: "Yes",
        education: [
            {
                name:"SD 01",
                city: "jakarta",
                graduate: 2016
            },

            {
                name:"SMP 02",
                city: "jakarta",
                graduate: 2019
            },

            {
                name:"SMA 03",
                city:"tanggerang"
                
            }
         ],
        
        favoritRestaurant : ["Bento", "Sushi", "Pancake", "Eggy","Bento","Eggy","Padang","Tteok","Sushi","Sushi"],
    },
    wendy: {
        name : "Wendy",
        gender: "Male",
        age: 17,
        email: "wendy@dingdong.com",
        favoritColor: ["Blue", "Black","Grey"],
        isHavePet: "No",
        education: [
        {
            name:"SD 02",
            city: "jakarta",
            graduate: "2010"
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: "2013"
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: "2016"
        },
        {
            name: "Universitas Maju",
            city: "tanggerang"
        }
        ],

        favoritRestaurant : ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Pancake", "Geprek", "Eggy"],
    },
};

console.log("Nama : " + user.wendy.name);
console.log("SMA : " + user.wendy.education[2].name);
console.log("Kota : " + user.wendy.education[2].city);
console.log("Makana Favorit : " + user.wendy.favoritRestaurant[5]);
