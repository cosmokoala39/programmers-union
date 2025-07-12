'use client';

import Image from 'next/image';
import Link from 'next/link';

const puzzles = [
  {
    href: '#',
    image: 'https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/crossword.gif',
    alt: 'Crossword',
    title: 'Eugene Scheffer Crossword',
    description:
      'A daily puzzle known for its clever wordplay and balanced difficulty, for both novice and experienced solvers.',
  },
  {
    href: '#',
    image: 'https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/guesstionary_bigger.gif',
    alt: 'Guesstionary',
    title: 'Guesstionary',
    description:
      'Decode the word in 6 daily tries. Green for right letters in place, yellow for right letters in wrong place, and gray for outliers.',
  },
  {
    href: '#',
    image: 'https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sudoku_white.gif',
    alt: 'Sudoku',
    title: 'Classic Sudoku',
    description:
      'Solve the 9x9 grid, fill in numbers 1 to 9 without repeats in rows, columns, or 3x3 subgrids.',
  },
];

const links = [
  { href: '#', label: 'Puzzles' },
  { href: '#', label: 'Comics' },
  { href: '#', label: 'Political Cartoons' },
  { href: '#', label: 'Horoscopes' },
];

const PuzzlesSection = () => {
  return (
    <div className="container mb-5 font">
      <div className="row lg-margin">
        <div className="col-12">
          <div className="section-heading">
            <h2>
              <Link href="https://www.staradvertiser.com/puzzles/" className='subheading'>
                Puzzles and Games <span><i className="fas fa-chevron-right"></i></span>
              </Link>
            </h2>
          </div>
        </div>

        {puzzles.map((puzzle, i) => (
          <div className="col-12 col-lg-4" key={i}>
            <Link
              href={puzzle.href}
              className="d-flex flex-row"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <div className="me-2">
                <Image
                  src={puzzle.image}
                  alt={puzzle.alt}
                  width={150}
                  height={150}
                  className="rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="d-flex flex-column">
                <h5
                  className="my-2 font"
                  style={{
                    
                    fontWeight: 'bold',
                    color: '#333',
                    lineHeight: '1em',
                    fontSize: '1.125em',
                  }}
                >
                  {puzzle.title}
                </h5>
                <span style={{ fontSize: '0.95em' }}>{puzzle.description}</span>
              </div>
            </Link>
          </div>
        ))}

        {links.map((link, i) => (
          <div className="col-12 col-md-3 mt-4" key={i}>
            <Link
              href={link.href}
              className="d-flex justify-content-center border rounded-4 p-4"
              style={{
                borderRadius: '10px',
                textDecoration: 'none',
                background:
                  'linear-gradient(180deg, rgba(173,226,255,1) 0%, rgba(24,98,167,1) 100%)',
              }}
            >
              <h5
                className="card-title fw-bold my-auto mb-0 font text-decoration-none text-white font"
                style={{fontWeight:'200'}}
              >
                {link.label}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzlesSection;
