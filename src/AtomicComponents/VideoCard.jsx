import Link from "next/link";
import Image from "next/image";

const VideoCard = ({ image, title, heading, content, author, enrolled }) => {
  return (
    <>
      <Link href="/">
        <div className="border border-[1px] border-[#E6E6E6] cflexss gap-[0.5em] p-[0.5em] w-[16em] h-[24em] rounded-xl cursor-pointer">
          <div className="w-full flexmm">
            <Image
              src={`${image}.svg`}
              width={100}
              height={100}
              alt={`${image}`}
            />
          </div>
          <div className="py-[0.3em] px-[0.6em] bg-[#F9F5FF] text-purplePrime text-[0.7rem] rounded-full font-[400]">
            {title}
          </div>
          <p className="text-[1rem] font-[700] text-[#101828]">{heading}</p>
          <p className="text-[0.8rem] text-primary4">{content}</p>
          <p className="text-[0.7rem] text-purplePrime font-[600]">{author}</p>
          <p className="text-[0.7rem]">{enrolled}</p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
