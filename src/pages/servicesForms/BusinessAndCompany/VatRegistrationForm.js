export const Pan_Registration = [
  {
    ip1: "ब्यवसायको नाम",
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
    ip1: "ब्यवसायको प्रकार",
    type: "text",
    name: "business_type",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];

export const Pan_Registration_v2 = [
  {
    ip1: "ब्यवसायीधनिको नाम",
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
    ip1: "ब्यवसायीधनिको ठेगाना",
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
    ip1: "अनुमानित कारोबार रकम",
    type: "number",
    name: "expected_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const Vat_details_of_shareholder = [
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
    ip1: "सझेदार सदस्यहरुको नाम",
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
    ip1: "लगानी गर्ने शेयर रकम",
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
    ip1: " शेयर सदस्यको नागरिकता",
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
    ip1: "पासपोर्ट साईजको फोटो",
    type: "number",
    name: "address",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const Vat_upload_details = [
  {
    ip1: "ब्यवसायीधनिको नागरिकता",
    sn: 1,
  },
  {
    ip1: "पासपोर्ट साईजको फोटो",
    sn: 2,
  },
  {
    ip1: "ब्यवसाय दर्ताको प्रमाण पत्र",
    sn: 3,
  },
  {
    ip1: "पान दर्ताको लागी आ.रा.का. लाई ब्यवसाय दर्ता गर्ने निकायले लेखेको सिफारीस पत्र",
    sn: 4,
    remark:
      "कम्पनी वा व्यवसाय दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन",
  },
  {
    ip1: "घरबेटीको नागरिकता (यदि सटर तथा कोठाभाडामा लिएर ब्यवसाय गर्ने भएमा)",
    sn: 5,
  },
  {
    ip1: "ब्यवसाय रहने जग्गाको लालपुर्जा",
    sn: 6,
  },
  {
    ip1: "घरभाडा सम्झौता पत्र वा मञ्जुरीनामा पत्र",
    sn: 7,
  },

  {
    ip1: "अन्य......................",
    sn: 8,
  },
];
export const Pan_Registration_v3 = [
  {
    ip1: "सम्बन्धित ब्यक्तीको नाम",
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
    name: "total_shareolder",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "अनुमानित कारोबार रकम",
    type: "number",
    name: "expected_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "१ जना साझेदारको Personal Pan No.",
    type: "number",
    name: "expected_capital",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const Pan_Registration_v4 = [
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
    ip1: "दर्ता गर्ने प्रकृती (कुन कुनमा दर्ता गर्ने हो छनोट गर्नुहोस्)",
    type: "number",
    name: "total_shareolder",
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
    name: "person_name",
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
    name: "phone_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "अनुमानित बा. कारोबार रकम",
    type: "number",
    name: "expected_money",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const TradeMark_details_of_shareholder = [
  {
    ip1: "क्र. स.",
    type: "text",
    name: "serial_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
  {
    ip1: "साझेदार सदस्यहरुको नाम",
    type: "text",
    name: "name_of_shareholder",
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
    ip1: " शेयर सदस्यको नागरीकता",
    type: "number",
    name: "citizenship_number",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: " कैफियत",
    type: "text",
    name: "remarks",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },
];
export const Vat_upload_details_v2 = [
  {
    ip1: "कम्पनी दर्ताको प्रमाण पत्र",
    sn: 1,
  },
  {
    ip1: "नियमावली",
    sn: 2,
  },
  {
    ip1: "प्रबन्ध पत्र",
    sn: 3,
  },
  {
    ip1: "कम्पनी रजिष्टार का. ले पान नं. रिजर्भ गरेको पत्र",
    sn: 4,
    remark:
      "कम्पनी वा व्यवसाय दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन",
  },
  {
    ip1: "कम्पनी रजिष्टार का. ले आ.रा.का. लाई लेखेको पत्र",
    sn: 5,
  },
  {
    ip1: "अध्यक्ष वा सञ्चालकको Personal Pan No.",
    sn: 6,
  },
  {
    ip1: "अन्य........................ पासपोर्ट साईजको फोटो",
    sn: 7,
  },
];
