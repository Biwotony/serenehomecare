export const contact = {
  phoneDisplay: "0703 862 025",
  phoneHref: "+254703862025",
  whatsapp: "https://wa.me/254703862025",
  website: "SereneHomeCareServices.co.ke",
  location: "Eldoret, Kenya",
  responseTime: "within one business day",
};

export type IconName =
  | "heart"
  | "home"
  | "shield"
  | "phone"
  | "message"
  | "calendar"
  | "users"
  | "activity"
  | "medical"
  | "mother"
  | "clock"
  | "clipboard"
  | "check"
  | "arrow"
  | "briefcase"
  | "document"
  | "accessibility";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: IconName;
  forWhom: string[];
  tasks: string[];
  professional: string;
  availability: string;
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "elderly-dementia-care",
    title: "Elderly & dementia care",
    shortTitle: "Elderly care",
    summary:
      "Respectful day-to-day support that helps older adults remain safe, comfortable and connected at home.",
    icon: "heart",
    forWhom: [
      "Older adults who need help with daily routines",
      "People living with dementia or Alzheimer’s disease",
      "Families who need consistent updates and practical support",
    ],
    tasks: [
      "Personal care and daily-routine assistance",
      "Meal, hydration and mobility support",
      "Companionship and meaningful activity",
      "Medication reminders within the agreed care plan",
      "Observation and family communication",
    ],
    professional:
      "A trained caregiver can support daily living, companionship and routine reminders. A registered nurse is assigned when clinical assessment, medication administration or another nursing task is required.",
    availability:
      "Planned visits and longer support blocks are arranged after assessment, subject to staff availability in Eldoret.",
    faqs: [
      {
        question: "Will the same caregiver visit regularly?",
        answer:
          "Continuity is prioritised. The proposed schedule and back-up arrangements are explained before care begins.",
      },
      {
        question: "Do you support people with memory loss?",
        answer:
          "Yes. The assessment covers routines, communication, safety and the level of supervision needed so the plan can be matched appropriately.",
      },
    ],
  },
  {
    slug: "post-hospital-recovery",
    title: "Post-hospital & recovery care",
    shortTitle: "Recovery care",
    summary:
      "Practical support after discharge, coordinated around the hospital plan and the person’s recovery goals.",
    icon: "home",
    forWhom: [
      "People returning home after an operation or hospital stay",
      "Adults whose mobility or confidence has temporarily reduced",
      "Families coordinating follow-up appointments and daily support",
    ],
    tasks: [
      "Settling-in and daily-routine support",
      "Mobility and fall-risk precautions",
      "Meal, hydration and comfort support",
      "Appointment and transport coordination",
      "Escalation of concerns to the appropriate clinician or family contact",
    ],
    professional:
      "A caregiver supports daily living and safe routines. A nurse is required for clinical observations, wound care, injections or other tasks specified by a qualified prescriber.",
    availability:
      "Planning can begin before discharge. Start dates depend on assessment, discharge instructions and the appropriate professional being available.",
    faqs: [
      {
        question: "Can Serene speak with the hospital team?",
        answer:
          "With the client’s consent, relevant discharge information can be reviewed so the home-care plan reflects the clinician’s instructions.",
      },
      {
        question: "How early should we enquire?",
        answer:
          "As early as possible before discharge. This leaves time to understand the plan, home setup and staffing needs.",
      },
    ],
  },
  {
    slug: "skilled-nursing-wound-care",
    title: "Skilled nursing & wound care",
    shortTitle: "Nursing care",
    summary:
      "Home nursing for needs that require clinical judgement, delivered within the professional’s verified scope of practice.",
    icon: "medical",
    forWhom: [
      "People with a clinician-approved wound-care plan",
      "Clients who need prescribed clinical observations or nursing procedures",
      "Families who need nursing support coordinated with a treating clinician",
    ],
    tasks: [
      "Clinical assessment within the agreed scope",
      "Wound dressing according to written instructions",
      "Monitoring and documentation",
      "Education for the client and family",
      "Referral or escalation when findings require medical review",
    ],
    professional:
      "Clinical tasks are performed by an appropriately qualified nurse. Caregivers do not diagnose, alter prescriptions or perform tasks outside their training and agreed role.",
    availability:
      "Nursing visits are scheduled after review of the need, any clinical instructions and professional availability in Eldoret.",
    faqs: [
      {
        question: "Do I need a doctor’s instruction?",
        answer:
          "Some procedures require a current clinical order or discharge plan. Serene will explain what documentation is needed after the initial enquiry.",
      },
      {
        question: "Is this an emergency service?",
        answer:
          "No. If someone is seriously unwell or in immediate danger, contact local emergency services or go to the nearest emergency department.",
      },
    ],
  },
  {
    slug: "respite-family-support",
    title: "Respite & family caregiver support",
    shortTitle: "Respite care",
    summary:
      "Planned relief for family caregivers, with a clear handover and support matched to the person’s routine.",
    icon: "users",
    forWhom: [
      "Family caregivers who need time to rest, work or attend appointments",
      "Households that need temporary or occasional support",
      "Families preparing a longer-term care arrangement",
    ],
    tasks: [
      "Supervision, companionship and routine support",
      "Personal care where agreed",
      "Meal, hydration and mobility assistance",
      "Clear handover notes for the family",
      "Observation and escalation against the agreed plan",
    ],
    professional:
      "Most non-clinical respite support is provided by a trained caregiver. If the person needs nursing procedures, a nurse is assessed and scheduled separately.",
    availability:
      "One-off and recurring support may be available. Advance booking gives the best chance of matching the right person and schedule.",
    faqs: [
      {
        question: "Can respite be arranged for a few hours?",
        answer:
          "Visit length depends on the assessed needs, location and staffing. Serene confirms the available options before booking.",
      },
      {
        question: "How do you learn the family routine?",
        answer:
          "The assessment records routines, preferences, risks, contacts and the handover process so support is consistent.",
      },
    ],
  },
  {
    slug: "physiotherapy-rehabilitation",
    title: "Physiotherapy & rehabilitation support",
    shortTitle: "Rehabilitation",
    summary:
      "Home-based support for safe movement, prescribed exercises and progress toward everyday recovery goals.",
    icon: "activity",
    forWhom: [
      "People rebuilding strength or mobility after illness or injury",
      "Older adults working on balance and safer movement",
      "Clients following a therapist-led rehabilitation plan",
    ],
    tasks: [
      "Home and mobility review",
      "Support with clinician-prescribed exercises",
      "Safe transfer and movement guidance",
      "Progress observations and communication",
      "Coordination with the treating therapist where consent is provided",
    ],
    professional:
      "Assessment and treatment belong to an appropriately qualified rehabilitation professional. A caregiver may support repetition of an agreed routine but does not create or change a therapy plan.",
    availability:
      "The right professional and visit frequency are proposed after assessment and review of any existing rehabilitation plan.",
    faqs: [
      {
        question: "Can exercises happen at home?",
        answer:
          "Yes, when a qualified professional considers the home setting and exercises appropriate for the client.",
      },
      {
        question: "Do you provide mobility equipment?",
        answer:
          "Equipment is not assumed to be included. The assessment can identify questions to discuss with the appropriate clinician or supplier.",
      },
    ],
  },
  {
    slug: "antenatal-postnatal-care",
    title: "Antenatal & postnatal support",
    shortTitle: "Maternal care",
    summary:
      "Practical, respectful home support for mothers and families before and after birth, alongside—not instead of—clinical maternity care.",
    icon: "mother",
    forWhom: [
      "Families preparing for a baby at home",
      "Mothers who need practical support after birth",
      "Households coordinating rest, routines and follow-up appointments",
    ],
    tasks: [
      "Daily-routine and comfort support",
      "Meal, hydration and household coordination",
      "Mother-and-baby wellbeing observations within role",
      "Appointment reminders and family education",
      "Escalation when clinical review may be needed",
    ],
    professional:
      "A caregiver provides non-clinical practical help. Maternity assessment, diagnosis and clinical treatment require an appropriately qualified healthcare professional.",
    availability:
      "Support is planned around the expected timing, family needs and availability. It does not replace antenatal appointments or emergency maternity care.",
    faqs: [
      {
        question: "Does this replace my maternity clinic?",
        answer:
          "No. Home support complements the care provided by your maternity team and follows their clinical advice.",
      },
      {
        question: "Can a family member join the assessment?",
        answer:
          "Yes, with the client’s permission. The plan should reflect the mother’s choices, privacy and preferred support network.",
      },
    ],
  },
];

