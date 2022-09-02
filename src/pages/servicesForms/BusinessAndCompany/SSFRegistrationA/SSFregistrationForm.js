export const SSF_registration = [
  {
    ip1: "कम्पनी/ब्यवसायको नाम",
    type: "text",
    name: "related_person_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "कम्पनीको ठेगाना",
    type: "text",
    name: "related_person_address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "कम्पनी÷ब्यवसायको उद्धेश्यहरु",
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
    ip1: "ब्यवसायको प्रकार",
    type: "text",
    name: "related_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const SSF_registration_v2 = [
  {
    ip1: "पद",
    type: "text",
    name: "position",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "अध्यक्षको नाम",
    type: "text",
    name: "president_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "कार्यकारी प्रमुखको नाम",
    type: "text",
    name: "office_head_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const SSF_upload_details_v2 = [
  {
    ip1: "व्यवसाय दर्ता वा कम्पनी दर्ताको प्रमाण पत्र",
    sn: 1,
    remark:
      " कम्पनी वा व्यवसाय दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "पान / भ्याट दर्ताको प्रमाण पत्र",
    sn: 2,
    remark: " ",
  },

  {
    ip1: "नियमावली",
    sn: 3,
    remark: " ",
  },
  {
    ip1: "गत आ.व. को कर चुक्ता प्रमाण पत्र",
    sn: 4,
    remark:
      " कर चुक्ता सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "गत आ.व. को कम्पनी अध्यावधिक गरेको पत्र",
    sn: 5,
    remark:
      "कम्पनी अध्यावधिकको काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन । ",
  },
  {
    ip1: "अन्य......................",
    sn: 6,
    remark: " ",
  },
];

export const SSF_registration_v3 = [
  {
    ip1: "Compny Name",
    type: "text",
    name: "company_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "Company Address",
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
    ip1: "SSF Username, Password & SSID",
    type: "text",
    name: "ssf_user_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "Entry गर्नुपर्ने जम्मा Employee हरुको संख्या",
    type: "number",
    name: "employee_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const SSF_details_of_employee = [
  {
    ip1: "क्र. स.",
    type: "text",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "कर्मचारीहरुको नाम",
    type: "text",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "  हालको ठेगाना(टोल सहित)",
    type: "string",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: " मो. नं.",
    type: "number",
    name: "phone_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " ईंंमेल",
    type: "email",
    name: "email_address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " पद",
    type: "number",
    name: "position",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " नियुक्ती मिति",
    type: "number",
    name: "date",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "खाता नं.",
    type: "number",
    name: "account_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " नागरिकता",
    type: "file",
    name: "citizenship",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " फोटो",
    type: "file",
    name: "photo",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
