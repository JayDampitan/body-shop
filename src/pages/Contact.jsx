import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex text-offWhite bg-gray-50  h-auto lg:h-screen py-6 w-full justify-center">
      <div className="w-[90%] lg:h-[80vh] mt-20 lg:mt-36 lg:pl-20 bg-primary rounded-2xl flex flex-col lg:flex-row items-center justify-center py-6">
        <div className="uppercase lg:w-[50%] w-full text-center lg:text-start">
          <h2 className="text-lg my-3 font-semibold lg:text-4xl after:border after:block after:mx-auto lg:after:mx-0 after:max-w-[150px] lg:after:max-w-[250px] after:border-offWhite">
            contact us
          </h2>
          <p>
            <span>
              <FaAddressBook className="inline mr-2" />
            </span>{" "}
            1140 n. lemoore ave.
          </p>
          <p className="my-2 lg:ml-7">lemoore ca. 93245</p>
          <p>
            <span>
              <FaPhoneAlt className="inline mr-2" />
            </span>
            559-924-2334
          </p>
          <p className="lowercase my-2">
            <span>
              <FaMailBulk className="inline mr-2" />
            </span>
            bodyshophealthclub@gmail.com
          </p>

          <div className="mt-10 mx-auto flex items-center justify-center lg:justify-start ">
            <iframe
              className="w-[80%] h-72 lg:h-96 rounded-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.9404800751126!2d-119.78277414884427!3d36.3137501799538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094c09b267bf8bd%3A0xb44cb865d90a8428!2s1140%20N%20Lemoore%20Ave%2C%20Lemoore%2C%20CA%2093245!5e0!3m2!1sen!2sus!4v1676755383532!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>

        {/* -----------form section---------------- */}
        <div className="py-3 px-6 w-[90%] lg:w-[40%] mt-8 uppercase">
          <form className="flex flex-col lg:gap-1" action="">
            <label>name</label>
            <input className="rounded" type="text" />
            <label>address</label>
            <input className="rounded" type="address" />
            <label>email</label>
            <input className="rounded" type="email" />
            <label>phone</label>
            <input className="rounded" type="phone" />
            <label htmlFor="">message</label>
            <textarea
              className="rounded resize-none"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="mx-auto px-5 text-[13px] lg:text-base uppercase border border-offWhite bg-offWhite text-primary mt-3 rounded-full hover:text-offWhite hover:bg-primary duration-300">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
