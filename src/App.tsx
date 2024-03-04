import { LoginScreen } from "./auth/ui/screens/LoginScreen";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./shared/router/ProtectedRoute";
import GuestRoute from "./shared/router/GuestRoute";
import { AppRoutes } from "./shared/router/routes";
import { HomeScreen } from "./auth/ui/screens/HomeScreen";
import { ConversationScreen } from "./auth/ui/screens/ConversationScreen";


function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={AppRoutes.Home} element={<HomeScreen />} />
        <Route path={AppRoutes.Conversation} element={<ConversationScreen />} />
      </Route>
      <Route element={<GuestRoute />}>
        <Route path={AppRoutes.Login} element={<LoginScreen />} />
      </Route>
    </Routes>
  );
}


export default App;
