import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";

const Section3 = () => {
  const Videos = [
    {
      image: "astronomy",
      title: "Astronomy",
      heading: "Course Title: Astronomy Explorers",
      content:
        "In this course, young astronomers will delve into the mysteries of the universe, studying stars, planets, galaxies, and beyond.",
      author: "Cody Fisher • 14 August 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "146+ Kids enrolled",
    },
    {
      image: "biology",
      title: "Biology",
      heading: "Course Title: Biology Unleashed",
      content:
        "This course is designed to explore the intricacies of living organisms, from microorganisms to ecosystems.",
      author: "Jenny Wilson • 24 July 2023",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "95+ Kids enrolled",
    },
    {
      image: "gameDevelopment",
      title: "Game development",
      heading: "Course Title: Game Development Pro",
      content:
        "In this course, aspiring game developers will learn the fundamentals of game design, programming, and digital art.",
      author: "Courtney Henry • 17 Nov 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "30+ Kids enrolled",
    },
    {
      image: "engineering",
      title: "Software and application",
      heading: "Course Title: Software and Application Engineering",
      content:
        "This course is a gateway to the dynamic field of software development, focusing on programming languages,",
      author: "Kathryn Murphy • 20 Dec 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "160+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[1em] py-[2em] px-xpadding sm:px-[1rem] font-[400]">
        <div className="w-full flexbm text-[0.9rem] sm:text-[1.1rem] gap-[1em] flex-wrap">
          <div className="w-[40em] cflexss gap-[0.7em] text-[#333]">
            <h1 className="font-[800] text-[#012B1D] text-[1.5rem] sm:text-[1.6rem]">
              Recommended Videos for Kids Ages 15-18:
            </h1>
            <p>
              This will focus on knowledge, creativity and practical. We help a
              personal connection and values to help them to become active
              participants in the society.
            </p>
          </div>
          <Link href="/">
            <Button className="bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full font-[400]">
              <p>See more</p> <ArrowRightOutline size="1em" />
            </Button>
          </Link>
        </div>
        <div className="w-full flexbm gap-[0.5em] flex-wrap">
          {Videos.map((video, i) => {
            return (
              <>
                <VideoCard
                  key={i}
                  image={video.image}
                  title={video.title}
                  heading={video.heading}
                  content={video.content}
                  author={video.author}
                  images={video.images}
                  enrolled={video.enrolled}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section3;
