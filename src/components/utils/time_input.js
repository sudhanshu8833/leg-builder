const TimeInput = () => {
    return (
      <input
        title="Time"
        className="w-24 rounded border border-gray-300 px-2 py-1 text-xs"
        type="time"
        min="09:16"
        max="15:30"
        step="60"
      />
    );
  };
  
  export default TimeInput;
  