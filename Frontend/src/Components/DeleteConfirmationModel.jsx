const DeleteConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white w-80 rounded-lg shadow-lg p-6">
                <p className="text-lg font-medium mb-4">{message}</p>
                <div className="flex justify-end">
                    <button onClick={onCancel} className="mr-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmationModal;