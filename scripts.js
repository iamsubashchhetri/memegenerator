const memebutton = document.querySelector(".buttonClick"); // Assuming it's an ID
const imagegenerator = document.querySelector(".memediv img");
const memeDesc = document.querySelector(".memediv .desc");
const author = document.querySelector(".authorclass");

const generateMeme = async () => {
  const url = "https://meme-api.com/gimme";

  try {
    const response = await fetch(url);
    const data = await response.json(); // Added 'await' here
    console.log(data);

    // Assuming the API returns an image URL and description
    imagegenerator.src = data.url;
    memeDesc.textContent = data.title;
    author.textContent=data.author;
  } catch (error) {
    console.error("Error", error);
  }
};

memebutton.addEventListener("click", generateMeme);
