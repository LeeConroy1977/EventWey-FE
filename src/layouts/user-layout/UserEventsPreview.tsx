import { useNavigate } from "react-router-dom";
import EventsPreviewCard from "./EventsPreviewCard";
import { useEffect } from "react";

import useHandleEventClick from "../../hooks/useHandleEventClick";
import { useUser } from "../../contexts/UserContext";

const UserEventsPreview = () => {
  const { userTotalEvents, getUserTotalEvents } = useUser();
  const navigate = useNavigate();
  const handleEventClick = useHandleEventClick();

  const eventsLength = Array.isArray(userTotalEvents)
    ? userTotalEvents.length
    : 0;

  const slicedEvents = Array.isArray(userTotalEvents)
    ? userTotalEvents
        .sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA - dateB;
        })
        .slice(0, 3)
    : [];

  useEffect(() => {
    if (getUserTotalEvents) {
      getUserTotalEvents();
    }
  }, []);

  function handleNavigation() {
    navigate("/user/my-events");
  }

  return (
    <div className="w-[100%] h-[380px] flex flex-col rounded-lg bg-white p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-textPrimary">
          Your Events (<span className="text-primary">{eventsLength || 0}</span>
          )
        </h3>
        <p
          className="text-[12px] font-semibold text-primary cursor-pointer"
          onClick={handleNavigation}
        >
          Show all
        </p>
      </div>
      <div className="mt-4 space-y-4">
        {slicedEvents.length > 0 ? (
          slicedEvents.map((event: Event) => (
            <EventsPreviewCard
              event={event}
              key={event.id}
              handleClick={handleEventClick}
            />
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </div>
    </div>
  );
};

export default UserEventsPreview;
