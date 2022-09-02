export const exim_registration = [
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

export const exim_registration_v2 = [
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
    ip1: "ब्यवसायीधनिको सम्पर्क नं.",
    type: "number",
    name: "phone_numb",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "कुल पुँजी रकम",
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
export const Exim_details_of_shareholder = [
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
    ip1: "शेयर सदस्यहरु वा साझेदार सदस्यहरुको नाम",
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
export const Exim_upload_details = [
  {
    ip1: "ब्यवसाय दर्ता वा कम्पनी दर्ताको प्रमाण पत्र",
    sn: 1,
    remark:
      "कम्पनी वा व्यवसाय दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन",
  },
  {
    ip1: "पान / भ्याट दर्ताको प्रमाण पत्र",
    sn: 2,
    remark: "",
  },
  {
    ip1: "बाणिज्य दर्ता वा घरेलु दर्ताको प्रमाण पत्र",
    sn: 3,
    remark:
      "बाणिज्य वा घरेलु दर्ता सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन । (प्रा.लि. कम्पनीमा Click गरेमा मात्र यो अफसन खुल्नेछ।)",
  },
  {
    ip1: "बैंक ग्यारेन्टि कागज (अनुसुची २ सहित)",
    sn: 4,
    remark: "अनिवार्य छ ।",
  },
  {
    ip1: "बाणिज्य वा घरेलुमार्फत गरेको सिफारिस पत्र",
    sn: 5,
    remark: "अनिवार्य छ ।",
  },
  {
    ip1: "प्रबन्ध पत्र",
    sn: 6,
    remark:
      "माथी उल्लेखित ब्यवसायको प्रकारमा प्रा.लि. कम्पनीमा click गरेमा मात्र यो २ वटा अफसन खुल्नेछन । नियमावली ख्ष्भध म्भभितभ",
  },
  {
    ip1: "नियमावली",
    sn: 7,
    remark: "",
  },
  {
    ip1: "गत आ.व. को कर चुक्ता प्रमाण पत्र",
    sn: 8,
    remark:
      "कर चुक्ता सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "गत आ.व. को कम्पनी अध्यावधिक गरेको पत्र",
    sn: 9,
    remark:
      "कम्पनी अध्यावधिकको काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु पर्दैन ।",
  },
  {
    ip1: "ब्यवसाय धनिको नागरिकता",
    sn: 10,
    remark:
      "माथी उल्लेखित ब्यवसायको प्रकारमा ब्यक्तिगत ब्यवसायमा click गरेमा मात्र यो २ वटा अफसन खुल्नेछन ।",
  },
  {
    ip1: "ब्यवसाय धनिको पासपोट साईजको फोटो",
    sn: 11,
    remark: "",
  },
  {
    ip1: "अन्य......................",
    sn: 12,
    remark: "",
  },
];

export const exim_registration_v3 = [
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
    ip1: "जम्मा साझेदार वा शेयर सदस्यहरुको संख्या",
    type: "number",
    name: "phone_numb",
    validation: {
      required: {
        value: true,
        message: "this field is mandatory",
      },
    },
  },

  {
    ip1: "कम्पनी वा ब्यवसायको पुँजी रकम",
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
