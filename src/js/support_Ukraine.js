// Імпорт зображення
import found1 from './images/support/01-found-1.png';
import found1x from './images/support/01-found-2.png';
import found2 from './images/support/02-found-1.png';
import found2x from './images/support/02-found-2.png';
import found3 from './images/support/03-found-1.png';
import found3x from './images/support/03-found-2.png';
import found4 from './images/support/04-found-1.png';
import found4x from './images/support/04-found-2.png';
import found5 from './images/support/05-found-1.png';
import found5x from './images/support/05-found-2.png';
import found6 from './images/support/06-found-1.png';
import found6x from './images/support/06-found-2.png';
import found7 from './images/support/07-found-1.png';
import found7x from './images/support/07-found-2.png';
import found8 from './images/support/08-found-1.png';
import found8x from './images/support/08-found-2.png';
import found9 from './images/support/09-found-1.png';
import found9x from './images/support/09-found-2.png';

const pngSupport = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
    img2: found1x,
    width: 154,
    height: 32,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
    img2: found2x,
    width: 71,
    height: 32,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found3,
    img2: found3x,
    width: 219,
    height: 32,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found4,
    img2: found4x,
    width: 136,
    height: 32,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found5,
    img2: found5x,
    width: 76,
    height: 32,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found6,
    img2: found6x,
    width: 96,
    height: 32,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found7,
    img2: found7x,
    width: 57,
    height: 32,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found8,
    img2: found8x,
    width: 106,
    height: 32,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found9,
    img2: found9x,
    width: 180,
    height: 32,
  },
];

const forLogoDiv = document.querySelector('.forLogoDiv'); // Отримання посилання на елемент з класом 'logoContainer' у документі

function renderingOurLogos() {
  const markup = pngSupport   // Використання методу map для створення нового масиву на основі pngSupport
    .map(({ title, url, img, img2, width, height }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');  // Форматування індексу зображення, щоб забезпечити двозначний формат (наприклад, 01, 02, ..., 09, 10)
       // Створення розмітки HTML для кожного благодійного фонду, включаючи зображення з подвійною роздільною здатністю
      return `<div class="logo__item fund-item"><p class="fundNumber">${paddedIndex}</p>
      <a href="${url}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${title}" >
      <picture>
      <source srcset="${img}, ${img2} 2x" />
      <img src="${img}" alt="${title}" loading="lazy" width="${width}" height="${height}">
    </picture>
      </a></div>
  `;
    })
    .join(''); // Об'єднання всіх елементів масиву в один рядок
    forLogoDiv.insertAdjacentHTML('beforeend', markup); // Вставка створеної розмітки HTML в кінець елементу з класом 'forLogoDiv'
}

renderingOurLogos(); // Виклик функції renderingOurLogos для виконання рендерингу благодійних фондів у контейнері