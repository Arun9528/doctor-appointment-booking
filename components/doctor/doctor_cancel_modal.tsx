"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../inputs";
import TextArea_Component from "../textarea_component";
import Submit_Cancel_Form_Btn from "../submit_cancel_form_btn";
import { BASE_URL } from "@/lib/config";
import { useRouter } from "next/navigation";

interface doctorCancelProp {
  handleClickModal: () => void;
  appointmentId: string;
}
export interface doctorCancelForm {
  remarkToPatient: string;
  reason: string;
}
export default function Doctor_Cancel_Modal({
  handleClickModal,
  appointmentId,
}: doctorCancelProp) {
  const route = useRouter()
  const {
    register,
    handleSubmit,reset,
    formState: { errors,isSubmitting},
  } = useForm<doctorCancelForm>({
    defaultValues: {
      remarkToPatient: "",
      reason: "",
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<doctorCancelForm> = async (data) => {
    try {
      const res = await fetch(
        `${BASE_URL}appointments/${appointmentId}/cancel-by-doctor`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body:JSON.stringify(data)
        }
      );
      
      if (!res.ok){
         const errorData = await res.json()
         throw new Error(`fetching error: ${res.status} - ${errorData.message || 'Unknown error'}`);
      }
      route.refresh();
      handleClickModal();
      reset()
    } catch (error) {
      console.error("canceling error", error);
    }
  };
  return (
    <section>
       <h1 className="text-xl font-bold mb-3.5 text-start">Canceling Appointment</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <Inputs
          inputType="text"
          label="Reason"
          name="reason"
          register={register}
          validation={{ required: "Reason is Required" }}
          placeholder="Please Enter Reason"
          error={errors?.reason}
        />
        <TextArea_Component
          label="Remark"
          name="remarkToPatient"
          register={register}
          validation={{ required: "Remark is Required" }}
          placeholder="Remark"
          error={errors?.remarkToPatient}
        />
        <Submit_Cancel_Form_Btn handleClickModal={handleClickModal} isSubmitting={isSubmitting} />
      </form>
    </section>
  );
}
