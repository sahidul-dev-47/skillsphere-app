import {Spinner} from "@heroui/react";

export function SpinnerBasic() {
  return (
     <div className="flex flex-col items-center gap-2">
        <Spinner size="md" color="current" />
        <span className="text-xs text-muted">Current</span>
      </div>
  );
}