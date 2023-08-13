import Card from "./Card";

const Section2 = () => {
  return (
    <div className="text-center bg-slate-50 text-black py-6">
      <div className="mx-auto container">
        <div className="font-bold text-4xl">Messaging for all</div>
        <p className="mt-2 text-[#4a4a4a] text-xl">
          User generated content in real-time will have multiple touch points
          for offshoring
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Section2;
