import Image from "next/image";
import Link from "next/link";
import Button from "@/AtomicComponents/Button";
import { ArrowRightOutline } from "heroicons-react";
const ParentRiviews = [
  {
    star: "5star",
    content1:
      "My daughter's experience with CuriousKidz has been nothing short of amazing! She used to find science and math daunting, but with the interactive lessons and engaging projects, she's now excelling in these subjects.",
    content2:
      "The program not only boosted her academic performance but also instilled confidence in her abilities. Thank you, CuriousKidz, for unlocking her potential!",
    image: "estbg",
    name: "Esther Howard",
  },
  {
    star: "5star",
    content1:
      "As a parent, seeing my son enthusiastic about learning is the greatest joy. Since enrolling in the Drawing and Painting Mastery course, his creativity has blossomed.",
    content2:
      "The personalized feedback from the instructors has been instrumental in his growth as an artist. The progress he's made is evident in the beautiful artworks he creates. CuriousKidz, you've made a lasting impact on his artistic journey!",
    image: "RonaldRichard",
    name: "Ronald Richards",
  },
  {
    star: "4star",
    content1:
      "CuriousKidz's History Adventures course has been a game-changer for my son's academic journey. He was struggling with history, finding it dull and hard to comprehend. However, with the engaging videos and interactive quizzes, he's developed a deep interest in historical events and personalities",
    content2:
      "Now, he often shares fascinating historical facts with us, and his grades have significantly improved. Thank you, CuriousKidz, for making history come alive!",
    image: "leslie",
    name: "Leslie Alexander",
  },
  {
    star: "3halfStar",
    content1:
      "Enrolling our daughter in the Arts and Crafts Extravaganza was the best decision we made! She has always been a creative soul, but this course has taken her crafting skills to a whole new level. The projects are diverse and well-structured, allowing her to explore various artistic techniques.",
    content2:
      "Not only has she grown artistically, but she's also more confident in expressing her ideas. We're grateful to CuriousKidz for nurturing her imagination and boosting her self-esteem!",
    image: "dianne",
    name: "Dianne Russell",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="w-full cflexsm gap-[3em] px-xpadding py-[4em]">
        <div className="w-full cflexsm gap-[0.5em] font-[400] text-[0.9rem]">
          <p className="font-[700] text-[1.5rem] text-[#012B1D]">
            Parent Testimonials
          </p>
          <p>
            Hear from parents whose children have experienced the magic of
            CuriousKidz. See the impact on their confidence and academic growth.
          </p>
        </div>
        <div className="flexbs gap-[4em] w-full flex-wrap">
          {ParentRiviews.map((review, i) => {
            return (
              <>
                <Reviews {...review} key={i} />
              </>
            );
          })}
        </div>
        <div className="flexss gap-[1em] font-[700] text-[0.8rem]">
          <Link href="/signup">
            <Button className="bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full">
              <p>Enroll now</p> <ArrowRightOutline size="1em" />
            </Button>
          </Link>
          <Link href="/">
            <Button className="border border-[0.2em] border-primary1 text-primary1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full">
              <p>Login as a guest</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

const Reviews = (props) => {
  const { star, content1, content2, image, name } = props;
  return (
    <>
      <div className="cflexss gap-[1em] w-[30em] flex-grow font-[600] text-[#090914] text-[0.8rem]">
        <div className="flexmm w-[7em]">
          <Image src={`${star}.svg`} width={100} height={100} alt={`${star}`} />
        </div>
        <p>"{content1}</p>
        <p>{content2}"</p>
        <div className="flexsm gap-[0.5em] w-full">
          <div className="w-[3em]">
            <Image
              src={`${image}.svg`}
              width={100}
              height={100}
              alt={`${image}`}
            />
          </div>
          <p className="font-[800]">{name}</p>
        </div>
      </div>
    </>
  );
};