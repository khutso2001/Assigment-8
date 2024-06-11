// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით
function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
              `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}
fetchPosts();

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით
async function deepCopyObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Input is not an object");
  } else {
    return JSON.parse(JSON.stringify(obj));
  }
}
const originalObject = { a: 1, b: { c: 2 } };
(async () => {
  try {
    const copiedObject = await deepCopyObject(originalObject);
    console.log("Original:", originalObject);
    console.log("Copied:", copiedObject);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5
// *5)
function expo(number, quality, callback) {
  function recursiveExpo(num, q) {
    if (q === 0) {
      return 1;
    } else {
      return num * recursiveExpo(num, q - 1);
    }
  }
  let result = recursiveExpo(number, quality);
  if (typeof callback === "function") {
    callback(result);
  }
  return result;
}
function printResult(result) {
  console.log("Result:", result);
}
expo(5, 3, printResult);
