"use client";
import { Calendar } from "@/components/ui/calendar";
import { LuCalendarDays } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import isSlotInPast from "@/utils/isSlotInPast";
import { useEffect, useState } from "react";
import { doctorData } from "@/lib/types";
import { BASE_URL } from "@/base";
import Submit_Cancel_Form_Btn from "../submit_cancel_form_btn";
interface AppointmentForm {
  appointmentDate: Date;
  appointmentTime: string;
  // note?: string;
}
interface AppointmentProps {
  handleClickModal: () => void;
  doctorId: string;
  handleBookingSuccess: ()=> void;
}
export default function AppointmentRegister({
  handleClickModal,
  doctorId, handleBookingSuccess
}: AppointmentProps) {
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const now = new Date();
  const {
    // register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
    control,
    watch,
  } = useForm<AppointmentForm>({
    defaultValues: {
      appointmentDate: now,
      appointmentTime: "",
      // note: "",
    },
    mode: "onChange",
  });
  const selectDate = watch("appointmentDate");
  const onSubmit: SubmitHandler<AppointmentForm> = async(data) => {
    try {
      const res = await fetch(`${BASE_URL}appointments`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({date:data?.appointmentDate?.toLocaleDateString("en-CA") ,timeSlot:data?.appointmentTime,providerId: doctorId}),
        credentials:"include"
      });
      const payload = await res.json()
      if(!res.ok) {
        const message = payload?.message || payload?.error || `Appointment failed (${res?.status})`;
        console.error("Appointment error:", message);
        return
      }
      handleClickModal();
      handleBookingSuccess()
      reset();
    } catch (error) {
      console.error("Network / unexpected error:", error);
    }
  };
  useEffect(() => {
    async function fetchingData() {
      try {
        const res = await fetch(`${BASE_URL}doctors/${doctorId}`);
        if (!res.ok) throw new Error(`fetching error ${res.status}`);
        const doctorDetails: doctorData = await res.json();
        setTimeSlots(doctorDetails?.booking_time_Slots);
      } catch (error) {
        console.error(`error:`, error);
      }
    }
    fetchingData();
  }, []);
  return (
    <section>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Book Appointment</h2>
        <button
          type="button"
          className="hover:text-red-600 cursor-pointer text-2xl"
          onClick={handleClickModal}
        >
          <IoClose />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 items-stretch">
          <div className="space-y-2 flex flex-col">
            <div className="flex items-center gap-2">
              <LuCalendarDays className="text-sky-600 text-xl" />
              <h3 className="font-medium">Select Date</h3>
            </div>
            <Controller
              control={control}
              name="appointmentDate"
              rules={{ required: "Please Select a Date" }}
              render={({ field }) => (
                <div className="relative">
                  <Calendar
                    mode="single"
                    selected={field?.value}
                    onSelect={(d) => field?.onChange(d ?? undefined)}
                    disabled={(date) => {
                      now?.setHours(0, 0, 0, 0);
                      return date < now;
                    }}
                    defaultMonth={field?.value ?? now}
                    className="rounded-lg border border-gray-300 w-72 h-full shadow-md px-3 pb-7 "
                  />
                  {errors?.appointmentDate && (
                    <p className=" absolute top-full text-xs text-red-600 font-medium">
                      {errors?.appointmentDate?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="space-y-2 h-full flex flex-col">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-sky-600 text-xl" />
              <p className="font-medium">Select Time Slot</p>
            </div>
            <Controller
              control={control}
              name="appointmentTime"
              rules={{ required: "Please Select the time slot" }}
              render={({ field }) => (
                <div
                  role="radiogroup"
                  aria-label="Available time slots"
                  className={`grid grid-cols-3 gap-2 border rounded-lg py-3.5 px-2 shadow-md w-80 relative
                     ${
                       errors?.appointmentTime
                         ? "border-red-600"
                         : "border-gray-300"
                     } h-full `}
                >
                  {timeSlots?.map((slots, i) => {
                    const disabled = selectDate
                      ? isSlotInPast(selectDate, slots)
                      : false;
                    const isSelected = field?.value === slots;
                    return (
                      <button
                        type="button"
                        key={slots}
                        onClick={() => {
                          if (!disabled) field?.onChange(slots);
                        }}
                        className={`${
                          disabled
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : isSelected
                            ? "bg-sky-600 text-white"
                            : "hover:bg-sky-500 hover:text-white hover:border-sky-500 cursor-pointer border border-gray-300"
                        }
                         rounded-2xl py-1 px-3.5  transition-colors duration-300 ease-in-out text-sm`}
                        disabled={disabled}
                        role="radio"
                        aria-checked={isSelected}
                        aria-disabled={disabled}
                      >
                        {slots}
                      </button>
                    );
                  })}
                  {errors?.appointmentTime && (
                    <p className="absolute top-full text-xs text-red-600 font-medium">
                      {errors?.appointmentTime?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        {/* <textarea
          {...register("note")}
          id="note"
          rows={4}
          className="w-full border border-gray-300 rounded-lg shadow-md p-3 outline-none focus:border-sky-600"
          placeholder="Note (optional)"
        ></textarea> */}
        {/* <div className="flex items-center justify-end gap-x-3">
          <button
            type="button"
            onClick={handleClickModal}
            className="bg-red-600 text-white px-3 py-1.5 rounded-md text-sm cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-sky-600 text-white px-3 py-1.5 rounded-md text-sm cursor-pointer"
          >
            Submit
          </button>
        </div> */}
        <Submit_Cancel_Form_Btn handleClickModal={handleClickModal} isSubmitting={isSubmitting}/>
      </form>
    </section>
  );
}
