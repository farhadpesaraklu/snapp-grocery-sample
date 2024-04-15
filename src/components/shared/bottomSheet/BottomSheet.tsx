import React, { FC, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Sheet, { SheetRef } from "react-modal-sheet";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({ isOpen, onClose, content }) => {
  const ref = useRef<SheetRef>();
  let sheetRoot = document.getElementById("sheet-root");

  if (!sheetRoot) {
    sheetRoot = document.createElement("div");
    sheetRoot.setAttribute("id", "sheet-root");
    document.body.appendChild(sheetRoot);
  }

  const sheetComponent = (
    <Sheet ref={ref} isOpen={isOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Content>
          <Sheet.Scroller draggableAt="both">{content}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );

  return createPortal(sheetComponent, sheetRoot);
};

export default BottomSheet;
