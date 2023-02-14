import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import Modal from "../Modal";
import axios from "axios";
// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Header = () => {
  const {
    loading,
    user,
    logout,
    isRecruiter,
    isApproved,
    currentEmail,
    isPremium,
  } = useContext(AuthContext);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();
  const [isLogout, setLogout] = useState(false);
  const [premiumModal, setpremiumModal] = useState(false);

  const [productDetails, setProductDetails] = useState();
  const [selectedItemAmount, setSelectedItemAmount] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${
          Math.floor(Math.random() * 10) + 11
        }`
      );
      setProductDetails(res.data);
      setSelectedItemAmount((res.data.price * 75.61 * 100).toFixed(2));
    } catch (err) {
      return console.log(err);
    }
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert(
        "Failure loading the Razorpay SDK. PLease make sure you are connected to the internet"
      );
      return;
    }

    const orderData = await axios.post(
      `${process.env.API_URL}api/createOrder/`,
      {
        amount: 199 * 100,
      }
    );

    const { amount, currency, order_id } = orderData.data;

    const options = {
      key: "rzp_test_IUIq9c0XeimSlQ", // Enter the Key ID generated from the Dashboard
      // amount: amount.toString(),
      amount: 199,
      currency: currency,
      name: "Test Company",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const razorpay_paymentId = response.razorpay_payment_id;
        const razorpay_orderId = response.razorpay_order_id;
        const razorpay_signature = response.razorpay_signature;
        const amount = 199;

        const res = await axios.post(
          `${process.env.API_URL}api/verifySignature/`,
          {
            razorpay_paymentId,
            razorpay_orderId,
            razorpay_signature,
            currentEmail,
            amount,
          }
        );

        if (res.data.status) {
          setpremiumModal(false);

          toast.success(res.data.status);
          window.location.reload();
        }

        // alert(res.data.status);
      },
      prefill: {
        name: "John Doe",
        email: "doejon@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#61dafb",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  //  console.log(user)

  const logoutHandler = () => {
    setLogout(true);
    logout();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (keyword) {
      let searchQuery = `/?keyword=${keyword}`;

      router.push(searchQuery);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="navWrapper items-center justify-center ">
      <Toaster />
      <div className="navContainer items-center justify-center">
        <Link href="/">
          <div className="logoWrapper md:w-3/4 lg:w-1/2 xl:w-1/3">
            <span className="logo1  text-lg">Hire</span>
            <span className="logo2  text-lg">Talent.com</span>
          </div>
        </Link>
        <div className="searchbar">
          <form onSubmit={submitHandler} className="search-bar w-80 text-dark">
            <div className="relative rounded-md shadow-sm ">
              <input
                id="search"
                className="form-input sm-hidden search-bar-form  py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Search..."
                type="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"></div>
            </div>
          </form>
        </div>
        <div className="btnsWrapper items-center justify-center">
          {user && !isPremium ? (
            <div className="premiumbtn">
              <button
                className=" btn btn-warning text-white flex items-center justify-center "
                onClick={() => setpremiumModal(true)}
              >
                <span>Upgrade to Premium Plan</span>
              </button>
            </div>
          ) : (
            ""
          )}

          <Modal
            id="premiumModal"
            closeActive={() => setpremiumModal(false)}
            active={premiumModal}
          >
            <div className="p-3 rounded">
              <div className="premiumLogo flex items-center justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="gold" d="M6 2L2 8l10 14L22 8l-4-6H6Z" />
                  </svg>
                </span>
              </div>
              <div className="flex justify-center">
                <h3>Get Premium</h3>
              </div>
              <div className="">
                <p className="">
                  Do you want to experiance your premium feature experience{" "}
                </p>
                <p>@₹199 only</p>
              </div>
              <div className="flex justify-center ">
                <button
                  className="bg-blue-800 px-4 py-1 rounded hover:bg-blue-900 shadow"
                  onClick={displayRazorpay}
                >
                  Purchase
                </button>
              </div>
            </div>
          </Modal>

          {isRecruiter ? (
            <Link href="/employer/jobs/new">
              <button className="postAJobButton postbutton flex items-center justify-center">
                <span>Post A Job</span>
              </button>
            </Link>
          ) : (
            <></>
          )}

          {isRecruiter ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4 text-black"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name + user.last_name}</span>
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="dropDownMenuButton"
              >
                <Link href="/employer/jobs" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Dashboard</span>
                  </button>
                </Link>
                {!isPremium? (
                  <div className="md:hidden sm:flex dropdown-item  bg-warning">
                    <button
                      className="text-white"
                      onClick={() => setpremiumModal(true)}
                    >
                      <span>Premium</span>
                    </button>
                  </div>
                ):""}

                <Link href="/me" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Profile</span>
                  </button>
                </Link>
                <Link href="/" className="hover:no-underline">
                  <button
                    className="dropdown-item text-red-500 hover:bg-red-100"
                    onClick={() => logout()}
                  >
                    <span>Logout</span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            user && (
              <div className="dropdown ml-3">
                <a
                  className="btn dropdown-toggle mr-4 text-black"
                  id="dropDownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Hi, {user.first_name + user.last_name}</span>
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropDownMenuButton"
                >
                  <Link href="/me/applied" className="hover:no-underline">
                    <button className="dropdown-item hover:bg-blue-100">
                      <span>Jobs Applied</span>
                    </button>
                  </Link>
                  <Link href="/me" className="hover:no-underline">
                    <button className="dropdown-item hover:bg-blue-100">
                      <span>Profile</span>
                    </button>
                  </Link>
                  <Link href="/upload/resume" className="hover:no-underline">
                    <button className="dropdown-item hover:bg-blue-100">
                      <span>Upload Resume</span>
                    </button>
                  </Link>
                  <Link href="/" className="hover:no-underline">
                    <button
                      className="dropdown-item text-red-500 hover:bg-red-100"
                      onClick={() => logout()}
                    >
                      <span>Logout</span>
                    </button>
                  </Link>
                </div>
              </div>
            )
          )}

          {!user && (
            <Link href="/login" className="items-center justify-center">
              <button className="loginButtonHeader items-center justify-center">
                <span className="items-center justify-center">Login</span>
              </button>
            </Link>
          )}

          {/* {user ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4 text-black"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name + user.last_name}</span>
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="dropDownMenuButton"
              >
                
                <Link href="/employer/jobs/" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100 ">
                    <span>My jobs</span>
                  </button>
                </Link>
                <Link href="me/applied" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Jobs Applied</span>
                  </button>
                </Link>
                <Link href="/me" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Profile</span>
                  </button>
                </Link>
                <Link href="/upload/resume" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Upload Resume</span>
                  </button>
                </Link>
                <Link href="/" className="hover:no-underline">
                  <button
                    className="dropdown-item text-red-500 hover:bg-red-100"
                    onClick={() => logout()}
                  >
                    <span>Logout</span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login" className="items-center justify-center">
                <button className="loginButtonHeader items-center justify-center">
                  <span className="items-center justify-center">Login</span>
                </button>
              </Link>
            )
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
