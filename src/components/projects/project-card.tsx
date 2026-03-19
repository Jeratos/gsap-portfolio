export default function ProjectCard({
  image1,
  image2,
  title1,
  title2,
}: {
  image1: string;
  image2: string;
  title1: string;
  title2: string;
}) {
  return (
    <>
      <div className="relative shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] imagehover h-full hover:rounded-4xl transition-all overflow-hidden duration-500 w-full md:w-1/2">
        <img
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] main-hove w-full object-cover md:object-fill hover:scale-105 transition-all duration-500"
          src={image1}
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-black/20 transition-all duration-500 flex justify-center items-center">
          <h2 className="hover-text uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-[font1] border-2 sm:border-4 border-white text-amber-50 rounded-full opacity-0 translate-y-6 transition-all duration-500 pt-2 px-4 sm:px-5">
            {title1}
          </h2>
        </div>
      </div>

      <div className="relative shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] imagehover h-full hover:rounded-4xl transition-all overflow-hidden duration-500 w-full md:w-1/2">
        <img
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] main-hove w-full object-cover md:object-fill hover:scale-105 transition-all duration-500"
          src={image2}
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-black/20 transition-all duration-500 flex justify-center items-center">
          <h2 className="hover-text uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-[font1] border-2 sm:border-4 border-white text-amber-50 rounded-full opacity-0 translate-y-6 transition-all duration-500 pt-2 px-4 sm:px-5">
            {title2}
          </h2>
        </div>
      </div>
    </>
  );
}