import { useCreateUserContext } from "../../contexts/CreateUserContext";
import AddAboutMe from "./AddAboutMe";
import AddBackgroundImage from "./AddBackgroundImage";
import AddBio from "./AddBio";
import AddProfileImage from "./AddProfileImage";
import AddTags from "./AddTags";
import SignUp from "./SignUp";

const CreateUser = () => {
  const { state, nextStep, prevStep } = useCreateUserContext();

  if (state.isSignUp) {
    return <SignUp />;
  }

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <AddProfileImage />;
      case 2:
        return <AddBackgroundImage />;
      case 3:
        return <AddBio />;
      case 4:
        return <AddAboutMe />;
      case 5:
        return <AddTags />;

      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center w-[66%] h-[80%] bg-bgPrimary  mt-[6rem] rounded-lg">
      <main className="w-[100%] h-[100%]">{renderStep()}</main>
      <div className="w-[80%] flex justify-between mt-auto mb-6">
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default CreateUser;
