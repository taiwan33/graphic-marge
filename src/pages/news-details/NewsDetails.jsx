import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkipAdsModal from "./SkipAdsModal";
import { fetchNews } from "../../features/news/NewsSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewsDetails = () => {
  let [isOpen, setIsOpen] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // fetch news by id
  const singleNews = news.find((items) => items.id === Number(params.slug));

  // !singleNews && navigate("");

  return (
    <div>
      {isOpen ? (
        <SkipAdsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className="flex justify-center gap-16">
          <div className="max-w-[980px]">
            <h1
              className="font-popping text-primary-red top-[120px] z-10 bg-white text-center text-[22px] font-bold font-Poppins md:text-[50px] md:leading-[70px] lg:sticky lg:py-6 animation"
              id="title"
            >
              {singleNews?.title}
            </h1>
            <div className="w-padding">
              {/* banner ads */}
              <div className="mx-auto my-10 grid max-h-[120px] max-w-[1200px] place-content-center bg-gray-400 text-2xl font-bold text-white">
                <img
                  src="./images/large-ad.jpg"
                  alt=""
                  className="h-auto w-auto object-cover"
                />
              </div>
              {/*end of banner ads */}
            </div>
            <p className="border-lightBorder mt-8 w-full border-b" />
            <div className="mt-4 flex gap-10">
              {/* news wirter */}
              <div className="flex items-center gap-1">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="h-8 w-8 flex-shrink-0 rounded-full"
                  alt=""
                />
                <p className="text-sm font-semibold text-primary-blue">
                  News author
                </p>
              </div>
              {/* news author */}
              <div className="flex items-center gap-1">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="h-8 w-8 flex-shrink-0 rounded-full"
                  alt=""
                />
                <p className="text-sm font-semibold text-primary-blue">
                  News writer
                </p>
              </div>
              {/* news date */}
              <div className="flex items-center gap-1">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                  />
                  <path
                    fill="currentColor"
                    d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                  />
                </svg>
                <p className="text-sm font-semibold text-primary-blue">
                  २०७८ फागुन २२ गते ११:३७
                </p>
              </div>
            </div>
            <p className="border-lightBorder mt-8 w-full border-b" />
            {/* news heading image */}
            <div className="mt-5">
              <img
                src="./images/news-plane.jpg"
                alt=""
                className="animation mx-auto"
              />
            </div>
            <div className="flex gap-10">
              <div className="flex-1 font-Martel font-semibold">
                <p className="text-primary-blue  mt-10 text-justify text-[18px] leading-[40px] md:!text-[22px]">
                  रुसी राष्ट्रपति भ्लादमिर पुटिनले केही दिन अगाडि आफ्नो देशको
                  परमाणु सेनालाई उच्च सतर्कतामा रहन निर्देशन दिए । पुटिनको उक्त
                  आदेशसँगै गत फेब्रुअरी २८ मा अमेरिकाले यस्तो विमान उडायो जसले
                  परमाणु बमको आक्रमण पनि सहन सक्दछ । आणविक बम प्रतिरोधी डुम्सडे
                  जहाज भनिने उक्त विमानमा आणविक हतियार प्रहार भए पनि त्यसभित्र
                  रहेका मानिसहरू सुरक्षित हुन्छन् । डुम्सडे प्लेन वास्तवमा बोइङ
                  ७४७ विमानलाई मोडीफाइ गरेर बनाइएको हो । यसको प्राविधिक नाम बोइङ
                  इ फोर बी Boeing-E4B राखिएको छ । फेब्रुअरी २८ मा नेब्रास्काको
                  अमेरिकी वायुसेनाको आधार सिविरबाट उडान भरेर साढे ४ घण्टामा उक्त
                  विमान शिकागोमा अवतरण गरेको थियो । उक्त उडानका क्रममा डुम्सडे
                  विमानसँगै केही पूर्वचेतावनीयुक्त जेट विमानहरू पनि थिए जसले
                  कुनै पनि ब्यालिस्टिक मिसाइल हमलाको बारेमा जानकारी दिन सक्दछन्
                  । डुम्सडे प्लेन अर्थात् बोइंग इ ४ बी अमेरिकी सेनाद्वारा
                  व्यवस्थित नाइटवाच जहाज समूह (एयरक्राफ्ट फि्लट) को एक हिस्सा हो
                  । उक्त एयरक्राफ्ट फि्लटलाई अमेरिकी सेनाले सन् १९७० देखि
                  सञ्चालन गरिरहेको छ । जसमा अमेरिकी राष्ट्रपतिको विमान एयरफोर्स
                  वान पनि रहेको छ । बोइंग इ फोर बी निर्माण गर्नुको उद्धेश्य
                  परमाणु युद्धको समयमा उक्त विमानलाई कमान्ड केन्द्रमा बदल्नु हो
                  ।
                </p>
                <p className="text-primary-blue  mt-10 text-justify text-[18px] leading-[40px] md:!text-[22px]">
                  रुसी राष्ट्रपति भ्लादमिर पुटिनले केही दिन अगाडि आफ्नो देशको
                  परमाणु सेनालाई उच्च सतर्कतामा रहन निर्देशन दिए । पुटिनको उक्त
                  आदेशसँगै गत फेब्रुअरी २८ मा अमेरिकाले यस्तो विमान उडायो जसले
                  परमाणु बमको आक्रमण पनि सहन सक्दछ । आणविक बम प्रतिरोधी डुम्सडे
                  जहाज भनिने उक्त विमानमा आणविक हतियार प्रहार भए पनि त्यसभित्र
                  रहेका मानिसहरू सुरक्षित हुन्छन् । डुम्सडे प्लेन वास्तवमा बोइङ
                  ७४७ विमानलाई मोडीफाइ गरेर बनाइएको हो । यसको प्राविधिक नाम बोइङ
                  इ फोर बी Boeing-E4B राखिएको छ । फेब्रुअरी २८ मा नेब्रास्काको
                  अमेरिकी वायुसेनाको आधार सिविरबाट उडान भरेर साढे ४ घण्टामा उक्त
                  विमान शिकागोमा अवतरण गरेको थियो । उक्त उडानका क्रममा डुम्सडे
                  विमानसँगै केही पूर्वचेतावनीयुक्त जेट विमानहरू पनि थिए जसले
                  कुनै पनि ब्यालिस्टिक मिसाइल हमलाको बारेमा जानकारी दिन सक्दछन्
                  । डुम्सडे प्लेन अर्थात् बोइंग इ ४ बी अमेरिकी सेनाद्वारा
                  व्यवस्थित नाइटवाच जहाज समूह (एयरक्राफ्ट फि्लट) को एक हिस्सा हो
                  । उक्त एयरक्राफ्ट फि्लटलाई अमेरिकी सेनाले सन् १९७० देखि
                  सञ्चालन गरिरहेको छ । जसमा अमेरिकी राष्ट्रपतिको विमान एयरफोर्स
                  वान पनि रहेको छ । बोइंग इ फोर बी निर्माण गर्नुको उद्धेश्य
                  परमाणु युद्धको समयमा उक्त विमानलाई कमान्ड केन्द्रमा बदल्नु हो
                  ।
                </p>
                {/* ads*/}
                <div className="w-padding">
                  <div className="mx-auto my-10 grid max-h-[120px] max-w-[1200px] place-content-center bg-red-500 text-2xl font-bold text-white">
                    <img
                      src="./images/large-ad.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-primary-blue font-Martel  mt-10 text-justify text-[18px] leading-[40px] md:!text-[22px]">
                  रुसी राष्ट्रपति भ्लादमिर पुटिनले केही दिन अगाडि आफ्नो देशको
                  परमाणु सेनालाई उच्च सतर्कतामा रहन निर्देशन दिए । पुटिनको उक्त
                  आदेशसँगै गत फेब्रुअरी २८ मा अमेरिकाले यस्तो विमान उडायो जसले
                  परमाणु बमको आक्रमण पनि सहन सक्दछ । आणविक बम प्रतिरोधी डुम्सडे
                  जहाज भनिने उक्त विमानमा आणविक हतियार प्रहार भए पनि त्यसभित्र
                  रहेका मानिसहरू सुरक्षित हुन्छन् । डुम्सडे प्लेन वास्तवमा बोइङ
                  ७४७ विमानलाई मोडीफाइ गरेर बनाइएको हो । यसको प्राविधिक नाम बोइङ
                  इ फोर बी Boeing-E4B राखिएको छ । फेब्रुअरी २८ मा नेब्रास्काको
                  अमेरिकी वायुसेनाको आधार सिविरबाट उडान भरेर साढे ४ घण्टामा उक्त
                  विमान शिकागोमा अवतरण गरेको थियो । उक्त उडानका क्रममा डुम्सडे
                  विमानसँगै केही पूर्वचेतावनीयुक्त जेट विमानहरू पनि थिए जसले
                  कुनै पनि ब्यालिस्टिक मिसाइल हमलाको बारेमा जानकारी दिन सक्दछन्
                  । डुम्सडे प्लेन अर्थात् बोइंग इ ४ बी अमेरिकी सेनाद्वारा
                  व्यवस्थित नाइटवाच जहाज समूह (एयरक्राफ्ट फि्लट) को एक हिस्सा हो
                  । उक्त एयरक्राफ्ट फि्लटलाई अमेरिकी सेनाले सन् १९७० देखि
                  सञ्चालन गरिरहेको छ । जसमा अमेरिकी राष्ट्रपतिको विमान एयरफोर्स
                  वान पनि रहेको छ । बोइंग इ फोर बी निर्माण गर्नुको उद्धेश्य
                  परमाणु युद्धको समयमा उक्त विमानलाई कमान्ड केन्द्रमा बदल्नु हो
                  ।
                </p>
              </div>
            </div>
            <h1 className="font-popping mt-10 bg-[#F2F4F9] py-6 px-5 text-2xl font-semibold text-[#2260bf] md:!text-4xl">
              प्रतिक्रिया <span className="font-Bree">(comment)</span>
              <span className="text-primary-red text-sm">
                बोइंग इ फोर बी निर्माण गर्नुको उद्धेश्य बोइंग इ फोर बी निर्माण
                गर्नुको उद्धेश्य बोइंग इ
              </span>
            </h1>
            <div id="fb-root" className=" fb_reset">
              <div
                style={{
                  position: "absolute",
                  top: "-10000px",
                  width: 0,
                  height: 0,
                }}
              >
                <div />
              </div>
            </div>
            <div
              className="fb-comments z-0 fb_iframe_widget fb_iframe_widget_fluid_desktop"
              data-href="http://127.0.0.1:5500/public/news-details.html"
              data-width=""
              data-numposts={5}
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="app_id=&container_width=980&height=100&href=http%3A%2F%2F127.0.0.1%3A5500%2Fpublic%2Fnews-details.html&locale=en_US&numposts=5&sdk=joey&version=v14.0&width=550"
            >
              <span
                style={{ verticalAlign: "bottom", width: 550, height: 289 }}
              >
                <iframe
                  name="f2e5be5782c7588"
                  width="550px"
                  height="100px"
                  data-testid="fb:comments Facebook Social Plugin"
                  title="fb:comments Facebook Social Plugin"
                  frameBorder={0}
                  allowtransparency="true"
                  allowFullScreen={true}
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/v14.0/plugins/comments.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df15887236df617%26domain%3Dgraphic-marg.netlify.app%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgraphic-marg.netlify.app%252Ff7c5a4a8e636ac%26relation%3Dparent.parent&container_width=980&height=100&href=http%3A%2F%2F127.0.0.1%3A5500%2Fpublic%2Fnews-details.html&locale=en_US&numposts=5&sdk=joey&version=v14.0&width=550"
                  style={{
                    border: "none",
                    visibility: "visible",
                    width: 550,
                    height: 289,
                  }}
                  className=""
                />
              </span>
            </div>
            {/* releted news */}
            <div className="mt-20">
              <div className="flex flex-col gap-10 lg:!flex-row">
                {/* news */}
                <div className="flex-1">
                  <h1 className="font-popping mt-10 text-3xl font-bold text-[#2260bf] md:text-[45px]">
                    सम्बन्धित समाचार
                  </h1>
                  <div className="mt-10 grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
                    {/* news mini section */}
                    <div className="">
                      <a href="skip-ad.html">
                        <div className="flex items-center gap-6">
                          <img
                            src="./images/news-grid.jpg"
                            alt=""
                            className="news-item-img"
                          />
                          <div className="">
                            <p className="news-item-text">
                              निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै
                              सीमित !
                            </p>
                            <div className="mt-2 flex">
                              <span className="material-icons-outlined text-text-paragraph">
                                watch_later
                              </span>
                              <p className="text-text-paragraph">
                                ४० मिनेट अगाडि
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* news mini section */}
                    <div className="">
                      <a href="skip-ad.html">
                        <div className="flex items-center gap-6">
                          <img
                            src="./images/news-grid.jpg"
                            alt=""
                            className="news-item-img"
                          />
                          <div className="">
                            <p className="news-item-text">
                              निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै
                              सीमित !
                            </p>
                            <div className="mt-2 flex">
                              <span className="material-icons-outlined text-text-paragraph">
                                watch_later
                              </span>
                              <p className="text-text-paragraph">
                                ४० मिनेट अगाडि
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* news mini section */}
                    <div className="">
                      <a href="skip-ad.html">
                        <div className="flex items-center gap-6">
                          <img
                            src="./images/news-grid.jpg"
                            alt=""
                            className="news-item-img"
                          />
                          <div className="">
                            <p className="news-item-text">
                              निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै
                              सीमित !
                            </p>
                            <div className="mt-2 flex">
                              <span className="material-icons-outlined text-text-paragraph">
                                watch_later
                              </span>
                              <p className="text-text-paragraph">
                                ४० मिनेट अगाडि
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* news mini section */}
                    <div className="">
                      <a href="skip-ad.html">
                        <div className="flex items-center gap-6">
                          <img
                            src="./images/news-grid.jpg"
                            alt=""
                            className="news-item-img"
                          />
                          <div className="">
                            <p className="news-item-text">
                              निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै
                              सीमित !
                            </p>
                            <div className="mt-2 flex">
                              <span className="material-icons-outlined text-text-paragraph">
                                watch_later
                              </span>
                              <p className="text-text-paragraph">
                                ४० मिनेट अगाडि
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* news mini section */}
                    <div className="">
                      <a href="skip-ad.html">
                        <div className="flex items-center gap-6">
                          <img
                            src="./images/news-grid.jpg"
                            alt=""
                            className="news-item-img"
                          />
                          <div className="">
                            <p className="news-item-text">
                              निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै
                              सीमित !
                            </p>
                            <div className="mt-2 flex">
                              <span className="material-icons-outlined text-text-paragraph">
                                watch_later
                              </span>
                              <p className="text-text-paragraph">
                                ४० मिनेट अगाडि
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewsDetails;
