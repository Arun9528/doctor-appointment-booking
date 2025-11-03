interface appointmentProps{
    requestId:string;
    patientName:string;
    patientAge:number;
    reason:string;
    requestedSlotId:string;
    requestedSlot:string;
    status:string;
    requestedAt:string;
}
interface BookingProps{
    slotId:string;
    start:string;
    end:string;
    available:boolean
}
export interface doctorsInfo{
    id:string;
    name:string;
    age:number;
    education:string[];
    experienceYears:number;
    about:string;
    appointmentFee:number;
    currency:string;
    image:string;
    bookingSlots: BookingProps[];
    appointmentRequests:appointmentProps[]
}
export interface doctorsProps{
    specialty:string;
    doctors:doctorsInfo[]
}
export const doctorsBySpecialty:doctorsProps[] = [
  {
    specialty: "General physician",
    doctors: [
      {
        id: "gp_001",
        name: "Dr. Rohit Malhotra",
        age: 42,
        education: ["MBBS", "MD (General Medicine)"],
        experienceYears: 15,
        about: "Comprehensive primary care with emphasis on preventive medicine and chronic disease management.",
        appointmentFee: 500,
        currency: "INR",
        image: "/docPhotos/image (1).png",
        bookingSlots: [
          { slotId: "gp_001_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:20:00+05:30", available: true },
          { slotId: "gp_001_s2", start: "2025-10-20T09:30:00+05:30", end: "2025-10-20T09:50:00+05:30", available: false },
          { slotId: "gp_001_s3", start: "2025-10-21T11:00:00+05:30", end: "2025-10-21T11:20:00+05:30", available: true },
          { slotId: "gp_001_s4", start: "2025-10-22T14:00:00+05:30", end: "2025-10-22T14:20:00+05:30", available: true },
          { slotId: "gp_001_s5", start: "2025-10-23T16:00:00+05:30", end: "2025-10-23T16:20:00+05:30", available: true },
          { slotId: "gp_001_s6", start: "2025-10-24T09:00:00+05:30", end: "2025-10-24T09:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gp_001_01",
            patientName: "Asha Verma",
            patientAge: 29,
            reason: "Persistent fever and sore throat",
            requestedSlotId: "gp_001_s2",
            requestedSlot: "2025-10-20T09:30:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T10:05:00+05:30"
          },
          {
            requestId: "req_gp_001_02",
            patientName: "Vikram Joshi",
            patientAge: 48,
            reason: "Follow-up for hypertension",
            requestedSlotId: "gp_001_s3",
            requestedSlot: "2025-10-21T11:00:00+05:30",
            status: "confirmed",
            requestedAt: "2025-10-17T15:22:00+05:30"
          }
        ]
      },
      {
        id: "gp_002",
        name: "Dr. Meena Kapoor",
        age: 37,
        education: ["MBBS", "DNB (Family Medicine)"],
        experienceYears: 12,
        about: "Family medicine specialist focused on adult and geriatric care.",
        appointmentFee: 450,
        currency: "INR",
        image: "/docPhotos/image (2).png",
        bookingSlots: [
          { slotId: "gp_002_s1", start: "2025-10-20T10:00:00+05:30", end: "2025-10-20T10:20:00+05:30", available: true },
          { slotId: "gp_002_s2", start: "2025-10-21T09:00:00+05:30", end: "2025-10-21T09:20:00+05:30", available: true },
          { slotId: "gp_002_s3", start: "2025-10-22T13:00:00+05:30", end: "2025-10-22T13:20:00+05:30", available: true },
          { slotId: "gp_002_s4", start: "2025-10-23T15:30:00+05:30", end: "2025-10-23T15:50:00+05:30", available: true },
          { slotId: "gp_002_s5", start: "2025-10-24T11:00:00+05:30", end: "2025-10-24T11:20:00+05:30", available: false },
          { slotId: "gp_002_s6", start: "2025-10-25T09:00:00+05:30", end: "2025-10-25T09:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gp_002_01",
            patientName: "Rina Patel",
            patientAge: 63,
            reason: "Routine geriatric check-up",
            requestedSlotId: "gp_002_s5",
            requestedSlot: "2025-10-24T11:00:00+05:30",
            status: "rejected",
            requestedAt: "2025-10-16T09:10:00+05:30"
          }
        ]
      },
      {
        id: "gp_003",
        name: "Dr. Akshay Bhat",
        age: 45,
        education: ["MBBS", "MD (Internal Medicine)"],
        experienceYears: 18,
        about: "Experienced in acute care, infections and chronic disease protocols.",
        appointmentFee: 600,
        currency: "INR",
        image: "/docPhotos/image (3).png",
        bookingSlots: [
          { slotId: "gp_003_s1", start: "2025-10-20T08:30:00+05:30", end: "2025-10-20T08:50:00+05:30", available: true },
          { slotId: "gp_003_s2", start: "2025-10-21T10:00:00+05:30", end: "2025-10-21T10:20:00+05:30", available: true },
          { slotId: "gp_003_s3", start: "2025-10-22T12:00:00+05:30", end: "2025-10-22T12:20:00+05:30", available: false },
          { slotId: "gp_003_s4", start: "2025-10-23T14:30:00+05:30", end: "2025-10-23T14:50:00+05:30", available: true },
          { slotId: "gp_003_s5", start: "2025-10-24T16:30:00+05:30", end: "2025-10-24T16:50:00+05:30", available: true },
          { slotId: "gp_003_s6", start: "2025-10-25T09:30:00+05:30", end: "2025-10-25T09:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gp_004",
        name: "Dr. Leena Sharma",
        age: 33,
        education: ["MBBS", "MD (Community Medicine)"],
        experienceYears: 8,
        about: "Focus on preventive health, vaccinations and community wellness.",
        appointmentFee: 350,
        currency: "INR",
        image: "/docPhotos/image (4).png",
        bookingSlots: [
          { slotId: "gp_004_s1", start: "2025-10-20T11:00:00+05:30", end: "2025-10-20T11:20:00+05:30", available: true },
          { slotId: "gp_004_s2", start: "2025-10-21T13:00:00+05:30", end: "2025-10-21T13:20:00+05:30", available: true },
          { slotId: "gp_004_s3", start: "2025-10-22T15:00:00+05:30", end: "2025-10-22T15:20:00+05:30", available: true },
          { slotId: "gp_004_s4", start: "2025-10-23T10:00:00+05:30", end: "2025-10-23T10:20:00+05:30", available: false },
          { slotId: "gp_004_s5", start: "2025-10-24T12:30:00+05:30", end: "2025-10-24T12:50:00+05:30", available: true },
          { slotId: "gp_004_s6", start: "2025-10-25T14:00:00+05:30", end: "2025-10-25T14:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gp_004_01",
            patientName: "Sahil Mehta",
            patientAge: 34,
            reason: "Vaccination query",
            requestedSlotId: "gp_004_s4",
            requestedSlot: "2025-10-23T10:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T08:12:00+05:30"
          }
        ]
      },
      {
        id: "gp_005",
        name: "Dr. Nisha Rao",
        age: 50,
        education: ["MBBS", "MD (General Medicine)", "FICM"],
        experienceYears: 25,
        about: "Chronic disease specialist — diabetes and hypertension clinics.",
        appointmentFee: 700,
        currency: "INR",
        image: "/docPhotos/image (5).png",
        bookingSlots: [
          { slotId: "gp_005_s1", start: "2025-10-20T17:00:00+05:30", end: "2025-10-20T17:20:00+05:30", available: true },
          { slotId: "gp_005_s2", start: "2025-10-21T17:30:00+05:30", end: "2025-10-21T17:50:00+05:30", available: true },
          { slotId: "gp_005_s3", start: "2025-10-22T18:00:00+05:30", end: "2025-10-22T18:20:00+05:30", available: true },
          { slotId: "gp_005_s4", start: "2025-10-23T18:30:00+05:30", end: "2025-10-23T18:50:00+05:30", available: true },
          { slotId: "gp_005_s5", start: "2025-10-24T19:00:00+05:30", end: "2025-10-24T19:20:00+05:30", available: true },
          { slotId: "gp_005_s6", start: "2025-10-25T19:30:00+05:30", end: "2025-10-25T19:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gp_006",
        name: "Dr. Suresh Iyer",
        age: 39,
        education: ["MBBS", "DNB (Internal Medicine)"],
        experienceYears: 14,
        about: "Acute care and workplace health services.",
        appointmentFee: 480,
        currency: "INR",
        image: "/docPhotos/image (6).png",
        bookingSlots: [
          { slotId: "gp_006_s1", start: "2025-10-20T08:00:00+05:30", end: "2025-10-20T08:20:00+05:30", available: true },
          { slotId: "gp_006_s2", start: "2025-10-21T08:30:00+05:30", end: "2025-10-21T08:50:00+05:30", available: true },
          { slotId: "gp_006_s3", start: "2025-10-22T09:00:00+05:30", end: "2025-10-22T09:20:00+05:30", available: true },
          { slotId: "gp_006_s4", start: "2025-10-23T09:30:00+05:30", end: "2025-10-23T09:50:00+05:30", available: true },
          { slotId: "gp_006_s5", start: "2025-10-24T10:00:00+05:30", end: "2025-10-24T10:20:00+05:30", available: true },
          { slotId: "gp_006_s6", start: "2025-10-25T10:30:00+05:30", end: "2025-10-25T10:50:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gp_006_01",
            patientName: "Manju Singh",
            patientAge: 52,
            reason: "Chest discomfort — urgent",
            requestedSlotId: "gp_006_s1",
            requestedSlot: "2025-10-20T08:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T07:50:00+05:30"
          }
        ]
      }
    ]
  },
  {
    specialty: "Gynecologist",
    doctors: [
      {
        id: "gyn_001",
        name: "Dr. Priya Desai",
        age: 40,
        education: ["MBBS", "MS (OBGYN)"],
        experienceYears: 16,
        about: "High-risk pregnancy and minimally invasive gynecologic surgery.",
        appointmentFee: 1200,
        currency: "INR",
        image: "/docPhotos/image (7).png",
        bookingSlots: [
          { slotId: "gyn_001_s1", start: "2025-10-20T09:30:00+05:30", end: "2025-10-20T09:50:00+05:30", available: false },
          { slotId: "gyn_001_s2", start: "2025-10-21T11:30:00+05:30", end: "2025-10-21T11:50:00+05:30", available: true },
          { slotId: "gyn_001_s3", start: "2025-10-22T14:00:00+05:30", end: "2025-10-22T14:20:00+05:30", available: true },
          { slotId: "gyn_001_s4", start: "2025-10-23T16:00:00+05:30", end: "2025-10-23T16:20:00+05:30", available: true },
          { slotId: "gyn_001_s5", start: "2025-10-24T10:00:00+05:30", end: "2025-10-24T10:20:00+05:30", available: true },
          { slotId: "gyn_001_s6", start: "2025-10-25T12:00:00+05:30", end: "2025-10-25T12:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gyn_001_01",
            patientName: "Maya Nair",
            patientAge: 31,
            reason: "First trimester check-up",
            requestedSlotId: "gyn_001_s1",
            requestedSlot: "2025-10-20T09:30:00+05:30",
            status: "confirmed",
            requestedAt: "2025-10-17T12:00:00+05:30"
          }
        ]
      },
      {
        id: "gyn_002",
        name: "Dr. Aarati Kulkarni",
        age: 47,
        education: ["MBBS", "MD (Obstetrics & Gynaecology)"],
        experienceYears: 20,
        about: "Infertility treatments and laparoscopic gynecology.",
        appointmentFee: 1500,
        currency: "INR",
        image: "/docPhotos/image (8).png",
        bookingSlots: [
          { slotId: "gyn_002_s1", start: "2025-10-20T13:00:00+05:30", end: "2025-10-20T13:20:00+05:30", available: true },
          { slotId: "gyn_002_s2", start: "2025-10-21T15:00:00+05:30", end: "2025-10-21T15:20:00+05:30", available: true },
          { slotId: "gyn_002_s3", start: "2025-10-22T09:00:00+05:30", end: "2025-10-22T09:20:00+05:30", available: true },
          { slotId: "gyn_002_s4", start: "2025-10-23T11:00:00+05:30", end: "2025-10-23T11:20:00+05:30", available: true },
          { slotId: "gyn_002_s5", start: "2025-10-24T17:00:00+05:30", end: "2025-10-24T17:20:00+05:30", available: false },
          { slotId: "gyn_002_s6", start: "2025-10-25T18:00:00+05:30", end: "2025-10-25T18:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gyn_002_01",
            patientName: "Kavita Rao",
            patientAge: 28,
            reason: "PCOS consultation",
            requestedSlotId: "gyn_002_s5",
            requestedSlot: "2025-10-24T17:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T09:45:00+05:30"
          }
        ]
      },
      {
        id: "gyn_003",
        name: "Dr. Suman Ghosh",
        age: 36,
        education: ["MBBS", "DGO"],
        experienceYears: 11,
        about: "Antenatal care and adolescent gynecology.",
        appointmentFee: 900,
        currency: "INR",
        image: "/docPhotos/image (9).png",
        bookingSlots: [
          { slotId: "gyn_003_s1", start: "2025-10-20T08:30:00+05:30", end: "2025-10-20T08:50:00+05:30", available: true },
          { slotId: "gyn_003_s2", start: "2025-10-21T10:30:00+05:30", end: "2025-10-21T10:50:00+05:30", available: true },
          { slotId: "gyn_003_s3", start: "2025-10-22T12:30:00+05:30", end: "2025-10-22T12:50:00+05:30", available: true },
          { slotId: "gyn_003_s4", start: "2025-10-23T14:30:00+05:30", end: "2025-10-23T14:50:00+05:30", available: true },
          { slotId: "gyn_003_s5", start: "2025-10-24T16:00:00+05:30", end: "2025-10-24T16:20:00+05:30", available: true },
          { slotId: "gyn_003_s6", start: "2025-10-25T09:00:00+05:30", end: "2025-10-25T09:20:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gyn_004",
        name: "Dr. Rekha Menon",
        age: 52,
        education: ["MBBS", "MS (OBGYN)", "Fellowship in Reproductive Medicine"],
        experienceYears: 26,
        about: "Reproductive medicine and complex obstetric care.",
        appointmentFee: 1800,
        currency: "INR",
        image: "/docPhotos/image (10).png",
        bookingSlots: [
          { slotId: "gyn_004_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:20:00+05:30", available: true },
          { slotId: "gyn_004_s2", start: "2025-10-21T11:00:00+05:30", end: "2025-10-21T11:20:00+05:30", available: true },
          { slotId: "gyn_004_s3", start: "2025-10-22T13:00:00+05:30", end: "2025-10-22T13:20:00+05:30", available: true },
          { slotId: "gyn_004_s4", start: "2025-10-23T15:00:00+05:30", end: "2025-10-23T15:20:00+05:30", available: true },
          { slotId: "gyn_004_s5", start: "2025-10-24T17:30:00+05:30", end: "2025-10-24T17:50:00+05:30", available: true },
          { slotId: "gyn_004_s6", start: "2025-10-25T19:00:00+05:30", end: "2025-10-25T19:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gyn_004_01",
            patientName: "Neha Gupta",
            patientAge: 35,
            reason: "Infertility evaluation",
            requestedSlotId: "gyn_004_s2",
            requestedSlot: "2025-10-21T11:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T11:01:00+05:30"
          }
        ]
      },
      {
        id: "gyn_005",
        name: "Dr. Anjali Verma",
        age: 34,
        education: ["MBBS", "DNB (Obstetrics & Gynaecology)"],
        experienceYears: 9,
        about: "Well-woman clinics and contraception counseling.",
        appointmentFee: 800,
        currency: "INR",
        image: "/docPhotos/image (11).png",
        bookingSlots: [
          { slotId: "gyn_005_s1", start: "2025-10-20T10:30:00+05:30", end: "2025-10-20T10:50:00+05:30", available: true },
          { slotId: "gyn_005_s2", start: "2025-10-21T12:30:00+05:30", end: "2025-10-21T12:50:00+05:30", available: true },
          { slotId: "gyn_005_s3", start: "2025-10-22T14:30:00+05:30", end: "2025-10-22T14:50:00+05:30", available: true },
          { slotId: "gyn_005_s4", start: "2025-10-23T16:30:00+05:30", end: "2025-10-23T16:50:00+05:30", available: true },
          { slotId: "gyn_005_s5", start: "2025-10-24T11:30:00+05:30", end: "2025-10-24T11:50:00+05:30", available: true },
          { slotId: "gyn_005_s6", start: "2025-10-25T13:30:00+05:30", end: "2025-10-25T13:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gyn_006",
        name: "Dr. Bhavana Iyer",
        age: 44,
        education: ["MBBS", "MS (OBGYN)"],
        experienceYears: 19,
        about: "Menopause management and pelvic floor therapy.",
        appointmentFee: 1000,
        currency: "INR",
        image: "/docPhotos/image (12).png",
        bookingSlots: [
          { slotId: "gyn_006_s1", start: "2025-10-20T15:00:00+05:30", end: "2025-10-20T15:20:00+05:30", available: true },
          { slotId: "gyn_006_s2", start: "2025-10-21T16:00:00+05:30", end: "2025-10-21T16:20:00+05:30", available: true },
          { slotId: "gyn_006_s3", start: "2025-10-22T17:00:00+05:30", end: "2025-10-22T17:20:00+05:30", available: true },
          { slotId: "gyn_006_s4", start: "2025-10-23T09:30:00+05:30", end: "2025-10-23T09:50:00+05:30", available: true },
          { slotId: "gyn_006_s5", start: "2025-10-24T11:00:00+05:30", end: "2025-10-24T11:20:00+05:30", available: true },
          { slotId: "gyn_006_s6", start: "2025-10-25T12:00:00+05:30", end: "2025-10-25T12:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gyn_006_01",
            patientName: "Pooja Dixit",
            patientAge: 49,
            reason: "Menopause symptoms",
            requestedSlotId: "gyn_006_s4",
            requestedSlot: "2025-10-23T09:30:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T09:00:00+05:30"
          }
        ]
      }
    ]
  },
  {
    specialty: "Dermatologist",
    doctors: [
      {
        id: "derm_001",
        name: "Dr. Karan Malhotra",
        age: 38,
        education: ["MBBS", "MD (Dermatology)"],
        experienceYears: 12,
        about: "Medical and cosmetic dermatology — acne, pigment disorders and laser procedures.",
        appointmentFee: 800,
        currency: "INR",
        image: "/docPhotos/image (13).png",
        bookingSlots: [
          { slotId: "derm_001_s1", start: "2025-10-20T10:00:00+05:30", end: "2025-10-20T10:20:00+05:30", available: true },
          { slotId: "derm_001_s2", start: "2025-10-21T10:30:00+05:30", end: "2025-10-21T10:50:00+05:30", available: true },
          { slotId: "derm_001_s3", start: "2025-10-22T11:00:00+05:30", end: "2025-10-22T11:20:00+05:30", available: true },
          { slotId: "derm_001_s4", start: "2025-10-23T12:00:00+05:30", end: "2025-10-23T12:20:00+05:30", available: true },
          { slotId: "derm_001_s5", start: "2025-10-24T13:00:00+05:30", end: "2025-10-24T13:20:00+05:30", available: false },
          { slotId: "derm_001_s6", start: "2025-10-25T14:00:00+05:30", end: "2025-10-25T14:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_derm_001_01",
            patientName: "Rajat Kumar",
            patientAge: 24,
            reason: "Acne treatment",
            requestedSlotId: "derm_001_s5",
            requestedSlot: "2025-10-24T13:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-17T18:20:00+05:30"
          }
        ]
      },
      {
        id: "derm_002",
        name: "Dr. Shweta Bansal",
        age: 31,
        education: ["MBBS", "DVD (Dermatology)"],
        experienceYears: 7,
        about: "Cosmetic procedures, mole checks and pediatric dermatology.",
        appointmentFee: 700,
        currency: "INR",
        image: "/docPhotos/image (14).png",
        bookingSlots: [
          { slotId: "derm_002_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:20:00+05:30", available: true },
          { slotId: "derm_002_s2", start: "2025-10-21T09:30:00+05:30", end: "2025-10-21T09:50:00+05:30", available: true },
          { slotId: "derm_002_s3", start: "2025-10-22T10:30:00+05:30", end: "2025-10-22T10:50:00+05:30", available: true },
          { slotId: "derm_002_s4", start: "2025-10-23T11:30:00+05:30", end: "2025-10-23T11:50:00+05:30", available: true },
          { slotId: "derm_002_s5", start: "2025-10-24T12:30:00+05:30", end: "2025-10-24T12:50:00+05:30", available: true },
          { slotId: "derm_002_s6", start: "2025-10-25T13:30:00+05:30", end: "2025-10-25T13:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "derm_003",
        name: "Dr. Neeraj Singh",
        age: 46,
        education: ["MBBS", "MD (Dermatology)", "Fellowship in Dermatosurgery"],
        experienceYears: 20,
        about: "Pigmentation disorders and surgical dermatology.",
        appointmentFee: 1200,
        currency: "INR",
        image: "/docPhotos/image (6).png",
        bookingSlots: [
          { slotId: "derm_003_s1", start: "2025-10-20T15:00:00+05:30", end: "2025-10-20T15:20:00+05:30", available: true },
          { slotId: "derm_003_s2", start: "2025-10-21T15:30:00+05:30", end: "2025-10-21T15:50:00+05:30", available: true },
          { slotId: "derm_003_s3", start: "2025-10-22T16:00:00+05:30", end: "2025-10-22T16:20:00+05:30", available: true },
          { slotId: "derm_003_s4", start: "2025-10-23T17:00:00+05:30", end: "2025-10-23T17:20:00+05:30", available: true },
          { slotId: "derm_003_s5", start: "2025-10-24T18:00:00+05:30", end: "2025-10-24T18:20:00+05:30", available: true },
          { slotId: "derm_003_s6", start: "2025-10-25T18:30:00+05:30", end: "2025-10-25T18:50:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_derm_003_01",
            patientName: "Sheetal Rao",
            patientAge: 41,
            reason: "Mole removal discussion",
            requestedSlotId: "derm_003_s1",
            requestedSlot: "2025-10-20T15:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T08:00:00+05:30"
          }
        ]
      },
      {
        id: "derm_004",
        name: "Dr. Farah Khan",
        age: 29,
        education: ["MBBS", "MD (Dermatology)"],
        experienceYears: 5,
        about: "Focus on acne management and non-invasive cosmetic dermatology.",
        appointmentFee: 650,
        currency: "INR",
        image: "/docPhotos/image (16).png",
        bookingSlots: [
          { slotId: "derm_004_s1", start: "2025-10-20T11:00:00+05:30", end: "2025-10-20T11:20:00+05:30", available: true },
          { slotId: "derm_004_s2", start: "2025-10-21T11:30:00+05:30", end: "2025-10-21T11:50:00+05:30", available: true },
          { slotId: "derm_004_s3", start: "2025-10-22T12:00:00+05:30", end: "2025-10-22T12:20:00+05:30", available: true },
          { slotId: "derm_004_s4", start: "2025-10-23T13:00:00+05:30", end: "2025-10-23T13:20:00+05:30", available: true },
          { slotId: "derm_004_s5", start: "2025-10-24T14:00:00+05:30", end: "2025-10-24T14:20:00+05:30", available: true },
          { slotId: "derm_004_s6", start: "2025-10-25T15:00:00+05:30", end: "2025-10-25T15:20:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "derm_005",
        name: "Dr. Vikram Patel",
        age: 41,
        education: ["MBBS", "MD (Dermatology)"],
        experienceYears: 17,
        about: "Eczema and allergy-related skin conditions, patch testing specialist.",
        appointmentFee: 900,
        currency: "INR",
        image: "/docPhotos/image (1).png",
        bookingSlots: [
          { slotId: "derm_005_s1", start: "2025-10-20T09:15:00+05:30", end: "2025-10-20T09:35:00+05:30", available: true },
          { slotId: "derm_005_s2", start: "2025-10-21T09:45:00+05:30", end: "2025-10-21T10:05:00+05:30", available: true },
          { slotId: "derm_005_s3", start: "2025-10-22T10:15:00+05:30", end: "2025-10-22T10:35:00+05:30", available: true },
          { slotId: "derm_005_s4", start: "2025-10-23T10:45:00+05:30", end: "2025-10-23T11:05:00+05:30", available: true },
          { slotId: "derm_005_s5", start: "2025-10-24T11:15:00+05:30", end: "2025-10-24T11:35:00+05:30", available: true },
          { slotId: "derm_005_s6", start: "2025-10-25T11:45:00+05:30", end: "2025-10-25T12:05:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_derm_005_01",
            patientName: "Tanya Malhotra",
            patientAge: 27,
            reason: "Atopic dermatitis flare-up",
            requestedSlotId: "derm_005_s1",
            requestedSlot: "2025-10-20T09:15:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T07:30:00+05:30"
          }
        ]
      },
      {
        id: "derm_006",
        name: "Dr. Ritu Sen",
        age: 35,
        education: ["MBBS", "MD (Dermatology)"],
        experienceYears: 10,
        about: "Dermatologic surgery and hair disorders specialist.",
        appointmentFee: 950,
        currency: "INR",
        image: "/docPhotos/image (2).png",
        bookingSlots: [
          { slotId: "derm_006_s1", start: "2025-10-20T16:00:00+05:30", end: "2025-10-20T16:20:00+05:30", available: true },
          { slotId: "derm_006_s2", start: "2025-10-21T16:30:00+05:30", end: "2025-10-21T16:50:00+05:30", available: true },
          { slotId: "derm_006_s3", start: "2025-10-22T17:00:00+05:30", end: "2025-10-22T17:20:00+05:30", available: true },
          { slotId: "derm_006_s4", start: "2025-10-23T17:30:00+05:30", end: "2025-10-23T17:50:00+05:30", available: true },
          { slotId: "derm_006_s5", start: "2025-10-24T18:15:00+05:30", end: "2025-10-24T18:35:00+05:30", available: true },
          { slotId: "derm_006_s6", start: "2025-10-25T18:45:00+05:30", end: "2025-10-25T19:05:00+05:30", available: true }
        ],
        appointmentRequests: []
      }
    ]
  },
  {
    specialty: "Pediatricians",
    doctors: [
      {
        id: "ped_001",
        name: "Dr. Kavita Shah",
        age: 39,
        education: ["MBBS", "MD (Pediatrics)"],
        experienceYears: 13,
        about: "Neonatal and childhood immunization specialist.",
        appointmentFee: 600,
        currency: "INR",
        image: "/docPhotos/image (3).png",
        bookingSlots: [
          { slotId: "ped_001_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:20:00+05:30", available: false },
          { slotId: "ped_001_s2", start: "2025-10-21T09:30:00+05:30", end: "2025-10-21T09:50:00+05:30", available: true },
          { slotId: "ped_001_s3", start: "2025-10-22T10:00:00+05:30", end: "2025-10-22T10:20:00+05:30", available: true },
          { slotId: "ped_001_s4", start: "2025-10-23T11:00:00+05:30", end: "2025-10-23T11:20:00+05:30", available: true },
          { slotId: "ped_001_s5", start: "2025-10-24T12:00:00+05:30", end: "2025-10-24T12:20:00+05:30", available: true },
          { slotId: "ped_001_s6", start: "2025-10-25T13:00:00+05:30", end: "2025-10-25T13:20:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_ped_001_01",
            patientName: "Rohan (parent: Deepak)",
            patientAge: 3,
            reason: "High fever and rash",
            requestedSlotId: "ped_001_s1",
            requestedSlot: "2025-10-20T09:00:00+05:30",
            status: "confirmed",
            requestedAt: "2025-10-17T14:00:00+05:30"
          }
        ]
      },
      {
        id: "ped_002",
        name: "Dr. Mala Reddy",
        age: 44,
        education: ["MBBS", "DCH", "MD (Pediatrics)"],
        experienceYears: 20,
        about: "Chronic pediatric care and adolescent medicine.",
        appointmentFee: 750,
        currency: "INR",
        image: "/docPhotos/image (4).png",
        bookingSlots: [
          { slotId: "ped_002_s1", start: "2025-10-20T10:30:00+05:30", end: "2025-10-20T10:50:00+05:30", available: true },
          { slotId: "ped_002_s2", start: "2025-10-21T11:30:00+05:30", end: "2025-10-21T11:50:00+05:30", available: true },
          { slotId: "ped_002_s3", start: "2025-10-22T12:30:00+05:30", end: "2025-10-22T12:50:00+05:30", available: true },
          { slotId: "ped_002_s4", start: "2025-10-23T13:30:00+05:30", end: "2025-10-23T13:50:00+05:30", available: true },
          { slotId: "ped_002_s5", start: "2025-10-24T14:30:00+05:30", end: "2025-10-24T14:50:00+05:30", available: true },
          { slotId: "ped_002_s6", start: "2025-10-25T15:30:00+05:30", end: "2025-10-25T15:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "ped_003",
        name: "Dr. Arjun Nair",
        age: 34,
        education: ["MBBS", "MD (Pediatrics)"],
        experienceYears: 9,
        about: "Acute pediatric infections and childhood development monitoring.",
        appointmentFee: 550,
        currency: "INR",
        image: "/docPhotos/image (5).png",
        bookingSlots: [
          { slotId: "ped_003_s1", start: "2025-10-20T08:30:00+05:30", end: "2025-10-20T08:50:00+05:30", available: true },
          { slotId: "ped_003_s2", start: "2025-10-21T08:50:00+05:30", end: "2025-10-21T09:10:00+05:30", available: true },
          { slotId: "ped_003_s3", start: "2025-10-22T09:30:00+05:30", end: "2025-10-22T09:50:00+05:30", available: true },
          { slotId: "ped_003_s4", start: "2025-10-23T10:30:00+05:30", end: "2025-10-23T10:50:00+05:30", available: true },
          { slotId: "ped_003_s5", start: "2025-10-24T11:30:00+05:30", end: "2025-10-24T11:50:00+05:30", available: true },
          { slotId: "ped_003_s6", start: "2025-10-25T12:30:00+05:30", end: "2025-10-25T12:50:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_ped_003_01",
            patientName: "Ishaan (parent: Anu)",
            patientAge: 7,
            reason: "Asthma follow-up",
            requestedSlotId: "ped_003_s4",
            requestedSlot: "2025-10-23T10:30:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T10:30:00+05:30"
          }
        ]
      },
      {
        id: "ped_004",
        name: "Dr. Sneha Kulkarni",
        age: 30,
        education: ["MBBS", "DCH"],
        experienceYears: 6,
        about: "Growth and nutrition specialist for infants and toddlers.",
        appointmentFee: 500,
        currency: "INR",
        image: "/docPhotos/image (6).png",
        bookingSlots: [
          { slotId: "ped_004_s1", start: "2025-10-20T11:00:00+05:30", end: "2025-10-20T11:20:00+05:30", available: true },
          { slotId: "ped_004_s2", start: "2025-10-21T11:30:00+05:30", end: "2025-10-21T11:50:00+05:30", available: true },
          { slotId: "ped_004_s3", start: "2025-10-22T12:00:00+05:30", end: "2025-10-22T12:20:00+05:30", available: true },
          { slotId: "ped_004_s4", start: "2025-10-23T12:30:00+05:30", end: "2025-10-23T12:50:00+05:30", available: true },
          { slotId: "ped_004_s5", start: "2025-10-24T13:00:00+05:30", end: "2025-10-24T13:20:00+05:30", available: true },
          { slotId: "ped_004_s6", start: "2025-10-25T13:30:00+05:30", end: "2025-10-25T13:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "ped_005",
        name: "Dr. Rohini Deshmukh",
        age: 48,
        education: ["MBBS", "MD (Pediatrics)"],
        experienceYears: 23,
        about: "Pediatric emergency care and neonatal resuscitation trainer.",
        appointmentFee: 900,
        currency: "INR",
        image: "/docPhotos/image (7).png",
        bookingSlots: [
          { slotId: "ped_005_s1", start: "2025-10-20T14:00:00+05:30", end: "2025-10-20T14:20:00+05:30", available: true },
          { slotId: "ped_005_s2", start: "2025-10-21T14:30:00+05:30", end: "2025-10-21T14:50:00+05:30", available: true },
          { slotId: "ped_005_s3", start: "2025-10-22T15:00:00+05:30", end: "2025-10-22T15:20:00+05:30", available: true },
          { slotId: "ped_005_s4", start: "2025-10-23T15:30:00+05:30", end: "2025-10-23T15:50:00+05:30", available: true },
          { slotId: "ped_005_s5", start: "2025-10-24T16:00:00+05:30", end: "2025-10-24T16:20:00+05:30", available: true },
          { slotId: "ped_005_s6", start: "2025-10-25T16:30:00+05:30", end: "2025-10-25T16:50:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "ped_006",
        name: "Dr. Sameer Patel",
        age: 36,
        education: ["MBBS", "MD (Pediatrics)"],
        experienceYears: 11,
        about: "Developmental pediatrics and behavioral guidance.",
        appointmentFee: 650,
        currency: "INR",
        image: "/docPhotos/image (8).png",
        bookingSlots: [
          { slotId: "ped_006_s1", start: "2025-10-20T08:00:00+05:30", end: "2025-10-20T08:20:00+05:30", available: true },
          { slotId: "ped_006_s2", start: "2025-10-21T08:30:00+05:30", end: "2025-10-21T08:50:00+05:30", available: true },
          { slotId: "ped_006_s3", start: "2025-10-22T09:00:00+05:30", end: "2025-10-22T09:20:00+05:30", available: true },
          { slotId: "ped_006_s4", start: "2025-10-23T09:30:00+05:30", end: "2025-10-23T09:50:00+05:30", available: true },
          { slotId: "ped_006_s5", start: "2025-10-24T10:00:00+05:30", end: "2025-10-24T10:20:00+05:30", available: true },
          { slotId: "ped_006_s6", start: "2025-10-25T10:30:00+05:30", end: "2025-10-25T10:50:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_ped_006_01",
            patientName: "Aarav (parent: Sunita)",
            patientAge: 2,
            reason: "Feeding issues",
            requestedSlotId: "ped_006_s3",
            requestedSlot: "2025-10-22T09:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T06:55:00+05:30"
          }
        ]
      }
    ]
  },
  {
    specialty: "Neurologist",
    doctors: [
      {
        id: "neuro_001",
        name: "Dr. Pradeep Rao",
        age: 52,
        education: ["MBBS", "MD (General Medicine)", "DM (Neurology)"],
        experienceYears: 27,
        about: "Stroke care, epilepsy management and neurorehabilitation.",
        appointmentFee: 2000,
        currency: "INR",
        image: "/docPhotos/image (9).png",
        bookingSlots: [
          { slotId: "neuro_001_s1", start: "2025-10-20T11:00:00+05:30", end: "2025-10-20T11:30:00+05:30", available: true },
          { slotId: "neuro_001_s2", start: "2025-10-21T11:45:00+05:30", end: "2025-10-21T12:15:00+05:30", available: true },
          { slotId: "neuro_001_s3", start: "2025-10-22T14:00:00+05:30", end: "2025-10-22T14:30:00+05:30", available: true },
          { slotId: "neuro_001_s4", start: "2025-10-23T15:00:00+05:30", end: "2025-10-23T15:30:00+05:30", available: true },
          { slotId: "neuro_001_s5", start: "2025-10-24T16:00:00+05:30", end: "2025-10-24T16:30:00+05:30", available: true },
          { slotId: "neuro_001_s6", start: "2025-10-25T17:00:00+05:30", end: "2025-10-25T17:30:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_neuro_001_01",
            patientName: "Ramesh Iyer",
            patientAge: 60,
            reason: "Recent transient weakness episodes",
            requestedSlotId: "neuro_001_s1",
            requestedSlot: "2025-10-20T11:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T09:10:00+05:30"
          }
        ]
      },
      {
        id: "neuro_002",
        name: "Dr. Ananya Bose",
        age: 41,
        education: ["MBBS", "DM (Neurology)"],
        experienceYears: 16,
        about: "Headache disorders, migraine and neuromuscular diseases.",
        appointmentFee: 1800,
        currency: "INR",
        image: "/docPhotos/image (10).png",
        bookingSlots: [
          { slotId: "neuro_002_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:30:00+05:30", available: true },
          { slotId: "neuro_002_s2", start: "2025-10-21T09:45:00+05:30", end: "2025-10-21T10:15:00+05:30", available: true },
          { slotId: "neuro_002_s3", start: "2025-10-22T10:30:00+05:30", end: "2025-10-22T11:00:00+05:30", available: true },
          { slotId: "neuro_002_s4", start: "2025-10-23T11:15:00+05:30", end: "2025-10-23T11:45:00+05:30", available: true },
          { slotId: "neuro_002_s5", start: "2025-10-24T12:00:00+05:30", end: "2025-10-24T12:30:00+05:30", available: true },
          { slotId: "neuro_002_s6", start: "2025-10-25T13:00:00+05:30", end: "2025-10-25T13:30:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "neuro_003",
        name: "Dr. Vikram Khanna",
        age: 48,
        education: ["MBBS", "MD", "DM (Neurology)"],
        experienceYears: 22,
        about: "Movement disorders and Parkinson's disease specialist.",
        appointmentFee: 2100,
        currency: "INR",
        image: "/docPhotos/image (11).png",
        bookingSlots: [
          { slotId: "neuro_003_s1", start: "2025-10-20T14:00:00+05:30", end: "2025-10-20T14:30:00+05:30", available: true },
          { slotId: "neuro_003_s2", start: "2025-10-21T14:45:00+05:30", end: "2025-10-21T15:15:00+05:30", available: true },
          { slotId: "neuro_003_s3", start: "2025-10-22T15:30:00+05:30", end: "2025-10-22T16:00:00+05:30", available: true },
          { slotId: "neuro_003_s4", start: "2025-10-23T16:15:00+05:30", end: "2025-10-23T16:45:00+05:30", available: true },
          { slotId: "neuro_003_s5", start: "2025-10-24T17:00:00+05:30", end: "2025-10-24T17:30:00+05:30", available: true },
          { slotId: "neuro_003_s6", start: "2025-10-25T17:45:00+05:30", end: "2025-10-25T18:15:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_neuro_003_01",
            patientName: "Sunil Dutt",
            patientAge: 68,
            reason: "Tremors consultation",
            requestedSlotId: "neuro_003_s1",
            requestedSlot: "2025-10-20T14:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T08:20:00+05:30"
          }
        ]
      },
      {
        id: "neuro_004",
        name: "Dr. Meera Iyer",
        age: 35,
        education: ["MBBS", "DM (Neurology)"],
        experienceYears: 10,
        about: "Epilepsy management and EEG interpretation.",
        appointmentFee: 1700,
        currency: "INR",
        image: "/docPhotos/image (12).png",
        bookingSlots: [
          { slotId: "neuro_004_s1", start: "2025-10-20T10:00:00+05:30", end: "2025-10-20T10:30:00+05:30", available: true },
          { slotId: "neuro_004_s2", start: "2025-10-21T10:45:00+05:30", end: "2025-10-21T11:15:00+05:30", available: true },
          { slotId: "neuro_004_s3", start: "2025-10-22T11:30:00+05:30", end: "2025-10-22T12:00:00+05:30", available: true },
          { slotId: "neuro_004_s4", start: "2025-10-23T12:15:00+05:30", end: "2025-10-23T12:45:00+05:30", available: true },
          { slotId: "neuro_004_s5", start: "2025-10-24T13:30:00+05:30", end: "2025-10-24T14:00:00+05:30", available: true },
          { slotId: "neuro_004_s6", start: "2025-10-25T14:15:00+05:30", end: "2025-10-25T14:45:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "neuro_005",
        name: "Dr. Rohit Chawla",
        age: 44,
        education: ["MBBS", "DM (Neurology)"],
        experienceYears: 18,
        about: "Neurocritical care and neuromuscular disorders.",
        appointmentFee: 2200,
        currency: "INR",
        image: "/docPhotos/image (13).png",
        bookingSlots: [
          { slotId: "neuro_005_s1", start: "2025-10-20T09:15:00+05:30", end: "2025-10-20T09:45:00+05:30", available: true },
          { slotId: "neuro_005_s2", start: "2025-10-21T09:50:00+05:30", end: "2025-10-21T10:20:00+05:30", available: true },
          { slotId: "neuro_005_s3", start: "2025-10-22T10:30:00+05:30", end: "2025-10-22T11:00:00+05:30", available: true },
          { slotId: "neuro_005_s4", start: "2025-10-23T11:15:00+05:30", end: "2025-10-23T11:45:00+05:30", available: true },
          { slotId: "neuro_005_s5", start: "2025-10-24T12:30:00+05:30", end: "2025-10-24T13:00:00+05:30", available: true },
          { slotId: "neuro_005_s6", start: "2025-10-25T13:15:00+05:30", end: "2025-10-25T13:45:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "neuro_006",
        name: "Dr. Nidhi Agarwal",
        age: 32,
        education: ["MBBS", "DM (Neurology)"],
        experienceYears: 7,
        about: "Peripheral neuropathy and headache clinic.",
        appointmentFee: 1600,
        currency: "INR",
        image: "/docPhotos/image (14).png",
        bookingSlots: [
          { slotId: "neuro_006_s1", start: "2025-10-20T16:00:00+05:30", end: "2025-10-20T16:30:00+05:30", available: true },
          { slotId: "neuro_006_s2", start: "2025-10-21T16:45:00+05:30", end: "2025-10-21T17:15:00+05:30", available: true },
          { slotId: "neuro_006_s3", start: "2025-10-22T17:30:00+05:30", end: "2025-10-22T18:00:00+05:30", available: true },
          { slotId: "neuro_006_s4", start: "2025-10-23T18:15:00+05:30", end: "2025-10-23T18:45:00+05:30", available: true },
          { slotId: "neuro_006_s5", start: "2025-10-24T19:00:00+05:30", end: "2025-10-24T19:30:00+05:30", available: true },
          { slotId: "neuro_006_s6", start: "2025-10-25T19:45:00+05:30", end: "2025-10-25T20:15:00+05:30", available: true }
        ],
        appointmentRequests: []
      }
    ]
  },
  {
    specialty: "Gastroenterologist",
    doctors: [
      {
        id: "gas_001",
        name: "Dr. Amit Gupta",
        age: 50,
        education: ["MBBS", "MD", "DM (Gastroenterology)"],
        experienceYears: 25,
        about: "Liver diseases, endoscopy and chronic GI disorders.",
        appointmentFee: 1800,
        currency: "INR",
        image: "/docPhotos/image (5).png",
        bookingSlots: [
          { slotId: "gas_001_s1", start: "2025-10-20T09:00:00+05:30", end: "2025-10-20T09:30:00+05:30", available: true },
          { slotId: "gas_001_s2", start: "2025-10-21T09:45:00+05:30", end: "2025-10-21T10:15:00+05:30", available: true },
          { slotId: "gas_001_s3", start: "2025-10-22T11:00:00+05:30", end: "2025-10-22T11:30:00+05:30", available: true },
          { slotId: "gas_001_s4", start: "2025-10-23T12:00:00+05:30", end: "2025-10-23T12:30:00+05:30", available: true },
          { slotId: "gas_001_s5", start: "2025-10-24T13:00:00+05:30", end: "2025-10-24T13:30:00+05:30", available: true },
          { slotId: "gas_001_s6", start: "2025-10-25T14:00:00+05:30", end: "2025-10-25T14:30:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gas_001_01",
            patientName: "Ketan Shah",
            patientAge: 45,
            reason: "Abdominal pain and altered bowel habits",
            requestedSlotId: "gas_001_s3",
            requestedSlot: "2025-10-22T11:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T09:25:00+05:30"
          }
        ]
      },
      {
        id: "gas_002",
        name: "Dr. Leela Menon",
        age: 43,
        education: ["MBBS", "DM (Gastroenterology)"],
        experienceYears: 18,
        about: "IBD and ERCP specialist.",
        appointmentFee: 2000,
        currency: "INR",
        image: "/docPhotos/image (16).png",
        bookingSlots: [
          { slotId: "gas_002_s1", start: "2025-10-20T10:00:00+05:30", end: "2025-10-20T10:30:00+05:30", available: true },
          { slotId: "gas_002_s2", start: "2025-10-21T10:45:00+05:30", end: "2025-10-21T11:15:00+05:30", available: true },
          { slotId: "gas_002_s3", start: "2025-10-22T12:00:00+05:30", end: "2025-10-22T12:30:00+05:30", available: true },
          { slotId: "gas_002_s4", start: "2025-10-23T13:00:00+05:30", end: "2025-10-23T13:30:00+05:30", available: true },
          { slotId: "gas_002_s5", start: "2025-10-24T14:00:00+05:30", end: "2025-10-24T14:30:00+05:30", available: true },
          { slotId: "gas_002_s6", start: "2025-10-25T15:00:00+05:30", end: "2025-10-25T15:30:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gas_003",
        name: "Dr. Sonia Verma",
        age: 36,
        education: ["MBBS", "DM (Gastroenterology)"],
        experienceYears: 12,
        about: "Chronic gastritis, H. pylori and IBS care.",
        appointmentFee: 1500,
        currency: "INR",
        image: "/docPhotos/image (1).png",
        bookingSlots: [
          { slotId: "gas_003_s1", start: "2025-10-20T11:30:00+05:30", end: "2025-10-20T12:00:00+05:30", available: true },
          { slotId: "gas_003_s2", start: "2025-10-21T11:45:00+05:30", end: "2025-10-21T12:15:00+05:30", available: true },
          { slotId: "gas_003_s3", start: "2025-10-22T13:30:00+05:30", end: "2025-10-22T14:00:00+05:30", available: true },
          { slotId: "gas_003_s4", start: "2025-10-23T14:30:00+05:30", end: "2025-10-23T15:00:00+05:30", available: true },
          { slotId: "gas_003_s5", start: "2025-10-24T15:30:00+05:30", end: "2025-10-24T16:00:00+05:30", available: true },
          { slotId: "gas_003_s6", start: "2025-10-25T16:30:00+05:30", end: "2025-10-25T17:00:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gas_003_01",
            patientName: "Pankaj Sharma",
            patientAge: 38,
            reason: "Recurrent heartburn",
            requestedSlotId: "gas_003_s1",
            requestedSlot: "2025-10-20T11:30:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T08:40:00+05:30"
          }
        ]
      },
      {
        id: "gas_004",
        name: "Dr. Harsha Bhat",
        age: 45,
        education: ["MBBS", "MD", "DM (Gastroenterology)"],
        experienceYears: 20,
        about: "Pancreatobiliary disorders and therapeutic endoscopy.",
        appointmentFee: 2200,
        currency: "INR",
        image: "/docPhotos/image (2).png",
        bookingSlots: [
          { slotId: "gas_004_s1", start: "2025-10-20T13:00:00+05:30", end: "2025-10-20T13:30:00+05:30", available: true },
          { slotId: "gas_004_s2", start: "2025-10-21T13:45:00+05:30", end: "2025-10-21T14:15:00+05:30", available: true },
          { slotId: "gas_004_s3", start: "2025-10-22T14:30:00+05:30", end: "2025-10-22T15:00:00+05:30", available: true },
          { slotId: "gas_004_s4", start: "2025-10-23T15:15:00+05:30", end: "2025-10-23T15:45:00+05:30", available: true },
          { slotId: "gas_004_s5", start: "2025-10-24T16:30:00+05:30", end: "2025-10-24T17:00:00+05:30", available: true },
          { slotId: "gas_004_s6", start: "2025-10-25T17:15:00+05:30", end: "2025-10-25T17:45:00+05:30", available: true }
        ],
        appointmentRequests: []
      },
      {
        id: "gas_005",
        name: "Dr. Rekha Sharma",
        age: 39,
        education: ["MBBS", "DM (Gastroenterology)"],
        experienceYears: 14,
        about: "Functional GI disorders and nutrition-related GI issues.",
        appointmentFee: 1600,
        currency: "INR",
        image: "/docPhotos/image (3).png",
        bookingSlots: [
          { slotId: "gas_005_s1", start: "2025-10-20T15:00:00+05:30", end: "2025-10-20T15:30:00+05:30", available: true },
          { slotId: "gas_005_s2", start: "2025-10-21T15:45:00+05:30", end: "2025-10-21T16:15:00+05:30", available: true },
          { slotId: "gas_005_s3", start: "2025-10-22T16:30:00+05:30", end: "2025-10-22T17:00:00+05:30", available: true },
          { slotId: "gas_005_s4", start: "2025-10-23T17:15:00+05:30", end: "2025-10-23T17:45:00+05:30", available: true },
          { slotId: "gas_005_s5", start: "2025-10-24T18:00:00+05:30", end: "2025-10-24T18:30:00+05:30", available: true },
          { slotId: "gas_005_s6", start: "2025-10-25T18:45:00+05:30", end: "2025-10-25T19:15:00+05:30", available: true }
        ],
        appointmentRequests: [
          {
            requestId: "req_gas_005_01",
            patientName: "Anil Verma",
            patientAge: 52,
            reason: "Chronic constipation",
            requestedSlotId: "gas_005_s1",
            requestedSlot: "2025-10-20T15:00:00+05:30",
            status: "pending",
            requestedAt: "2025-10-18T08:55:00+05:30"
          }
        ]
      },
      {
        id: "gas_006",
        name: "Dr. Pallavi Joshi",
        age: 33,
        education: ["MBBS", "DM (Gastroenterology)"],
        experienceYears: 8,
        about: "IBS and dietary counselling for GI patients.",
        appointmentFee: 1400,
        currency: "INR",
        image: "/docPhotos/image (4).png",
        bookingSlots: [
          { slotId: "gas_006_s1", start: "2025-10-20T08:00:00+05:30", end: "2025-10-20T08:30:00+05:30", available: true },
          { slotId: "gas_006_s2", start: "2025-10-21T08:45:00+05:30", end: "2025-10-21T09:15:00+05:30", available: true },
          { slotId: "gas_006_s3", start: "2025-10-22T09:30:00+05:30", end: "2025-10-22T10:00:00+05:30", available: true },
          { slotId: "gas_006_s4", start: "2025-10-23T10:15:00+05:30", end: "2025-10-23T10:45:00+05:30", available: true },
          { slotId: "gas_006_s5", start: "2025-10-24T10:45:00+05:30", end: "2025-10-24T11:15:00+05:30", available: true },
          { slotId: "gas_006_s6", start: "2025-10-25T11:30:00+05:30", end: "2025-10-25T12:00:00+05:30", available: true }
        ],
        appointmentRequests: []
      }
    ]
  }
];

// export default doctorsBySpecialty;
