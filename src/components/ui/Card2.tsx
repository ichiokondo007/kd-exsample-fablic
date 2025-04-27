import React from "react";
import { ArrowRight } from "lucide-react";

interface CardItem {
    id: string;
    title: string;
    summary: string;
    label?: string;
    author?: string;
    published?: string;
    url: string;
    image: string;
}

interface Card2Props {
    item: CardItem;
}

const Card2: React.FC<Card2Props> = ({ item }) => {
    return (
        <div className="card grid grid-rows-[auto_auto_1fr_auto] rounded-lg border border-border bg-card pt-0 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
            <div className="aspect-[16/9] w-full">
                <a
                    href={item.url}
                    target="_blank"
                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center rounded-t-lg"
                    />
                </a>
            </div>
            <div className="px-6 pt-5 pb-2">
                <h3 className="text-lg font-semibold hover:underline md:text-xl mb-2">
                    <a href={item.url} target="_blank">
                        {item.title}
                    </a>
                </h3>
                {item.label && (
                    <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium mb-2">
                        {item.label}
                    </span>
                )}
            </div>
            <div className="px-6 py-2">
                <p className="text-muted-foreground text-sm">{item.summary}</p>
                {(item.author || item.published) && (
                    <div className="mt-4 flex items-center text-xs text-muted-foreground">
                        {item.author && <span className="mr-2">{item.author}</span>}
                        {item.published && <span>{item.published}</span>}
                    </div>
                )}
            </div>
            <div className="px-6 pt-2 pb-5">
                <a
                    href={item.url}
                    target="_blank"
                    className="flex items-center text-foreground hover:underline text-sm font-medium"
                >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                </a>
            </div>
        </div>
    );
};

export default Card2;
Kensington