export const upload_document = [
  {
    ip1: "पुँजी बृद्धि भएको शेयर खरिद गर्ने शेयर सदस्यहरुले कम्पनीको बैंक खातामा शेयर खरिद रकम डिपोजिट गरेको बैंक भौचर",
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
    ip1: "पुँजी बृद्धि भएको शेयर खरिद गर्ने शेयर सदस्यहरुले कम्पनीको बैंक खातामा शेयर खरिद रकम डिपोजिट गरेको बैंक स्टेटमेन्ट",
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
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
];
export const company_name_change = [
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
    ip1: "अव बृद्धि हुने अधिकृत पुँजीः",
    type: "number",
    name: "authorize_capital",
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
  {
    ip1: "अव बृद्धि हुने जारी तथा चुक्ता पुँजीः",
    type: "number",
    name: "paid_capital",
    validation: {
      sn: 1,
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
    ip1: "पुँजी बृद्धि भएको शेयर खरिद गर्ने शेयर सदस्यहरुले कम्पनीको बैंक खातामा शेयर खरिद रकम डिपोजिट गरेको बैंक भौचर",
    sn: 5,
    type: "file",
    name: "bank_voucher",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "पुँजी बृद्धि भएको शेयर खरिद गर्ने शेयर सदस्यहरुले कम्पनीको बैंक खातामा शेयर खरिद रकम डिपोजिट गरेको बैंक स्टेटमेन्ट",
    sn: 6,
    type: "file",
    name: "bank_statement",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "अन्य",
    sn: 6,
    type: "file",
    name: "others",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
];
