const PrintFile = ({ item, ref }) => {
  return (
    <div>
      <div ref={ref} className="">
        <img className="" src={item} alt="" />
      </div>
    </div>
  );
};
export default PrintFile;
