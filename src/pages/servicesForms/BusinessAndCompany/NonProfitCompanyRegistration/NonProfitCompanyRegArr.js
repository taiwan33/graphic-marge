// export const publi_lmt_registration = [
export const non_public_lmt_registration = [
  {
    ip1: "कम्पनी रहने ठेगाना",
    type: "text",
    name: "company_address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "सम्बन्धित ब्यक्तीको नाम",
    type: "text",
    name: "contact_person",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  // {
  //   ip1: " कम्पनीको प्रकार",
  // },
  {
    ip1: "सम्बन्धित ब्यक्तीको सम्पर्क नं.",
    type: "number",
    name: "conatact_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  // confusion
  {
    ip1: "जम्मा सदस्य संख्या",
    type: "number",
    name: "phone_num",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  // confusion
  {
    ip1: " सदस्यहरुसंग",
    type: "number",
    name: "total_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
