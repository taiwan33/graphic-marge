export const banijiya_registration = [
  {
    ip1: "ब्यवसाय रहने ठेगाना",
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
    ip1: "ब्यवसायधनिको नाम",
    type: "text",
    name: "related_person",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "ब्यवसायधनिको ठेगाना",
    type: "number",
    name: "address",
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
    name: "employee_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: " सम्बन्धित ब्यक्तीको सम्पर्क नं.",
    type: "number",
    name: "phone_num",
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
    name: "total_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "empty",
  },
];

// export const publi_lmt_registration = [
export const banijiya_registration_v2 = [
  {
    ip1: "सम्बन्धित ब्यक्तीको नाम",
    type: "text",
    name: "name",
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
    name: "phone_num",
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
    name: "num_of_people",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "लगानी गर्ने जम्मा पुँजी रकम",
    type: "text",
    name: "employee_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];

export const pvt_details_of_shareholder = [
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
    ip1: " साझेदार सदस्यहरुको नाम",
    type: "text",
    name: "name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "  हालको ठेगाना",
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
    ip1: " लगानी गर्ने शेयरको प्रतिशत",
    type: "number",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: " लगानी गर्ने शेयर रकम",
    type: "number",
    name: "shre_rupees",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " शेयर सदस्यको नागरिकता",
    type: " ",
    name: " ",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " पासपोर्ट साईजको फोटो ",
    type: " ",
    name: " ",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const banijiya_registration_upload_document = [
  {
    ip1: "ब्यवसायीधनिको नागरिकता (सिंगल भएमा मात्र यहाँ)",
    sn: 1,
  },
  {
    ip1: "ब्यवसायीधनिको पासपोर्ट साईजको फोटो (सिंगल भएमा मात्र यहाँ)",
    sn: 2,
  },
  {
    ip1: "घरबेटीको नागरिकता (यदि सटर तथा कोठाभाडामा लिएर ब्यवसाय गर्ने भएमा)",
    sn: 3,
  },
  {
    ip1: "ब्यवसाय रहने जग्गाको लालपुर्जा",
    sn: 4,
  },
  {
    ip1: "घरभाडा सम्झौता पत्र वा मञ्जुरीनामा पत्र",
    sn: 5,
  },
  {
    ip1: "ब्यवसाय साझेदारी भएमा साझेदारी कबुलियतनामा",
    sn: 6,
  },
  {
    ip1: "ब्यवसाय धनिको स्वघोषणा पत्र",
    sn: 7,
  },
  {
    ip1: "पुजी रकम बैंकमा डिपोजिट गरेको बैंक भौचर र स्टेटमेन्ट",
    sn: 8,
  },
  {
    ip1: "अन्य........................",
    sn: 9,
  },
];

export const banijiya_registration_business_details = [
  {
    ip1: "कम्पनीको नाम",
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
    ip1: "कम्पनीको ठेगाना",
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
    name: "related_name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "सम्बन्धित ब्यक्तीको ठेगाना",
    type: "text",
    name: "related_address",
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
    name: "phone_num",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "चुक्ता पुँजी",
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
export const pvt_details_of_shareholder_v2 = [
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
    ip1: " शेयर सदस्यहरुको नाम",
    type: "text",
    name: "name",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "  हालको ठेगाना",
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
    ip1: " कम्पनीमा भएको शेयरको प्रतिशत",
    type: "number",
    name: "percent",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: " शेयर लगतमा भएको शेयर रकम",
    type: "number",
    name: " ",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "शेयर सदस्यको नागरिकता दुबै साईडतिरको",
    type: "file",
    name: " ",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: " पासपोर्ट साईजको फोटो ",
    type: "file",
    name: " ",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const banijiya_registration_upload_document_v3 = [
  {
    ip1: "कम्पनी दर्ताको प्रमाण पत्र",
    sn: 1,
    remark: "",
  },
  {
    ip1: "पान/भ्याट दर्ताको प्रमाण पत्र",
    sn: 2,
    remark:
      "कम्पनी दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "प्रबन्ध पत्र",
    sn: 3,
    remark: "",
  },
  {
    ip1: "नियमावली",
    sn: 4,
    remark: "",
  },
  {
    ip1: "शेयरलगत दर्ता किताब",
    sn: 5,
    remark:
      "शेयर लगत निकाल्ने सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "गत आ.व. को कर चुक्ता प्रमाण पत्र",
    sn: 6,
    remark:
      "कर चुक्ता सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "गत आ.व. को कम्पनी अध्यावधिक गरेको पत्र",
    sn: 7,
    remark:
      "कम्पनी अध्यावधिकको काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "अन्य........................",
    sn: 8,
    remark: "",
  },
];
