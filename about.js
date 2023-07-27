const posts = document.querySelector(".account-posts");
const modalImg = document.querySelector("#postModalImg");
const postCaption = document.querySelector(".post-caption");
const postTitle = document.querySelector("#postModalLabel");

const captions = [
    "I find immense joy in the captivating world of reading and writing. Each time I delve into the pages of a book, I embark on thrilling adventures, traverse distant lands, and delve into the minds of fascinating characters. Words have a magical power over me, transporting me to new dimensions and inspiring my own stories. When I put pen to paper, my thoughts flow like an endless river, weaving tales of wonder and emotion. It's in these moments of literary exploration that I feel most alive, embracing the beauty and power of language to its fullest.",
    "Travelling and language learning are my true passions, and they light up my world with boundless excitement. Exploring new destinations fills me with a sense of wonder as I immerse myself in diverse cultures, savouring the flavors, sights, and sounds of each place I visit. With an insatiable curiosity, I eagerly absorb new languages like a sponge, relishing the challenge of mastering foreign tongues. The ability to communicate with locals in their native language opens doors to authentic connections and enriching experiences, making my travels even more rewarding. This exhilarating journey of discovery through language and exploration fuels my soul and broadens my horizons in ways I could have never imagined.",
    "Dressing up and self-care are my cherished rituals, nurturing my spirit and enhancing my well-being. When I open my wardrobe, it's like stepping into a treasure trove of possibilities. The act of choosing the perfect outfit feels like painting a canvas with colors that express my mood and personality. Each piece I put on becomes an extension of myself, empowering me to conquer the day with confidence.",
    "Tennis and fitness are my ultimate passions, infusing my life with vitality and joy. On the tennis court, I feel an exhilarating rush as I connect with the ball, channelling my focus and determination into each powerful stroke. The court becomes my sanctuary, a place where time stands still, and the only thing that matters is the rhythm of the game. Off the court, I embrace fitness as a way to nurture my body and soul. Whether it's a heart-pumping workout or a dance session, I revel in the feeling of strength and energy. Fitness empowers me to push my boundaries, break barriers, and embrace the best version of myself.",
    "I have an unyielding love for animals that fills my heart with pure joy. From the gentle purring of a contented cat to the infectious excitement of a wagging tail, every creature brings a unique magic into my life. The bond between humans and animals is truly remarkable. Whether it's caring for a loyal companion or admiring the grace of wildlife in their natural habitat, I find solace and understanding in their presence. Animals have an extraordinary ability to teach us empathy, compassion, and unconditional love.",
    "I have a deep and unabashed love for food that fills my life with incredible pleasure and excitement. The flavors, textures, and aromas that dance on my taste buds create a symphony of sensations that I savour with every bite. From the tantalizing spices of exotic cuisines to the comforting familiarity of home-made dishes, every meal becomes a journey of exploration and delight. I relish the process of cooking, experimenting with ingredients, and crafting dishes that bring joy to others.",
    "This is picture 7.",
    "This is picture 8.",
    "This is picture 9."
];

const titles = [
    "Avid reader + writer.",
    "Explorer + language learner.",
    "Passion for beauty + fashion.",
    "Tennis + fitness enthusiast.",
    "Animal lover.",
    "Food fanatic.",
    "Title 7",
    "Title 8",
    "Title 9"
];


for (let i = 0; i < posts.children.length; i++) {
    posts.children[i].addEventListener("click", () => {
        imgSrc = posts.children[i].src;
        modalImg.setAttribute("src", imgSrc);

        postTitle.textContent = titles[i];
        postCaption.textContent = captions[i];
    })
} 



