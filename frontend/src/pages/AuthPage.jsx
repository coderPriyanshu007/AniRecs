import LoginSignup from "../components/LoginSignup";
import PageBackground from "../components/PageBackground";

const AuthPage = () => {


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      

      {/* video background */}
      <PageBackground />
      
      {/* login signup form */}
      <LoginSignup />
    
    </div>
  );
};

export default AuthPage;
