import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown, Eye } from "phosphor-react";
import React from "react";
import { Container } from "./styles";

const DaltonicButton: React.FC = () => {
  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="menu-btn"
            aria-label="Selecione seu tipo de daltonismo"
          >
            <Eye size={32} />
            <span>Modo daltônico</span>
            <CaretDown size={32} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenu.Item className="DropdownMenuItem">
              Septia <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              Septia<div className="RightSlot">⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" disabled>
              septia <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenu.Item>

            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Container>
  );
};

export default DaltonicButton;
