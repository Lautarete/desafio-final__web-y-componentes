function mountServicesJobs(domElToMount, cardClass) {
  function createCard(apiResults) {
    const servicesJobsElHTML = `
  <div class="services-jobs__card">
    <a href="" class="services-jobs__link">
      <div class="services-jobs__img-container">
        <img
          class="services-jobs__img"
          src=""
          alt=""
        />
      </div>
      <div class="services-jobs__text-container">
        <h3 class="services-jobs__card-title">Trabajo</h3>
        <p class="services-jobs__card-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque alias, eius tempora ipsum, nihil maxime doloribus vitae
          sunt asperiores beatae aliquid laboriosam voluptatibus nostrum
          odit deleniti id dolores perspiciatis et! a ipsum, nihil
          maxime doloribus vitae superiores beatae aliquid laboriosam
          voluptatibus nostrum odit deleniti id dolores perspiciatis
        </p>
      </div>
    </a>
  </div>      
`;
    const cardContainerEl = document.createElement("div");
    cardContainerEl.innerHTML = servicesJobsElHTML;

    //hay que hacer esto, con un for para que quede bien elegante y que se formen todas las cards
    for (const cardInfo of apiResults) {
      // console.log(cardInfo);

      cardContainerEl.querySelector(".services-jobs__card-title").textContent =
        cardInfo.title;
      cardContainerEl.querySelector(".services-jobs__card-p").textContent =
        cardInfo.description;
      cardContainerEl.querySelector(".services-jobs__img").src =
        cardInfo.imgURL;

      mountComponentOnElement(domElToMount, cardContainerEl.innerHTML);
    }
  }

  function readApi(cardClass) {
    const apiLink =
      "https://cdn.contentful.com/spaces/cmvsqfhv17x5/environments/master/entries?access_token=Iatas7cBmTOmab0Zdh4BTL3vFd5fTW3csveFmujnBtc";

    fetch(apiLink).then((r) => {
      r.json().then((r) => {
        const cardTexts = r.items.filter((item) => {
          return item.fields.class == cardClass;
        });
        const cardImgArr = r.includes.Asset.filter((img) => {
          return img.fields.title.includes("card-img__");
        });

        let processedInfo = [];

        for (const results of cardTexts) {
          const currentValueimgURL = cardImgArr.find((imgInfo) => {
            return imgInfo.fields.title == "card-img__" + results.fields.title;
          });

          const newCardInfo = {
            title: results.fields.title,
            description: results.fields.description,
            imgURL: currentValueimgURL.fields.file.url,
          };
          processedInfo.push(newCardInfo);
        }

        createCard(processedInfo);
      });
    });
  }

  readApi(cardClass);
}
