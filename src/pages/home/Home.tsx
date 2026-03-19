import Video from "../../components/home/Video";
import HomeheroTxt from "../../components/home/HomeheroTxt";
import HomeBottum from "../../components/home/HomeBottum";

export default function Home() {
  return (
    <div className="text-white relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <div className="fixed inset-0 -z-10">
        <Video />
      </div>

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-between items-center h-full w-full bg-black/20">
        <HomeheroTxt />
        <HomeBottum />
      </div>

    </div>
  );
}