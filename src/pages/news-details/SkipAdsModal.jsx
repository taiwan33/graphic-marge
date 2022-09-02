import Images from "../../media/images";

const SkipAdsModal = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {isOpen && (
        <>
          <div className="">
            <div className="max-w mt-10 grid w-full place-content-center">
              <div className="mt-3 flex items-end justify-between">
                <p className="text-sm text-primary-blue font-Acme">
                  ADVERTISEMENT
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary-red font-Berkshire rounded-2xl py-2 px-4 text-white"
                >
                  Skip This
                </button>
              </div>
              {/* ad image */}
              <div className="mt-5">
                <img
                  src={Images.skip_ads}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SkipAdsModal;
