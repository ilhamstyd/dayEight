const testimonialPeople = [
    {
        author: "adipati",
        coment: "lebih baik digaji 10jt tapi penuh syukur dari pada digaji 5jt tapi selalu mengeluh",
        image:  "https://akcdn.detik.net.id/visual/2019/08/06/63f49254-791f-46b9-84d3-10f5aa074a00_43.jpeg?w=900&q=90",
        rating: 1,
    },
    {
        author: "NACHT ANAK IBLIS",
        coment: "Kebanyakan berteman dengan iblis juga tidak baik, lebih baik berteman dengan janda pirang",
        image:  "https://e1.pxfuel.com/desktop-wallpaper/79/814/desktop-wallpaper-nacht-black-bull%E2%99%A3%EF%B8%8F-nacht-black-clover.jpg",
        rating: 2,
    },
    {
        author: "jefril jengkol",
        coment: "uang bukan segalanya tapi segalanya butuh uang... memang membagongkan dunia ini",
        image:  "https://media.suara.com/pictures/653x366/2023/04/07/23590-aktor-jefri-nichol.jpg",
        rating: 3,
    },
];

function allTestimoni() {
    let testimoniHTML = "";

    testimonialPeople.forEach(function (item) {
        testimoniHTML += `<div class="testimonial">
                            <img src="${item.image}" alt="" class="profil-testimonial"/>
                            <p class="coment">${item.coment}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author"> ${item.rating}<i class="fa-solid fa-star"></i></p>
                        </div>`;
    });

    document.getElementById("testimoni").innerHTML = testimoniHTML;
}

allTestimoni();

function filterTestimoni(rating) {
    let testimoniHTML =  "";

    const testimoniFilter = testimonialPeople.filter(function(item) {
        return item.rating === rating;
    });

    if (testimoniFilter.length === 0){
        testimoniHTML += `<h1>data tidak ditemukan<h1/>`;

    }else {
        testimoniFilter.forEach(function(item) {
        testimoniHTML += `<div class="testimonial">
        <img src="${item.image}" alt="" class="profil-testimonial"/>
        <p class="coment">${item.coment}</p>
        <p class="author">- ${item.author}</p>
        <p class="author"> ${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>`;
    });
}
document.getElementById("testimoni").innerHTML = testimoniHTML;
}