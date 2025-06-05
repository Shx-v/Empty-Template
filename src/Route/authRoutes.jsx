import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout as Layout } from "@/Layout/AuthLayout";
import Loader from "@/Component/Loader";

export const authRoutes = [
  {
    element: (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    path: "auth",
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <div>login</div>,
      },
      {
        path: "register",
        element: <div>register</div>,
      },
      {
        path: "forgot-password",
        element: <div>forgot-password</div>,
      },
    ],
  },
];
