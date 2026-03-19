import Video from "./Video";

export default function HomeheroTxt() {
  return (
    <div className="text-center pt-[10vh] font-[font1]">

      <div className="text-[12vw] sm:text-[9vw] uppercase leading-[11vw] sm:leading-[9vw]">
        I Build
      </div>

      <div className="flex justify-center items-center uppercase text-[12vw] sm:text-[9vw] leading-[11vw] sm:leading-[9vw] gap-2">

        <div className="h-[10vw] w-[24vw] sm:h-[7.5vw] sm:w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>

        Products.
      </div>

      <div className="text-[12vw] sm:text-[9vw] uppercase leading-[11vw] sm:leading-[9vw]">
        Not Just Websites.
      </div>

    </div>
  );
}