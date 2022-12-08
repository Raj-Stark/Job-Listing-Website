import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { Logo, FormRow } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../Features/user/userSlice";
import { useNavigate } from "react-router";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //  ! Handle Change inside form inputs

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  //  ! Submit Form Function

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if ((!isMember && !name) || !email || !password) {
      toast.error("Please Fill out all Fields");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    } else {
      dispatch(registerUser({ name, email, password }));
      return;
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormRow>
        )}
        {/* Email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        ></FormRow>

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        ></FormRow>

        <button className="btn btn-block" disabled={isLoading}>
          {values.isMember ? "Login" : "Register"}
        </button>
        <button
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            );
          }}
        >
          {isLoading ? "Loading..." : "Demo App"}
        </button>
        <p>
          {values.isMember ? `Not a member yet ? ` : "Already a member ?"}
          <button className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
