import QuoteSection from '../../components/QuoteSection'
import HealthcareLoginForm from '../../components/healthcare/Login'

const HealthcareLogin = () => {
  return (
    <>
      <div className="flex h-screen">
            {/* Left Section (Login Form) */}
            <div className="flex flex-1 items-center justify-center bg-gray-100">
                <HealthcareLoginForm />
            </div>

            {/* Right Section (Quote) - Hidden on small screens */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
                <QuoteSection />
           </div>
        </div>
        </>
  )
}

export default HealthcareLogin