export const upload_document = [
  {
    ip1: "शेयर बिक्री गर्ने शेयर सदस्यको ब्यक्तिगत खातामा शेयर खरिद गर्ने ब्यक्तिले शेयर रकम डिपोजिट गरेको बैंक भौचर",
    sn: 1,
    type: "file",
    name: "bank_voucher",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सबिक्री गर्ने शेयर सदस्यको ब्यक्तिगत खातामा शेयर रकम डिपोजिट भएको बैंक स्टेटमेन्ट",
    sn: 2,
    type: "file",
    name: "bank_statement",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "अन्य.........",
    sn: 3,
    type: "file",
    name: "others",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
];
export const company_share_purches = [
  {
    ip1: "कम्पनिको नाम ",
    type: "text",
    name: "company_name",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सम्बन्धित व्यक्तीको नाम",
    type: "text",
    name: "related_person_name",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सम्बन्धित व्यक्तीको सम्पर्क नं.",
    type: "number",
    name: "phone_number",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "कम्पनीको Username:",
    type: "text",
    name: "username",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "कम्पनीको ठेगाना",
    type: "text",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सम्‍बन्धीत व्यक्तीको ठेगाना",
    type: "text",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "शेयर सदस्यहरुको सङ्ख्या",
    type: "number",
    name: "shareholders",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "कम्पनीको Password",
    type: "password",
    name: "phone_number",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
];
export const upload_document_v2 = [
  {
    ip1: "कम्पनीको प्रबन्ध पत्र",
    sn: 1,
    type: "text",
    name: "company_letter",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "कम्पनीको नियमावली",
    sn: 2,
    type: "text",
    name: "company_name",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "कम्पनी दर्ता प्रमाण पत्र",
    sn: 3,
    type: "file",
    name: "certificate",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "पान दर्ता प्रमाण पत्र",
    sn: 4,
    type: "file",
    name: "certificate_of_pan",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "शेयर बिक्री गर्ने शेयर सदस्यको ब्यक्तिगत खातामा शेयर खरिद गर्ने ब्यक्तिले शेयर रकम डिपोजिट गरेको बैंक भौचर",
    sn: 5,
    type: "file",
    name: "bank_voucher",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "बिक्री गर्ने शेयर सदस्यको ब्यक्तिगत खातामा शेयर रकम डिपोजिट भएको बैंक स्टेटमेन्ट",
    sn: 6,
    type: "file",
    name: "bank_statement",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "अन्य......",
    sn: 7,
    type: "number",
    name: "others",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
];
