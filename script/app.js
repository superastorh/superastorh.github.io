/*page product (filter , add)*/
let myProduct = [
    {

        type: 1,
        title: "بوت للقهوة",
        img:
            `src/bot.jpg`,
        text:
            `عبود للشاي و القهوه

                    بوت للتسلية في المجموعات`,

        url: "https://t.me/artea_bot"
    },
    {

        type: 2,

        title: "موقع للغة الف",

        img: `src/alif.jpg`,

        text: `موقع لغة الف البرمجية

            محاولة عمل اعاد تصميم لموقع لغه الف البرمجية`,

        url: "https://superastorh.github.io/aliflang/"

    },

];

let tap = $(".pro-page .type-pro >*");
let pros;
let imgList = $(".pro-page .img-list");
let type = 0;

tap.click(
    function () {
        tap.removeClass("active");
        this.classList.add('active');
        type = Number.parseInt(this.getAttribute("data-type"));
        listFilter();
    }
);
creatList();

function creatList() {
    imgList[0].innerHTML = "";
    myProduct.forEach(
        (e, id) => {
            imgList[0].innerHTML += makeHolder(id, e.title, e.text, e.img, e.type, e.url);
        }
    );
    pros = $(".pro-page .img-holder");
}

function makeHolder(id, title, text, img, type, url) {
    return `
    <div class="img-holder" id="img-holder-${id}" data-type="${type}">
            <a href="${url}">
                <div class="holder">
                    <img src="${img}" alt="" srcset="">
                </div>
                <h2>${title}</h2>
                <p>${text}</p>
            </a>
     </div>
    `;
}

function listFilter() {
    if (type == 0) {
        pros.fadeIn()
    } else {
        pros.filter('[data-type!="' + type + '"]').fadeOut(400 , () => {
            pros.filter('[data-type="' + type + '"]').fadeIn();
        });
    }
}

/*end page product */