import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import appStore from "./Utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { ResultsList } from "./Components/ResultsList";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <ResultsList />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="">
        <RouterProvider router={approuter}>
          <Head />
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
