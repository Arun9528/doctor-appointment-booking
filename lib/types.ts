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
  gender: "Male" | "Female";
  email: string;
  password: string;
  age: number | null;
  education: string[];
  // education:{name:string}[]
  experienceYears: number | null;
  about: string;
  appointmentFee: number | null;
  // currency: string;
  category: {_id:string,name:string;}
  profile_photo: string;
  booking_time_Slots: string[];
  patients_appointments: PatientAppointment[];
  address:string;
  clinic_address:string;
  isAvailable:boolean
}

export interface UserData{
  phone_no:string;
  address:string;
  gender:"Male" | "Female";
  age:string;
}
export interface miniDoctorData{
   
  name:string;
  profile_photo:string;
  appointmentFee:number;
  clinic_address:string;
  category:{_id:string,name:string}
}
export interface cancellationProp{
  cancelledAt:string;
  cancelledBy:"patient" | "doctor";
  reason?:string;
  remarkToPatient?:string;
}
export interface myAppointment{
  date:string;
  timeSlot:string;
  providerId:miniDoctorData
 _id:string;
  status:"pending" | "cancelled" | "confirmed" | "completed";
  cancellation:cancellationProp
  createdAt:string;
}
interface doctorAppointmentdata{
  _id:string;
  date:string;
  providerId:{_id:string,appointmentFee:number,profile_photo:string,name:string,age:number}
  status:"pending" | "cancelled" | "confirmed" | "completed";
  timeSlot:string;
  userId:{
    _id:string;
    name:string;
    profile_photo:string;
    age:string;
  },
  cancellation:cancellationProp
  payment:{
    status:"Unpaid" | "Paid",
    amount: number
  }
}
interface dataofdoctorAppointment{
  appointments:doctorAppointmentdata[]
  summary:{
    iGaveYouEverything:boolean;
    requested:number;
    totalRevenue:number
    totalInDatabase:number;
    youGot:number
    totalAppointment:number
    totalPatient:number
  }
}
export interface doctorAppointment{
  data:dataofdoctorAppointment,
  message:string;
  success:boolean
}

// admin DashBoard

export interface AdminDashboard{
  summary:{
    totalAppointments:number;
    totalDoctors:number;
    totalPatients:number
  }
  latestAppointments:doctorAppointmentdata[]
}

// Admin All Doctor Appointment Page

export interface Admin_All_Appointment{
  appointments:doctorAppointmentdata[];
  pagination:{
    hasNextPage:boolean;
    hasPrevPage:boolean;
    page:number;
    perPage:number;
    showingFrom:number;
    showingTo:number;
    totalAppointments:number;
    totalPage:number
  }
}