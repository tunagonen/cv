import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  titleFontClassName?: string;
  textFontClassName?: string;
  titleFontColor?: string;
  textFontColor?: string;
  badgeFontClassName?: string;
  badgeFontColor?: string;
}

export function ProjectCard({ title, description, tags, link, titleFontClassName,titleFontColor,textFontClassName,textFontColor,badgeFontClassName }: Props) {
  return (
    <Card className="flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className={`text-sm ${titleFontClassName || ""}`} style={{ color: titleFontColor || "inherit" }}>
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className={`text-xs` + (textFontClassName ? ` ${textFontClassName}` : "")} style={{ color: textFontColor || "inherit" }}>
            {description}
          </CardDescription>
        </div> 
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="mt-auto flex">
        <div className={`mt-2 flex flex-wrap gap-1 ${badgeFontClassName || ""}`}> 
          {tags.map((tag) => (
            <Badge variant="secondary" className={`px-1 py-0 text-[10px] font-medium ${badgeFontClassName}`} key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
