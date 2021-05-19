const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        para: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        para: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        para: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        para: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const img = document.getElementById("p-img1");
const nameA = document.getElementById("name1");
const job = document.getElementById("job1");
const para = document.getElementById("para1");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const reset = document.querySelector("#reset");


let currentItem = 1;
showPer(currentItem);

function showPer(person) {
    const item = reviews[person - 1];
    img.src = item.img;
    nameA.textContent = item.name;
    job.textContent = item.job;
    para.textContent = item.para;
}
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem <= 0) {
        currentItem = 4;
    }
    showPer(currentItem);
});
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem <= 0 || currentItem > 4) {
        currentItem = 1;
    }
    showPer(currentItem);
});
reset.addEventListener("click", function() {
    currentItem = (Math.floor(Math.random() * ((reviews.length) - 1))) + 1;
    showPer(currentItem);
});