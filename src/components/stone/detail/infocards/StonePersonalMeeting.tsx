const StonePersonalMeeting = () => {
  return (
    <div className="rb:flex rb:items-center rb:gap-6 rb:rounded-xl rb:border rb:p-6">
      <img src="/meeting.png" className="rb:w-40 rb:rounded-lg" />
      <div>
        <h3 className="rb:font-semibold">Personal Meeting</h3>
        <p className="rb:text-sm rb:text-gray-600 rb:mt-1">
          One-on-one consultation with a jewelry expert.
        </p>
        <button className="rb:mt-3 rb:rounded-full rb:border rb:px-6 rb:py-2">
          Set a Meeting
        </button>
      </div>
    </div>
  );
};

export default StonePersonalMeeting;
