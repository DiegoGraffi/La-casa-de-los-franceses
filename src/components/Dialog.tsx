"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  title: string;
  onAccept: () => void;
  onDecline: () => void;
  children: React.ReactNode;
};

export default function Dialog({
  title,
  onAccept,
  onDecline,
  children,
}: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onDecline();
  };

  const clickOk = () => {
    onAccept();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
          <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
            <h1 className="text-2xl">{title}</h1>
            <button
              onClick={closeDialog}
              className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h8 font-bold bg-red-600 text-white"
            >
              X
            </button>
          </div>
          <div className="px-5 pb-6">
            {children}
            <div className="flex flex-row justify-end">
              <button onClick={clickOk}>Si</button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
