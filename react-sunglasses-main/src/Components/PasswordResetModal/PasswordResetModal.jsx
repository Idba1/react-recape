import { useState } from "react";

const PasswordResetModal = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        console.log(email);
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <label className="label">
                <a onClick={() => document.getElementById('my_modal_2').showModal()} className="label-text-alt link link-hover">Forgot password?</a>
            </label>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default PasswordResetModal;