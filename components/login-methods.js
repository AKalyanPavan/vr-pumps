export function LoginMethods({ isOpen, onClose, onSwitchToSignup }) {
	return(
		<div className="fixed inset-0 bg-[#21325b80] flex items-center justify-center p-4 z-50">
	      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
	        {/* Close button */}
	        <button
	          onClick={onClose}
	          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
	        >
	          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
	          </svg>
	        </button>

	        <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>

	        <p className="text-center text-gray-600 mb-6">
	          Don't have an account yet?{' '}
	          <button
	            onClick={onSwitchToSignup}
	            className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
	          >
	            Sign up
	          </button>
	        </p>
	      </div>
	    </div>
	)
}