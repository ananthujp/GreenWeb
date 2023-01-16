import "./App.css";
import Element from "./Element";
import { motion } from "framer-motion";
import useAuth from "./Auth";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "./firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Input from "./Input";
import Modal from "./Modal";
import { PlusIcon } from "@heroicons/react/outline";
function App() {
  const { setAuth, authState } = useAuth();
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const data1 = [
    {
      id: "a2ds",
      title: " Event One",
      date: new Date("2022-10-29"),
      data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      pics: [
        "https://www.openaccessgovernment.org/wp-content/uploads/2019/03/dreamstime_s_115214614.jpg",
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg",
        "https://www.robertwalters.com.sg/content/dam/robert-walters/country/singapore/images/article-images/woman-working-on-her-laptop-580x326px.jpg",
        "https://media.npr.org/assets/img/2020/03/13/gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s1100-c50.jpg",
      ],
    },
  ];
  const Login = () => {
    const email = prompt("Enter your email address : ", "abc@email.com"); //ananthujp@gmail.com
    const password = prompt("Enter password : ", "asd"); //passmein
    signInWithEmailAndPassword(auth, email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };
  const auth = getAuth();
  const signOUT = () => {
    signOut(auth);
  };
  useEffect(() => {
    onSnapshot(
      query(collection(db, "Timeline"), orderBy("date", "desc")),
      (dc) =>
        setData(
          dc.docs.map((dic) => ({
            id: dic.id,
            title: dic.data().title,
            subtitle: dic.data().subtitle,
            data: dic.data().details,
            date: dic.data().date.toDate(),
            pics: dic.data().pics,
            child: dic.data().child,
          }))
        )
    );
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if (user.uid === "1CcZBuHoTEM9CPgPYMqDl5zRucl1") {
          setAuth(true);
          //console.log(user);
        }
        // ...
      } else {
        // User is signed out
        // ...
        setAuth(false);
      }
    });
  }, [auth]);

  return (
    <motion.div
      transition={{
        staggerChildren: 0.5,
      }}
      className="relative mx-8 md:mx-auto md:w-4/5 flex flex-col mt-12 justify-center items-center bgdots  h-full overflow-y-auto"
    >
      <div
        onClick={() => (auth.currentUser ? signOUT() : Login())}
        className="absolute top-2 right-2"
      >
        {auth.currentUser ? "LogOut" : "Login"}
      </div>

      <div className="mt-12"></div>
      {display && (
        <Modal
          children={<Input setDisplay={setDisplay} />}
          setDisplay={setDisplay}
        />
      )}
      {edit && (
        <Modal
          children={
            <Input setDisplay={setDisplay} edit={edit} setEdit={setEdit} />
          }
          setDisplay={setEdit}
        />
      )}
      {authState && (
        <div className={"mb-1 rounded-full bg-green-400 cursor-pointer"}>
          <div onClick={() => setDisplay(true)}>
            <PlusIcon className="cursor-pointer text-white w-6 p-1" />
          </div>
        </div>
      )}
      {data?.map((dc, i) => {
        return (
          <Element
            key={i}
            i={i}
            title={dc.title}
            subtitle={dc.subtitle}
            date={dc.date}
            dateN={data ? data[i + 1]?.date : ""}
            data={dc.data}
            pics={dc.pics}
            opened={i === 9 ? true : false}
            rev={i % 2 === 0 ? true : false}
            id={dc.id}
            child={dc.child}
            setEdit={setEdit}
          />
        );
      })}
    </motion.div>
  );
}

export default App;
