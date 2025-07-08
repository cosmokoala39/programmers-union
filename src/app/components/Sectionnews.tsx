import { useEffect, useState } from "react";
import WidgetSection  from "../props/WidgetSection";

type Article = {
  title: string;
  url: string;
  image?: string;
  date: string;
};

type WidgetData = {
  title: string;
  url: string;
  items: Article[];
};

export default function Sectionnews() {
  const [widgets, setWidgets] = useState<WidgetData[]>([]);

  useEffect(() => {
    fetch("/data/widgets.json")
      .then((res) => res.json())
      .then(setWidgets);
  }, []);

  return (
    <div className="row lg-margin">
      {widgets.map((widget, idx) => (
        <WidgetSection
          key={idx}
          title={widget.title}
          url={widget.url}
          items={widget.items}
        />
      ))}
    </div>
  );
}
