import SidePanel from "./SidePanel";

const SingleBlog = () => {
  return (
    <div className='container m-auto mt-5'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 shadow-lg text-center py-3'>
          <div className="container">SingleBlog</div>
          <div><SidePanel/></div>
        </div>
      </div>
    </div>
  );
};
export default SingleBlog;
