export default function SortTimeSlots(times: string[]) {
  const timeToMinutes = (t:string) => {
    const [time, period] = t?.split(/(AM|PM)/);
    let [hours, minutes] = time?.split(":")?.map(Number);
    if (period === "PM" && hours !== 12) {
      hours += 12;
    }
    if (period === "AM" && hours === 12) {
      hours = 0;
    }
    return hours * 60 + minutes;
  };
  return times?.sort((a,b)=> timeToMinutes(a) - timeToMinutes(b))
}
