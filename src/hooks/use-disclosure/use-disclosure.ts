import { noobj } from "@constant";
import { useCallback, useState } from "react";

export interface UseDisclosureProps {
  initialState?: boolean;
}

export interface UserDisclosure {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: (toState?: boolean) => void;
}

export const useDisclosure = ({
  initialState,
}: UseDisclosureProps = noobj): UserDisclosure => {
  const [open, setOpen] = useState<boolean>(() => !!initialState);

  const onOpen = useCallback(() => setOpen(true), []);

  const onClose = useCallback(() => setOpen(false), []);

  const onToggle = useCallback((toState?: boolean) => {
    setOpen((open) => (toState === undefined ? !open : !!toState));
  }, []);

  return { open: !!open, onClose, onOpen, onToggle };
};

export default useDisclosure;
