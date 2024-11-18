import Footer from "@/components/Homepage/Footer/Footer";
import Navigation from "@/components/Homepage/Navigation/Navigations";

const layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="min-h-[70vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
