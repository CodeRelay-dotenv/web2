"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: (arg0: string) => void;
  disabled?: boolean;
  header: string;
  description?: string;
  title: string;
}

export const RenameModal = ({
  children,
  onConfirm,
  disabled,
  header,
  description,
  title,
}: ConfirmModalProps) => {
  const [newTitle, setNewTitle] = useState(title);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <Input
            disabled={disabled}
            required
            maxLength={60}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Board title"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                (document.querySelector('[data-confirm-id="alert-dialog-action"]') as HTMLElement)?.click();
              }
            }}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={() => onConfirm(newTitle)}>
            <span data-confirm-id="alert-dialog-action">
              Confirm
            </span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};