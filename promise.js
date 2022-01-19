function getApi() {
  fetch(
    `https://newsapi.org/v2/everything?q=keyword&apiKey=cff52799d56e4254b03e37a7c463aed5`,
  )
    .then((respon) => respon.json())
    .then((respon) => {
      console.log(respon);
      const data = respon.articles;
      let cards = "";
      data.forEach((a) => (cards += showCards(a)));
      const article = document.getElementById("data");
      article.innerHTML = cards;
    });
}

getApi();

const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");

  fetch(
    `https://newsapi.org/v2/everything?q=${inputKeyword.value}&apiKey=cff52799d56e4254b03e37a7c463aed5`,
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.articles;
      let cards = "";
      data.forEach((a) => (cards += showCards(a)));
      document.getElementById("data").innerHTML = cards;
    });
});

function showCards(articles) {
  return `<div class="col-span-4 md:col-span-1">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="h-100"
        src="${articles.urlToImage}"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${articles.title}</div>
        <p class="text-gray-700 text-base">${articles.description}</p>
        <p class="py-3 text-gray-500">
          ${articles.author} - ${articles.publishedAt}
        </p>
      </div>
      <hr />
      <div class="m-3">
        <a
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          href="${articles.url}"
          role="button"
          >Read More</a
        >
      </div>
    </div>
  </div>`;
}
