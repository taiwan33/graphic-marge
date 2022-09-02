export const galeru_registration_v2 = [
  {
    ip1: "सम्बन्धित ब्यक्तीको नाम",
    type: "text",
    name: "related_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "सम्बन्धित ब्यक्तीको सम्पर्क नं.",
    type: "number",
    name: "related_person_num",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "जम्मा साझेदारहरुको संख्या",
    type: "number",
    name: "total_shareholder",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "लगानी गर्ने जम्मा पुँजी रकम",
    type: "number",
    name: "paid_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
