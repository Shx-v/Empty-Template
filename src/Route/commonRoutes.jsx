import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CommonLayout as Layout } from "@/Layout/CommonLayout";
import Loader from "@/Component/Loader";

const FirstPage = lazy(() => import("@/Page/DummyPages/Page1"));
const SecondPage = lazy(() => import("@/Page/DummyPages/Page2"));

export const commmonRoutes = [
  {
    element: (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    path: "*",
    children: [
      {
        path: "page1",
        element: <FirstPage />,
      },
      {
        path: "page2",
        element: <SecondPage />,
      },
    ],
  },
];
