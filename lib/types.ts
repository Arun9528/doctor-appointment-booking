export interface PatientAppointment {
  id: string;
  name: string;
  age: number;
  patient_photo: string;
  fees: number;
  date: string; // ISO or yyyy-mm-dd
  time: string;
  remark: string;
  status: "pending" | "completed" | "cancelled";
}

export interface doctorData {
  _id: string;
  name: string;
  gender: "Male" | "Female" | "Other";
  email: string;
  password: string;
  age: number;
  education: string[];
  experienceYears: number;
  about: string;
  appointmentFee: number;
  currency: string;
  category: {_id:string,name:string;}
  profile_photo: string;
  booking_time_Slots: string[];
  patients_appointments: PatientAppointment[];
  address:string;
  clinic_address:string;
}

export interface UserData{
  phone_no:string;
  address:string;
  gender:"Male" | "Female";
  dob:string;
}
export interface miniDoctorData{
   
  name:string;
  profile_photo:string;
  appointmentFee:number;
  clinic_address:string;
  category:{_id:string,name:string}
}
export interface myAppointment{
  date:string;
  timeSlot:string;
  providerId:miniDoctorData
 _id:string;
}