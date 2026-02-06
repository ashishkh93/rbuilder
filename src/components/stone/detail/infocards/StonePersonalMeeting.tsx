const StonePersonalMeeting = () => {
  return (
    <div className="flex items-center gap-6 rounded-xl border p-6">
      <img src="/meeting.png" className="w-40 rounded-lg" />
      <div>
        <h3 className="font-semibold">Personal Meeting</h3>
        <p className="text-sm text-gray-600 mt-1">
          One-on-one consultation with a jewelry expert.
        </p>
        <button className="mt-3 rounded-full border px-6 py-2">
          Set a Meeting
        </button>
      </div>
    </div>
  );
};

export default StonePersonalMeeting;
