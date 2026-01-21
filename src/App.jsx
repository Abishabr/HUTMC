import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import RouteErrorBoundary from "@/components/RouteErrorBoundary";
import { setupGlobalErrorHandlers, reportBoundaryError } from "@/lib/errorReporting";
import styles from "./App.module.css";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Theatre from "./pages/Theatre.jsx";
import Music from "./pages/Music.jsx";
import Events from "./pages/Events.jsx";
import Gallery from "./pages/Gallery.jsx";
import Members from "./pages/Members.jsx";
import Join from "./pages/Join.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      onError: (error) => {
        // Report query errors
        console.error('Query error:', error);
      }
    },
    mutations: {
      onError: (error) => {
        // Report mutation errors
        console.error('Mutation error:', error);
      }
    }
  }
});

/**
 * Main App component with error boundaries and global error handling
 */
const App = () => {
  useEffect(() => {
    // Set up global error handlers on app initialization
    setupGlobalErrorHandlers();
  }, []);

  /**
   * Handles errors caught by the main error boundary
   * @param {Error} error - The error that occurred
   * @param {Object} errorInfo - React error info
   */
  const handleAppError = (error, errorInfo) => {
    reportBoundaryError(error, errorInfo, {
      component: 'App',
      severity: 'critical'
    });
  };

  /**
   * Handles errors caught by route error boundaries
   * @param {Error} error - The error that occurred
   * @param {Object} errorInfo - React error info with route context
   */
  const handleRouteError = (error, errorInfo) => {
    reportBoundaryError(error, errorInfo, {
      component: 'Route',
      severity: 'high',
      route: errorInfo.route
    });
  };

  return (
    <ErrorBoundary onError={handleAppError}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteErrorBoundary onError={handleRouteError}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/theatre" element={<Theatre />} />
                <Route path="/music" element={<Music />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/members" element={<Members />} />
                <Route path="/join" element={<Join />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RouteErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;