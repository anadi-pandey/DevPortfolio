import { Button, Form, Input, Row } from "antd";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, googleProvider, db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth);

  const signIn = async () => {
    // await createUserWithEmailAndPassword(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = () => {
    try {
      signOut(auth, googleProvider);
    } catch (e) {
      console.log(e);
    }
  };

  const movieRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(movieRef);
        console.log(data);
        const filteredData = data.docs.map((doc) => {
          console.log({ ...doc.data() }, "Items");
          return { ...doc.data(), id: doc.id };
        });
        console.log(filteredData);
      } catch (e) {
        console.log("Error Fetching Movies", e);
      }
    };
    getMovieList();
  }, []);

  console.log(db, "Database");

  return (
    <div className="auth_container">
      <Row style={{ justifyContent: "center" }}>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button name="Submit" onClick={() => signIn()}>
            Submit
          </Button>
          <Button name="Submit" onClick={() => signInWithGoogle()}>
            Sign In Using Google
          </Button>
          <Button onClick={() => logOut()}>Log Out</Button>
        </Form>
      </Row>
    </div>
  );
};

export default Auth;
