// import { useState } from "react";
// import UserContextProvider from "./context/UserContextProvider";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <UserContextProvider>
//       <h1>Code With Bhushan </h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   );
// }

// export default App;

import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <header className="w-full bg-blue-500 text-white text-center py-4 shadow-md">
          <h1 className="text-2xl font-bold">Code With Bhushan</h1>
        </header>
        <main className="w-full flex flex-row justify-center items-start gap-8 py-8 px-4 max-w-5xl">
          {/* Login Section */}
          <div className="flex-1 bg-white shadow-md p-6 rounded-md border border-gray-200 max-w-md">
            <Login />
          </div>
          {/* Profile Section */}
          <div className="flex-1 bg-white shadow-md p-6 rounded-md border border-gray-200 max-w-md">
            <Profile />
          </div>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
