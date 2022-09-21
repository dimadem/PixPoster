/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { AppDispatchContext, AppStateContext } from "../redux/AppStateProvider";
import { Dialog, Transition } from "@headlessui/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

// modal screen
export default function Shortcuts() {
  const dispatch = useContext(AppDispatchContext);
  const { shortcuts } = useContext(AppStateContext);

  const cancelButtonRef = useRef(null);

  return (
    <div className="m-auto text-4xl text-slate-900">
      <Transition.Root show={shortcuts} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={dispatch}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-50 sm:mx-0 sm:h-10 sm:w-10">
                        <AcademicCapIcon
                          className="h-6 w-6 text-gray-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Keyboard shortcuts:
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <div className="grid grid-cols-2">
                              <span className="text-center text-lg">
                                Change:
                              </span>
                              <h1 className=" pl-3">
                                ALT + CTRL + 1,2,3,4,5,6,7,8,9,0
                              </h1>
                              <span className="text-center text-lg">
                                Navigate:
                              </span>
                              <h1 className="text-left pl-3">
                                SHIFT + ArrowUp, ArrowDown, ArrowLeft,
                                ArrowRight
                              </h1>
                              <span className="text-center text-lg">
                                Scale:
                              </span>
                              <h1 className="text-left pl-3">
                                ALT + ArrowUp, ArrowDown
                              </h1>
                              <span className="text-center text-lg">
                                Reset page:
                              </span>
                              <h1 className="text-left pl-3">CTRL + R</h1>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() =>
                        dispatch({
                          type: "HIDE_SHORTCUTS",
                          payload: false,
                        })
                      }
                    >
                      OKAY
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
