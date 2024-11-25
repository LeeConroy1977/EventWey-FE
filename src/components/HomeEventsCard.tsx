import { IoPerson } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";

const HomeEventsCard = ({ event }) => {
  const { image, date, title, groupName, duration, going, price } = event;

  return (
    <div className="flex items-center w-[100%] h-[220px] bg-white p-4  border-gray-300 rounded-lg mt-4">
      <img src={image && image} className="w-[40%] h-[90%] ml-2  rounded-lg" />
      <div className="w-[60%] h-[100%]  p-3 pl-8 pt-5">
        <p className="text-[12px] text-[#2C3E50] font-medium">{date}</p>
        <h2 className="text-[21px] font-bold text-[#2C3E50] mt-1">{title}</h2>
        <p className="text-[12px] font-semibold text-[#5D9B9B] mt-2">{`Hosted by: ${groupName}`}</p>
        <p className="text-[12px] font-semibold text-gray-400 mt-2">{`Duration: ${duration}`}</p>
        <div className="flex w-[100%] h-[25%] mt-3">
          <div className="flex items-center">
            <div className="flex items-center ">
              <span>
                <IoPerson className="text-[#D66E6E] text-[18px]" />
              </span>
              <p className="ml-2 text-[12px] font-semibold text-[#2C3E50]">
                {going} going
              </p>
            </div>
            <div className="flex items-center">
              <span>
                <IoMdPricetag className="text-[#5D9B9B] text-[18px] ml-6" />
              </span>
              <p className="ml-2 text-[12px] font-semibold text-[#2C3E50]">
                {/* {priceBands[0]} */}
              </p>
            </div>
            {price !== "free" && (
              <p className="ml-6 text-[12px] text-[#D66E6E] font-semibold">
                {/* {availability()} places left */}
              </p>
            )}
          </div>
          <button
            className={`w-[100px] h-[34px] ml-auto flex items-center justify-center text-[11px] text-white font-semibold rounded-lg ${
              price === "free" ? "bg-[#5D9B9B]" : "bg-[#5D9B9B]"
            }`}
          >
            {price === "free" ? "Join Event" : "Get Tickets"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeEventsCard;
