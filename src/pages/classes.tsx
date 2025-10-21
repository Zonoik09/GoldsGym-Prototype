import Header from "@/components/Header1";
import GroupClasses from "@/components/GroupClasses";
import Footer from "@/components/Footer";

const Classes = () => {
  return (
    <main className="min-h-screen bg-primary text-white">
      <Header />
      <GroupClasses locationId="douglasdale" />
      <Footer />
    </main>
  );
};

export default Classes;
