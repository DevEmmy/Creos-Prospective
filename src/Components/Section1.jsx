import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";

const Section1 = () => {
  const Videos = [
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content:
        "Step into the captivating world of history and embark on a thrilling adventure through time!",
      author: "Wade Warren • 14 Jan 2022",
      enrolled: "43+ Kids enrolled",
    },
    {
      image: "creative",
      title: "Drawing and Painting",
      heading: "Unleashing Creative Expression",
      content:
        "Discover the joy of artistic expression in our Drawing and Painting Mastery course!",
      author: "Leslie Alexander • 16 Feb 2022",
      enrolled: "59+ Kids enrolled",
    },
    {
      image: "imagination",
      title: "Arts and Craft",
      heading: "Arts and Crafts: Unleashing Imagination",
      content:
        "Children will explore a wide range of materials and techniques, turning their imagination into tangible creations.",
      author: "Robert Fox • 23 April 2022",
      enrolled: "430+ Kids enrolled",
    },
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content:
        "Step into the captivating world of history and embark on a thrilling adventure through time!",
      author: "Wade Warren • 14 Jan 2022",
      enrolled: "140+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[1em] py-[2em] px-xpadding font-[400]">
        <div className="w-full flexbm text-[0.9rem]">
          <div className="w-[40em] cflexss gap-[0.7em] flex-wrap">
            <h1 className="font-[800] text-[#012B1D] text-[1.5rem]">
              Recommended Videos for Kids Ages 6-9:
            </h1>
            <p>
              This course will guide the children towards creativity and
              critical thinking. Formative ages should provide engaging topics
              to increase focus and drive motivation.
            </p>
          </div>
          <Link href="/">
            <Button className="bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full font-[700]">
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

export default Section1;
