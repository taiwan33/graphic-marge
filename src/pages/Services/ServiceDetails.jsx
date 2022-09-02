import { Link, useLocation, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { state } = useLocation();
  const { slug } = useParams();

  return (
    <div>
      <div className="max-w w-padding">
        <section className="mt-5">
          <h1 className="font-Rakkas text-primary-red text-center text-xl font-bold underline md:text-3xl">
            {state.englishText}
          </h1>
          <div className="mt-10 flex flex-col gap-5 lg:!flex-row">
            <div className="border-primary-red flex-1 overflow-hidden rounded-tr-3xl rounded-bl-3xl border-2">
              <img
                src="https://images.unsplash.com/photo-1646764578980-65dbce171e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
                className="h-full w-full overflow-clip object-cover"
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="border-primary-blue border-2 py-1">
                <p className="text-primary-red text-center text-lg font-bold md:!text-xl">
                  Information of {state.englishText}
                </p>
                <p className="text-primary-red font-ganga text-center text-lg font-bold underline md:!text-xl">
                  {state.nepaliText} सम्बन्धि थप जानकारी
                </p>
                <div className="bg-primary-blue mt-3 p-0.5 text-center text-xl font-bold text-white md:!text-2xl">
                  Other Details :-
                </div>
                <p className="text-primary-blue p-2 text-base md:!text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, debitis cum velit id rem cupiditate dolor. Pariatur
                  temporibus sint, laborum, a consequuntur voluptas illum vel
                  architecto, exercitationem iste eligendi harum. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Totam, debitis
                  cum velit id rem cupiditate dolor. Pariatur temporibus sint,
                  laborum, a consequuntur voluptas illum vel architecto,
                  exercitationem iste eligendi harum.
                </p>
                <p className="text-primary-blue p-2 text-base md:!text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, debitis cum velit id rem cupiditate dolor. Pariatur
                  temporibus sint, laborum, a consequuntur voluptas illum vel
                  architecto, exercitationem iste eligendi harum. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Totam, debitis
                  cum velit id rem cupiditate dolor. Pariatur temporibus sint,
                  laborum, a consequuntur voluptas illum vel architecto,
                  exercitationem iste eligendi harum.
                </p>
              </div>
              <div className="-mt-2.5 text-center">
                <Link
                  to={state.path}
                  className="font-Berkshire bg-primary-red rounded-3xl px-3 py-1 text-center text-lg text-white"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ServiceDetails;
