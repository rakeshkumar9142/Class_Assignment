import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Layout with shared header/footer
function MainLayout() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h1>⚡ Atypical React Router Example</h1>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/users/john-doe">User: John Doe</a>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer style={{ padding: "1rem", background: "#eee" }}>
        <small>© 2025 My Cool App</small>
      </footer>
    </div>
  );
}

// Simulate a loader for dynamic data
async function userLoader({ params }) {
  // Pretend API call
  return { username: params.username, joined: "2023-07-15" };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "users/:username",
        element: <UserProfile />,
        loader: userLoader,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
