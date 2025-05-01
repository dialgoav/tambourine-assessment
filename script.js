const slides = [
    {
        background: 'images/bg1.jpg',
        mainImage: 'images/bg1.jpg',
        subheadline: 'SUBHEADLINE',
        title: 'Stunning Location',
        description: 'From the picturesque Linear Park to the sprawling and elegant Grande Ballroom, Reunion Resort & Golf Club offers gorgeous ceremony settings.',
        number: '01',
    },
    {
        background: 'images/bg2.jpg',
        mainImage: 'images/bg2.jpg',
        subheadline: 'DISCOVER',
        title: 'Unmatched Comfort',
        description: 'Enjoy luxury accommodations and world-class amenities tailored to every guest for an unforgettable experience.',
        number: '02',
    },
    {
        background: 'images/bg3.jpg',
        mainImage: 'images/bg3.jpg',
        subheadline: 'EXPERIENCE',
        title: 'Breathtaking Views',
        description: 'Wake up to stunning vistas and explore scenic landscapes that soothe the soul and inspire wonder.',
        number: '03',
    },
];

let currentSlide = 0;

  const background = document.getElementById('background');
  const mainImage = document.getElementById('main-image');
  const subheadline = document.getElementById('subheadline');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const slideNumber = document.getElementById('slide-number');
  
  function updateSlide(index) {
    const slide = slides[index];
    background.style.backgroundImage = `url(${slide.background})`;
    mainImage.src = slide.mainImage;
    subheadline.textContent = slide.subheadline;
    title.innerHTML = slide.title;
    description.textContent = slide.description;
    slideNumber.textContent = slide.number;
  }
  
  document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });
  
  document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });
  
  // Initialize
  updateSlide(currentSlide);