export const commonFaqs = [
  {
    question: "How much does home care cost?",
    answer:
      "Cost depends on the type of professional required, visit length, frequency, timing and location. After a short assessment, Serene provides a written plan and quotation before you decide. There is no payment request in the initial enquiry form.",
  },
  {
    question: "How quickly can care start?",
    answer:
      "Serene acknowledges enquiries within one business day. A start date is confirmed only after the needs assessment, safety checks and suitable staff availability.",
  },
  {
    question: "What is the difference between a caregiver and a nurse?",
    answer:
      "Caregivers support daily living, comfort, companionship and agreed routines. Nurses perform assessed clinical work within their verified qualifications and scope. Serene explains the recommended role in the written care plan.",
  },
  {
    question: "How are care professionals selected?",
    answer:
      "Selection considers identity, role-appropriate qualifications and registration, references or work history, safeguarding expectations, conduct and fit with the care plan. Evidence is checked before a person is assigned to regulated or clinical work.",
  },
  {
    question: "Can we meet the assigned professional first?",
    answer:
      "Yes. Before ongoing care begins, Serene can introduce the proposed professional and explain their role, verified credentials and the back-up arrangement.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Serene currently presents its service area as Eldoret, Kenya. Provide the exact neighbourhood during your enquiry so availability can be confirmed.",
  },
  {
    question: "Can you support a hospital discharge?",
    answer:
      "Yes. With consent, Serene reviews relevant discharge instructions, home setup, mobility, medicines support boundaries, follow-up appointments and warning signs before proposing care.",
  },
  {
    question: "Is Serene an emergency service?",
    answer:
      "No. Do not wait for a website response if someone is seriously unwell, has sudden severe symptoms or is in immediate danger. Contact local emergency services or go to the nearest emergency department.",
  },
];

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "How care works", href: "/how-care-works" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
];
