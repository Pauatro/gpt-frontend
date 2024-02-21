import type { FC } from "react";
import { Button } from "../../../shared/ui/components/Button";
import { authTokenStore } from "../../application/hooks/authTokenStore";

export const HomeScreen: FC = () => {
  const { resetAuthToken } = authTokenStore();

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="w-1/2 max-w-4xl min-w-min flex flex-col gap-2 items-center">
        <Button className="pb-2" onClick={resetAuthToken}>
          Logout
        </Button>
      </div>
    </div>
  );
};
