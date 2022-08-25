import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  & > form {
    width: 100%;
    height: 100%;
  }
`;
const EmailInputWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  & > span:first-child {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #22bbff;
    border-radius: 10px;
    padding: 5px 0;
    margin-right: 10px;
  }
  & > input {
    width: 300px;
    height: 30px;
    background-color: transparent;
    color: white;
    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;
    font-size: 16px;
    font-weight: 700;
    border: none;
  }
  & > input:focus {
    outline: none;
  }
  & > span:last-child {
    position: absolute;
    top: 30px;
    left: 110px;
    color: tomato;
  }
`;
const MessageWrapper = styled.div`
  width: 100%;
  position: relative;
  & > span:first-child {
    width: 100%;
    display: flex;
    font-weight: 700;
    color: #22bbff;
    border-bottom: 1px solid #22bbff;
  }
  & > span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    color: tomato;
  }
`;
const MessageInputWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  & > textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: white;
    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #22bbff;
    resize: none;
    /* width */
    &::-webkit-scrollbar {
      width: 3px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: #22bbff33;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #22bbff;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #1788cc;
    }
  }
  & > textarea:focus {
    outline: none;
  }
  & > textarea::placeholder {
    outline: none;
    font-size: 16px;
  }
`;
const SubmitBtn = styled.input<{
  submitStatus: "NORMAL" | "PROCESSING" | "SENDED" | "FAILED";
}>`
  width: 120px;
  position: absolute;
  top: -100px;
  right: 20px;
  color: white;
  background-color: ${(props) =>
    props.submitStatus === "SENDED"
      ? "#53BF9D"
      : props.submitStatus === "FAILED"
      ? "#F94C66"
      : "transparent"};
  border: 1px solid
    ${(props) =>
      props.submitStatus === "SENDED"
        ? "#53BF9D"
        : props.submitStatus === "FAILED"
        ? "#F94C66"
        : "#22bbff"};
  border-radius: 5px;
  padding: 5px 20px;
  font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;
  transition: background-color 0.3s ease-out, border 0.3s ease-out;
`;

const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

interface IForm {
  sendEmail: string;
  contents: string;
}
function EmailForm() {
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors },
  } = useForm<IForm>();
  const [submitStatus, setSubmitStatus] = useState<
    "NORMAL" | "PROCESSING" | "SENDED" | "FAILED"
  >("NORMAL");

  const handleValidation = ({ sendEmail, contents }: IForm) => {
    const isValid = isValidEmail(sendEmail);
    const validityChanged =
      (errors.sendEmail && isValid) || (!errors.sendEmail && !isValid);
    if (validityChanged) {
      setError(
        "sendEmail",
        { type: "focus", message: `Please write validate Email.` },
        { shouldFocus: true }
      );
    } else if (contents.replace(/\n/g, "").length < 20) {
      setError(
        "contents",
        { type: "focus", message: `Please write message longer then 20.` },
        { shouldFocus: true }
      );
    } else {
      setSubmitStatus("PROCESSING");
      emailjs
        .send(
          "service_oyprxjr",
          "template_z91v8j5",
          {
            from_email: sendEmail,
            message: contents.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          },
          "P9tgfLoIAqkO--ytT"
        )
        .then(
          function (response) {
            setSubmitStatus("SENDED");
            resetField("sendEmail");
            resetField("contents");

            setTimeout(() => {
              setSubmitStatus("NORMAL");
            }, 2000);
          },
          function (error) {
            setSubmitStatus("FAILED");
            console.log("FAILED...", error);

            setTimeout(() => {
              setSubmitStatus("NORMAL");
            }, 2000);
          }
        );
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleValidation)}>
        <EmailInputWrapper>
          <span>Send from</span>
          <input
            {...register("sendEmail")}
            placeholder={`username@example.com`}
            autoComplete="off"
          />
          <span>{errors?.sendEmail?.message}</span>
        </EmailInputWrapper>
        <MessageWrapper>
          <span>Message</span>
          <span>{errors?.contents?.message}</span>
        </MessageWrapper>
        <MessageInputWrapper>
          <textarea
            id="message"
            {...register("contents")}
            placeholder={`Hello Woong!\nPlease write message longer then 20.`}
            autoComplete="off"
          />
          <SubmitBtn
            type="submit"
            value={
              submitStatus === "PROCESSING"
                ? "Processing..."
                : submitStatus === "SENDED"
                ? "Sended!"
                : submitStatus === "FAILED"
                ? "Failed..."
                : "Send Email"
            }
            disabled={
              submitStatus === "PROCESSING" ||
              submitStatus === "SENDED" ||
              submitStatus === "FAILED"
                ? true
                : false
            }
            submitStatus={submitStatus}
          />
        </MessageInputWrapper>
      </form>
    </Wrapper>
  );
}

export default EmailForm;
