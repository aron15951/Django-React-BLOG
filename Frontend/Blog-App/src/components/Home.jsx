import SidePanel from "./SidePanel";

const Home = () => {
  return (
    <div className="container m-auto mt-5 ">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 shadow-lg text-center pl-12 py-3">
          <div className="container mx-auto grid grid-cols-2 gap-2">Home</div>
        </div>
        <div><SidePanel/></div>
      </div>
    </div>
  );
};

export default Home;
