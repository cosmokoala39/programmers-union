// components/NewsCategoryGrid.tsx

import Image from "next/image";
import Link from "next/link";

type Article = {
  id: number;
  category: string;
  title: string;
  slug?: string;
  image?: string;
  date: string;
};

type WidgetSectionProps = {
  data: Record<string, Article[]>;
  categories: string[];
};

export default function WidgetSection({ data, categories }: WidgetSectionProps) {
  return (
    <div className="row">
      {categories.map((category) => {
        const articles = data[category] || [];
        const [main, ...subs] = articles;

        return (
          <div className="col-12 col-md-4 mb-4" key={category}>
            {/* Category Title */}
            <div className="section-heading border-bottom pb-2 mb-3">
              <h5 className="subheading  ">
                {category} <i className="fa fa-chevron-right"></i>
              </h5>
            </div>

            {/* Main News */}
            {main && (
              <div className="mb-3">
                {main.image && (
                  <Link href={`${main.category}/${main.slug}`}>
                    <Image
                      src={main.image}
                      alt={main.title}
                      width={800} // or your desired width
                      height={200}
                      className="w-100 mb-2"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                )}
                <h6>
                  <Link href={`${main.category}/${main.slug}`} className="story-title font text-decoration-none">
                    {main.title}
                  </Link>
                </h6>
                <small className="text-muted">{main.date}</small>
              </div>
            )}

            {/* Sub News */}
            <div>
              {subs.slice(0,3).map((item) => (
                <div key={item.id} className="border-top pt-2 mt-2" >
                  <Link href={`${item.category}/${item.slug}`} className="story-title font text-decoration-none">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
