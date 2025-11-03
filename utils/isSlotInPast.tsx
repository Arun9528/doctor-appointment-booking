export default function isSlotInPast(selectedDate: Date, slot: string): boolean {
  const [time, modifier] = slot?.split(" ");
  let [hours, minutes] = time?.split(":")?.map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const slotDate = new Date(selectedDate);
  slotDate.setHours(hours, minutes, 0, 0);

  return slotDate < new Date();
}