import updater from "./updater";
import { QueryClient, QueryClientProvider } from "react-query";
import UserNFT from "./components/UserNFT";
import Market from "./components/Market";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UploadNFT from "./components/UploadNFT";

const queryClient = new QueryClient();

function App() {
  //example to use useWeb3() hook

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/UserNFT" element={<UserNFT />} />
          <Route path="/UploadNFT" element={<UploadNFT />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

    // <QueryClientProvider client={queryClient}>
    //   <button onClick={isActive ? deActivate : activate}>
    //     {isActive ? connection.address : "Connect"}
    //   </button>
    //   {isActive && (
    //     <UserNFT/>
    //   )}
    //   <Divider/>
    //   <Market/>
    //   <Toaster/>
    // </QueryClientProvider>
  );
}

export default updater(App);
