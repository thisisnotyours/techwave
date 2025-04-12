import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function CompanyList() {
  return (
    <section className="bg-white text-gray-900 bg-gray-500 relative">
      <p className="pt-10 text-center text-2xl text-gray-500 font-bold">Trusted by</p>
      <InfiniteSlider gap={24} reverse className="w-full h-full">
        <img
          src="https://motion-primitives.com/apple_music_logo.svg"
          alt="Apple Music logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://motion-primitives.com/chrome_logo.svg"
          alt="Chrome logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://motion-primitives.com/strava_logo.svg"
          alt="Strava logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://motion-primitives.com/nintendo_logo.svg"
          alt="Nintendo logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://motion-primitives.com/jquery_logo.svg"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://motion-primitives.com/prada_logo.svg"
          alt="Prada logo"
          className="h-[120px] w-auto"
        />
      </InfiniteSlider>
    </section>
  );
}
