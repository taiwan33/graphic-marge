export const upload_document = [
  {
    ip1: "हामी संग कर चुक्ता सम्बन्धि काम नगरेको भए कर चुक्ता प्रमाण पत्र",
    sn: 1,
    type: "file",
    name: "tax_clearance_certificate",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },

  {
    ip1: "अन्य.........",
    sn: 2,
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
export const gharelu_renew = [
  {
    ip1: "व्यवसायको नाम ",
    type: "text",
    name: "business_name",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "पान नं. ",
    type: "number",
    name: "pan_number",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सम्बन्धित व्यक्तीको ठेगाना",
    type: "text",
    name: "person_address",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },

  {
    ip1: "व्यवसायको ठेगाना",
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
    ip1: "सम्‍बन्धीत व्यक्तीको नाम",
    type: "text",
    name: "person_name",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "सम्‍बन्धीत व्यक्तीको सम्पर्क नं",
    type: "text",
    name: "address",
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
    ip1: "घरेलुमा दर्ता गरेको दर्ता प्रमाण पत्र",
    sn: 1,
    type: "file",
    name: "company_letter",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "दर्ता प्रमाण पत्रको पछाडी नविकरण गरेको फोटो",
    sn: 2,
    type: "file",
    name: "renew_photo",
    validation: {
      required: {
        value: true,
        message: "This Field is mandatory",
      },
    },
  },

  {
    ip1: "पान दर्ता प्रमाण पत्र",
    sn: 3,
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
    ip1: "गत आ.व.को कर चुक्ता प्रमाण पत्र",
    sn: 4,
    type: "file",
    name: "tax_clearance_report",
    validation: {
      required: {
        value: false,
        message: "This Field is mandatory",
      },
    },
  },
  {
    ip1: "अन्य",
    sn: 5,
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
