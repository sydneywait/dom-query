// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

document.querySelector(".article__header").innerHTML="Welcome to the Sydney Blog";

// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const allArticleHeaders = document.querySelectorAll(".article__header")
console.log(allArticleHeaders);
for(let i=0; i<allArticleHeaders.length; i++){

allArticleHeaders[i].classList.add(".article__header-important");
}
// 3. Obtain a reference the element with a class of dashed and remove it.
const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");
console.log(dashed);

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");
console.log(articleFooter);

