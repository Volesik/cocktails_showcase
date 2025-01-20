const cocktails = [
  {
    title: 'Cognac soul',
    code: 'first-cocktail',
    ingredients: [
      'Cognac Koblevo Reserve <br />VS',
      'Linden blossom espuma',
      'Chocolate bitters N/A',
    ],
    price: 220,
    images: [
      {
        src: 'images/1_1.png',
        top: '0',
        left: '0',
        width: '25vh',
      },
      {
        src: 'images/1_2.png',
        top: '0',
        left: '40%',
        width: '35vh',
      },
      {
        src: 'images/1_3.png',
        top: '0',
        right: '0',
        width: '30vh',
      },
      {
        src: 'images/1_4.png',
        bottom: '0',
        right: '0',
        width: '35vh',
      },
      {
        src: 'images/1_5.png',
        bottom: '8%',
        right: '20%',
        width: '20vh',
      },
      {
        src: 'images/1_6.png',
        bottom: '0',
        left: '0',
        width: '35vh',
      },
      {
        src: 'images/1_7.png',
        top: '20%',
        left: '0',
        width: '15vh',
      },
    ],
  },
  {
    title: 'Apple love',
    code: 'second-cocktail',
    ingredients: [
      'Cognac Koblevo Reserve VS',
      'Sour apple liqueur Luxardo Sour Apple',
      'Bergamot liqueur Joseph Cartron',
    ],
    price: 220,
    images: [
      {
        src: 'images/2_1.png',
        top: '3vh',
        left: '0vh',
        width: '20vh',
      },
      {
        src: 'images/2_2.png',
        top: '0',
        left: '20%',
        width: '65vh',
      },
      {
        src: 'images/2_3.png',
        top: '0',
        right: '0',
        width: '35vh',
      },
      {
        src: 'images/2_4.png',
        top: '50%',
        right: '0',
        width: '15vh',
      },
      {
        src: 'images/2_5.png',
        bottom: '0',
        right: '0',
        width: '25vh',
      },
      {
        src: 'images/2_6.png',
        bottom: '0',
        right: '50%',
        width: '35vh',
      },
      {
        src: 'images/2_7.png',
        bottom: '0',
        left: '0',
        width: '35vh',
      },
    ],
  },
  {
    title: 'Heavenly delight',
    code: 'third-cocktail',
    ingredients: [
      'Cognac Koblevo Reserve VSOP',
      'Coconut puree Ponthier Coconut Puree',
      'Cocoa syrup Marie 	Brizard cacao blanc',
      "Vanilla liqueur Galliano L'Authentico",
    ],
    price: 220,
    images: [
      {
        src: 'images/3_1.png',
        top: '0',
        left: '0',
        width: '85vh',
      },
      {
        src: 'images/3_2.png',
        top: '0',
        right: '0',
        width: '35vh',
      },
      {
        src: 'images/3_3.png',
        bottom: '0',
        right: '0',
        width: '20vh',
      },
      {
        src: 'images/3_4.png',
        bottom: '0',
        right: '15%',
        width: '25vh',
      },
      {
        src: 'images/3_5.png',
        bottom: '0',
        left: '0',
        width: '25vh',
      },
      {
        src: 'images/3_6.png',
        left: '0',
        bottom: '30%',
        width: '15vh',
      },
      {
        src: 'images/3_7.png',
        top: '15%',
        left: '0',
        width: '20vh',
      },
    ],
  },
  {
    title: 'Steel power',
    code: 'fourth-cocktail',
    ingredients: [
      'Cognac Koblevo VVSOP',
      'Bread crust liqueur Cordial Dark bread&qhee',
      'Chocolate bitters',
      'Grated dark chocolate',
    ],
    price: 220,
    images: [
      {
        src: 'images/4_1.png',
        top: '0',
        left: '0',
        width: '35vh',
      },
      {
        src: 'images/4_2.png',
        top: '0',
        right: '25%',
        width: '35vh',
      },
      {
        src: 'images/4_3.png',
        top: '3%',
        right: '3%',
        width: '30vh',
      },
      {
        src: 'images/4_4.png',
        bottom: '0',
        right: '0',
        width: '25vh',
      },
      {
        src: 'images/4_5.png',
        bottom: '0',
        right: '15%',
        width: '35vh',
      },
      {
        src: 'images/4_6.png',
        bottom: '0',
        left: '0',
        width: '30vh',
      },
      {
        src: 'images/4_7.png',
        bottom: '34%',
        left: '0',
        width: '10vh',
      },
    ],
  },
];

let currentCocktailIndex = 0;
const titleElement = document.querySelector('.cocktail-receipt__title');
const ingredientsElement = document.querySelector(
  '.cocktail-receipt_ingredients__list'
);
const priceElement = document.querySelector('.cocktail-receipt__value');
const imageContainer = document.querySelector('.images-container');

function updateContent() {
  const currentCocktail = cocktails[currentCocktailIndex];
  titleElement.textContent = currentCocktail.title;
  priceElement.textContent = currentCocktail.price;
  ingredientsElement.innerHTML = currentCocktail.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join('');
  imageContainer.innerHTML = '';

  currentCocktail.images.forEach((data) => {
    const img = document.createElement('img');
    img.src = data.src;
    img.className = 'cocktail-images';
    img.style.width = data.width;

    if (data.hasOwnProperty('top')) {
      img.style.top = `${data.top}`;
    }

    if (data.hasOwnProperty('bottom')) {
      img.style.bottom = `${data.bottom}`;
    }

    if (data.hasOwnProperty('left')) {
      img.style.left = `${data.left}`;
    }

    if (data.hasOwnProperty('right')) {
      img.style.right = `${data.right}`;
    }

    img.classList.add(`${currentCocktail.code}`);
    imageContainer.appendChild(img);

    const images = document.querySelectorAll('.cocktail-images');
    images.forEach((image, index) => {
      setTimeout(() => {
        image.classList.add('visible');
      }, 100 * index);
    });
  });
}

function loadImagesForCurrentCocktail() {
  const currentCocktail = cocktails[currentCocktailIndex];
  currentCocktail.images.forEach((imageData) => {
    const img = new Image();
    img.src = imageData.src;
  });
}

loadImagesForCurrentCocktail();
updateContent();

document.querySelector('.left-button').addEventListener('click', () => {
  currentCocktailIndex =
    (currentCocktailIndex - 1 + cocktails.length) % cocktails.length;
  updateContent();
});

document.querySelector('.right-button').addEventListener('click', () => {
  currentCocktailIndex = (currentCocktailIndex + 1) % cocktails.length;
  updateContent();
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.cocktail-images');
  images.forEach((image, index) => {
    setTimeout(() => {
      image.classList.add('visible');
    }, 100 * index);
  });
});
