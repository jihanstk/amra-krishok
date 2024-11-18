import AboutUsHome from "@/components/Homepage/AboutUsHome/AboutUsHome";
import Banner from "@/components/Homepage/Banner/Banner";
import LatestProduct from "@/components/Homepage/LatestProduct/LatestProduct";
import OurServices from "@/components/Homepage/OurServices/OurServices";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import ViewByCategory from "@/components/Homepage/ViewByCategory/ViewByCategory";

export default function Home() {
  return (
    <main>
      <Banner />
      <OurServices />
      <LatestProduct />
      <AboutUsHome />
      <ViewByCategory />
      <Testimonials />
    </main>
  );
}
