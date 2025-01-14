import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import Sheet, { SheetRef } from "react-modal-sheet";

interface BottomSheetProps {
  isOpen: boolean;
  isFilterOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({ isOpen, onClose, content, isFilterOpen }) => {
  const ref = useRef<SheetRef>();
  let sheetRoot = document.getElementById("sheet-root");

  if (!sheetRoot) {
    sheetRoot = document.createElement("div");
    sheetRoot.setAttribute("id", "sheet-root");
    document.body.appendChild(sheetRoot);
  }

  const sheetComponent = (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={isFilterOpen ? [850] : [246]}
      initialSnap={1}
    >
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
