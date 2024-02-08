import { openSignupModal, closeSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";

export function SignupModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  async function handledSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return console.log(currentUser);
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        className="bg-white border-white 
        w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]
        "
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] border bg-black border-gray-700
        rounded-lg text-white md:w-[560px] md:h-[600px]
        flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              className=" rounded-md bg-white text-black w-full font-bold text-lg
                p-2"
            >
              Sign in as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your Account</h1>
            <input
              placeholder="Full Name"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"text"}
            />
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"password"}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold text-lg
                p-2 mt-8 rounded-md"
              onClick={handledSignUp}
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
