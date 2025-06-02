import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";
import { Ubuntu, Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight

const ubuntuMono400 = Ubuntu({
  subsets:["latin"],
  weight: ["400","500","700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
    shortcut: "./favicon-16x16.png",
  },
};
const titleFontClassName = ubuntuMono400.className
const textFontClassName = montserrat .className
const titleColorHext = "#ff6700"; // Hex color for the title
const subtitleColorHext = "#2000CB"; // Hex color for the subtitle
const textColorHext = "#000000"; // Hex color for the text

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className={`text-2xl font-medium ${titleFontClassName}`} style={{color: titleColorHext}}>{RESUME_DATA.name}</h1>
            <p className={`max-w-md text-pretty text-sm  ${textFontClassName}`}>
              {RESUME_DATA.about}
            </p>
            <p className={`max-w-md items-center text-pretty text-xs  ${textFontClassName}`}>
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 text-xs  print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className={`hidden flex-col gap-x-1 text-sm  print:flex ${titleFontClassName}`}>
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <Section>
          <h2 className={`text-base font-medium ${titleFontClassName}`} style={{ color: subtitleColorHext }}>
            About
          </h2>
          <p className={`text-xs  ${textFontClassName}`}>
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className={`text-base font-medium ${titleFontClassName}`} style={{ color: subtitleColorHext }}>
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work, workIndex) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className={`text-sm inline-flex items-center justify-center gap-x-1 font-medium leading-none ${titleFontClassName}`}>
                      <a
                        className="hover:underline"
                        href={work.link.href}
                        style={{ color: textColorHext }}
                      >
                        {work.company}
                      </a>
                    </h3>
                  </div>
                </CardHeader>
                
                {work.roles.map((role, roleIndex) => (
                  <div key={`${work.company}-${role.title}-${role.start}`}>
                    <CardHeader className={roleIndex > 0 ? "pt-6" : "pt-2"}>
                      <div className="flex items-center justify-between gap-x-2">
                        <h4 className={`text-sm leading-none ${titleFontClassName}`} style={{ color: titleColorHext }}>
                          {role.title}
                        </h4>
                        <div className={`text-sm tabular-nums  ${titleFontClassName}`} style={{ color: textColorHext }}>
                          {role.start} - {role?.end ?? "Present"}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className={`mt-2  text-xs ${textFontClassName}`}>
                      <ul>
                        {role.descriptions.map((description) => (
                          <li key={description} className={`${textFontClassName}`}>
                            {description}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                  </div>
                ))}

                {workIndex < RESUME_DATA.work.length - 1 && (
                  <Separator orientation="horizontal" className="mt-4"/>
                )}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className={`text-l font-medium ${titleFontClassName}`} style={{ color: subtitleColorHext }}>
            Publications
          </h2>
          <Card key="pubs">
            <CardContent className={`mt-2 text-xs ${textFontClassName}`}>
              <ul>
                {RESUME_DATA.publications.map((pub, index) => (
                  <li key={index} className="mt-1">
                    {pub}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>
        <Section>
          <h2 className={`text-l font-medium ${titleFontClassName}`} style={{ color: subtitleColorHext }}>
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-sm">
                    <h3 className={`font-medium leading-none ${titleFontClassName}`}>
                      {education.school}
                    </h3>
                    <div className={`tabular-nums ${titleFontClassName}`}>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className={`mt-2 text-xs ${textFontClassName}`}>{education.degree}</CardContent>
                <CardContent className={`mt-2 text-xs ${textFontClassName}`}>
                  {education.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="scroll-mb-16">
          <h2 className={`text-l font-medium ${titleFontClassName}`} style={{ color: subtitleColorHext }}>
            Projects & Skills
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  titleFontClassName={titleFontClassName}
                  textFontClassName={textFontClassName}
                  titleFontColor={textColorHext}
                  textFontColor={textColorHext}
                  badgeFontClassName={titleFontClassName}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
