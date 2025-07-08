"use client"
import WidgetSection from "../props/WidgetSection";
import { useEffect, useState } from "react";


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
export default function OtherField(){
      const [widgets, setWidgets] = useState<WidgetData[]>([]);

  useEffect(() => {
    fetch("/articles/widget.json")
      .then((res) => res.json())
      .then(setWidgets);
  }, []);
    return(
        <div className="container mb-5">
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
        </div>
    )
}