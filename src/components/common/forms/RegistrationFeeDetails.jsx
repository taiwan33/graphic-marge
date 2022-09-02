import React from "react";

const RegistrationFeeDetails = () => {
  return (
    <div className="modal-body relative">
      <div className="border-primary-red m-5 rounded-md border">
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          १००००० लाख सम्म अधिकृत पुँजी भएमा
          <span className="text-primary-red">रु.१४,५००।–</span>
        </p>
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          १००००१ देखि ५ लाख सम्म अधिकृत पुँजी भएमा
          <span className="text-primary-red">रु.१८,०००।–</span>
        </p>
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          ५००००१ देखि २५ लाख सम्म अधिकृत पुँजी भएमा
          <span className="text-primary-red">रु.२३,५००।–</span>
        </p>
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          २५००००१ देखि १ करोड सम्म अधिकृत पुँजी भएमा
          <span className="text-primary-red"> रु.२९,५००।–</span>
        </p>
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          १००००००१ देखि २ करोड सम्म अधिकृत पुँजी भएमा
          <span className="text-primary-red">रु.३२,५००।–</span>
        </p>
        <p className="text-primary-blue border-primary-blue border-b-2 p-3 font-bold md:!text-xl">
          २ करोड भन्दा मथी अधिकृत पुँजी भएमा प्रति १ करोड
          <span className="text-primary-red">रु.३,०००।– </span>को दरले बृद्धि
          हुदै जानेछ ।
        </p>
        <p className="text-primary-blue p-3 font-bold">
          <span className="text-primary-red"> नोट:</span> माथी उल्लेखित रकम ७
          जना सम्म शेयर सदस्यहरु भएमा मात्र लागु हुनेछ, यदि ७ जना भन्दा बढि भएमा
          प्रती सदस्य
          <span className="text-primary-red">रु.५००।–</span> को दरले थप शुल्क
          बृद्धि हुदै जानेछ ।
        </p>
      </div>
    </div>
  );
};

export default RegistrationFeeDetails;
