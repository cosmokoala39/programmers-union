import Image from "next/image";

interface AdCardProps {
  imageUrl: string;
  title: string;
  description: string;
  brand: string;
  size?: 'full' | 'half';
}

export default function AdCard({ imageUrl, title, description, brand, size = 'full' }: AdCardProps) {
  return (
    <div className={`card mb-4 ${size === 'full' ? '' : 'h-100'}`}>
      <div style={{ position: 'relative', height: size === 'full' ? '300px' : '200px' }}>
  <Image
    src={imageUrl}
    alt={title}
    fill
    style={{ objectFit: 'cover' }}
    className="card-img-top"
  />
</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="card-text"><small className="text-muted">{brand} | Sponsored</small></p>
      </div>
    </div>
  );
}
