import { useState, useEffect } from 'react';

const SuccessModal = ({ message, onClose }) => {
    // State to control whether the modal is visible or not
    const [isVisible, setIsVisible] = useState(true);

    // useEffect hook to automatically close the modal after 2 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            onClose(); // Callback to handle modal close
        }, 2000);

        // Clear timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeout);
    }, [onClose]);

    // Render the modal only if isVisible state is true
    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white w-80 rounded-lg shadow-lg p-6">
                    <p className="text-lg font-medium mb-4">{message}</p>
                    {/* Success modals usually don't have buttons, but you can customize them if needed */}
                </div>
            </div>
        )
    );
}

export default SuccessModal;
