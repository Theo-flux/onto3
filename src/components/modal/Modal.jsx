import React, {useContext} from 'react'
import { Div, Button } from '../../shared'
import { AppContext } from '../../context/appContext'

function Modal() {
    const { isModalOpen, handleModal } = useContext(AppContext);

    return (
        <section className={`${isModalOpen ? "top-[0px] opacity-100  z-50" : "opacity-0 top-[-10px] z-0" } border fixed left-0 w-full h-[100%] backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0B1218] transition-all duration-500 ease-in-out `}>
            <Div>
                <div className={`flex justify-center items-center`}>
                    <div className={`${isModalOpen ? "-translate-y-6 opacity-100 delay-70" : "opacity-0 translate-y-0 z-10" } bg-white w-full max-w-lg mt-24 px-4 transition-all duration-500 ease-in-out`}>
                        <div className={`flex justify-between items-center border-b border-gray py-4`}>
                            <h3 className={`text-xl font-bold font-poppins`}>Launch App</h3>
                            <i onClick={() => handleModal()}  className="cursor-pointer text-2xl ri-close-fill"></i>
                        </div>
                        <div className={`flex flex-col justify-center items-center py-8`}>
                            <p className={`mb-8 font-poppins`}>App not yet available on Google playstore or Applestore</p>
                            <Button onClick={() => handleModal()} className="self-start bg-[#67EFA4] text-bunker">Dismiss</Button>
                        </div>
                    </div>
                </div>
            </Div>
        </section>
    )
}

export default Modal