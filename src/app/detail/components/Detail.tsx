
import AdCard from './AdCard';

const ads = [
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_web1_20231225-web-hpd-car-night-300x199.jpg',
    title: 'Looking for a soulmate!',
    description: 'Share your feelings and emotions with someone.',
    brand: 'Wingtalks',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_cli01-300x190.jpg',
    title: "Beach Side Resort on Samui's Chaweng Beach",
    description: "Thailand's pioneering eco-friendly resort.",
    brand: 'Marasca',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_mea01-300x190.jpg',
    title: 'Husband Leaves Sick Wife...',
    description: 'He came back and everything changed.',
    brand: 'Cleverst',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_hpd_HPD_honolulu_police_20200115-300x169.jpg',
    title: 'Secret Island Hotel You Should Know',
    description: 'Stay hidden from the world.',
    brand: 'EscapeSpot',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_TKTK22-WEB-Honolulu-EMS-ambulancea-1--300x177.jpg',
    title: 'Begin Your Spiritual Journey',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_gab01-600x380.jpg',
    title: 'Gunmen rob teen, fire at another in Makakilo park',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_cli01-600x380.jpg',
    title: 'Man, 20s, critically injured in jump at Kapena Falls',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_WDA-woman-in-rays-1823-596x400.jpg',
    title: 'HPD searching for suspect in beating of boy, 15, in Kalihi',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709-oped-red-hill-protest-600x400.jpg',
    title: 'U.S. measles cases hit highest level since 2000 elimination',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709-a1-CTY-school-funding-1.jpg',
    title: 'Begin Your Spiritual Journey',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_USATSI_26541785.jpg',
    title: 'Texas officials under fire for flood response after 119 killed',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_CTY-north-shore-ag-land-4426-600x400.jpg',
    title: 'UH marine scientist loses funding in Trump’s NOAA budget freeze',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_prt01-600x380.jpg',
    title: 'University of the Nations aims to grow Kona campus by 62 acres',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_gab01-600x380.jpg',
    title: 'Texas officials under fire for flood response after 119 killed',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  },
  {
    imageUrl: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250709_brk_cli01-600x380.jpg',
    title: 'UH marine scientist loses funding in Trump’s NOAA budget freeze',
    description: 'Meet like-minded souls today.',
    brand: 'Mindly',
  }
];

export default function Detail() {
  const layout = [];

  for (let i = 0; i < ads.length; ) {
    // Full-width card
    if (ads[i]) {
      layout.push(
        <div key={`full-${i}`} className="row mt-2">
          <div className="col-12">
            <AdCard {...ads[i]} size="full" />
          </div>
        </div>
      );
      i++;
    }

    // Two half-width cards
    const halfCards = [];
    if (ads[i]) {
      halfCards.push(
        <div key={`half-${i}`} className="col-12 col-md-6">
          <AdCard {...ads[i]} size="half" />
        </div>
      );
      i++;
    }
    if (ads[i]) {
      halfCards.push(
        <div key={`half-${i}`} className="col-12 col-md-6">
          <AdCard {...ads[i]} size="half" />
        </div>
      );
      i++;
    }

    if (halfCards.length) {
      layout.push(
        <div key={`row-${i}`} className="row">
          {halfCards}
        </div>
      );
    }
  }

  return (
    <div className="container py-4">
      {layout}
    </div>
  );
}
