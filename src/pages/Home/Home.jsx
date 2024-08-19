import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <h1 className="text-3xl font-bold m-5">Welcome to Budgie!</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
