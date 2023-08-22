import NavBar from "@/AtomicComponents/NavBar";
import Footer from "@/AtomicComponents/Footer";

const Price = () => {
  return (
    <>
      <NavBar active={3} background={"primary2"} />
      <div className="cflexss gap-[2em] w-full px-xpadding pt-[5em] pb-[3em] text-[0.9rem] font-[400]">
        <div className="w-full cflexsm gap-[1em] text-center">
          <p>Pricing That Supports Learning Adventures</p>
          <h1 className="font-[700] text-[1.5rem] max-w-[25em]">
            Welcome to Curious Kids' Pricing Page! We believe in making quality
            education and engaging content accessible to all young minds.
          </h1>
          <p className="max-w-[45em]">
            Our pricing structure is designed to cater to both individual
            learners and educational institutions, ensuring that the journey of
            curiosity and learning is open to everyone.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
