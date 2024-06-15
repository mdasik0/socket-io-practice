/* eslint-disable react/prop-types */
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'

export default function Modal({isOpen, setIsRoomOpen,children}) {


  return (
    <>
      <Transition show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsRoomOpen(!isOpen)}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl  p-6 bg-white">
                  <div>
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
