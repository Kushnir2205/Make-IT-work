// Імпорт зображення
import found1 from '../images/support/01-found-1.png';
import found1x from '../images/support/01-found-2.png';
import found2 from '../images/support/02-found-1.png';
import found2x from '../images/support/02-found-2.png';
import found3 from '../images/support/03-found-1.png';
import found3x from '../images/support/03-found-2.png';
import found4 from '../images/support/04-found-1.png';
import found4x from '../images/support/04-found-2.png';
import found5 from '../images/support/05-found-1.png';
import found5x from '../images/support/05-found-2.png';
import found6 from '../images/support/06-found-1.png';
import found6x from '../images/support/06-found-2.png';
import found7 from '../images/support/07-found-1.png';
import found7x from '../images/support/07-found-2.png';
import found8 from '../images/support/08-found-1.png';
import found8x from '../images/support/08-found-2.png';
import found9 from '../images/support/09-found-1.png';
import found9x from '../images/support/09-found-2.png';

const pngSupport = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
    img2: found1x,
    width: 131,
    height: 32,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
    img2: found2x,
    width: 62,
    height: 33,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found3,
    img2: found3x,
    width: 82,
    height: 28,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found4,
    img2: found4x,
    width: 82,
    height: 28,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found5,
    img2: found5x,
    width: 55,
    height: 35,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found6,
    img2: found6x,
    width: 115,
    height: 36,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found7,
    img2: found7x,
    width: 90,
    height: 30,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found8,
    img2: found8x,
    width: 60,
    height: 20,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found9,
    img2: found9x,
    width: 100,
    height: 32,
  },
];

const forLogoDiv = document.querySelector('.forLogoDiv'); // Отримання посилання на елемент з класом 'logoContainer' у документі

function makeImagesWhite() {
  const logoImages = document.querySelectorAll('logo__img'); // Отримання всіх зображень з класом 'logo__img'

  logoImages.forEach((image) => {
    image.style.filter = 'brightness(100)'; // Встановлення кольорового фільтру 'brightness(100)' для зображень
  });
}

makeImagesWhite();


function renderingOurLogos() {
  const markup = pngSupport   // Використання методу map для створення нового масиву на основі pngSupport
    .map(({ title, url, img, img2, width, height }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');  // Форматування індексу зображення, щоб забезпечити двозначний формат (наприклад, 01, 02, ..., 09, 10)
       // Створення розмітки HTML для кожного благодійного фонду, включаючи зображення з подвійною роздільною здатністю
      return `<div class="logo__item fund-item"><p class="fundNumber">${paddedIndex}</p>
      <a href="${url}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${title}" >
      <picture>
      <source srcset="${img}, ${img2} 2x" />
      <img src="${img}" alt="${title}" loading="lazy" width="${width}" height="${height}" style="filter: brightness(100)">
    </picture>
      </a></div>
  `;
    })
    .join(''); // Об'єднання всіх елементів масиву в один рядок
    forLogoDiv.insertAdjacentHTML('beforeend', markup); // Вставка створеної розмітки HTML в кінець елементу з класом 'forLogoDiv'
}

renderingOurLogos(); // Виклик функції renderingOurLogos для виконання рендерингу благодійних фондів у контейнері


const logoContainer = document.querySelector('.forLogoDiv'); // Отримання посилання на елемент з класом 'forLogoDiv'
const scrollButton = document.querySelector('.swiper-button-next'); // Отримання посилання на елемент з класом 'swiper-button-next' у документі

scrollButton.addEventListener('click', () => {
  const firstLogoItem = logoContainer.firstElementChild; // Отримання першого елемента списку
  logoContainer.appendChild(firstLogoItem); // Переміщення першого елемента в кінець списку
});




