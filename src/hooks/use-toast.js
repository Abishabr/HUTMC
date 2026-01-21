/**
 * Toast notification hook
 * Converted from TypeScript to JavaScript with PropTypes validation
 */

import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

/**
 * @typedef {Object} ToasterToast
 * @property {string} id - Unique identifier for the toast
 * @property {React.ReactNode} [title] - Toast title
 * @property {React.ReactNode} [description] - Toast description
 * @property {React.ReactElement} [action] - Toast action element
 * @property {boolean} [open] - Whether the toast is open
 * @property {Function} [onOpenChange] - Callback when open state changes
 * @property {'default'|'destructive'} [variant] - Toast variant
 */

/**
 * @typedef {Object} State
 * @property {ToasterToast[]} toasts - Array of active toasts
 */

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

let count = 0;

/**
 * Generate a unique ID for toasts
 * @returns {string} Unique ID
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

/**
 * Add a toast to the removal queue
 * @param {string} toastId - ID of the toast to remove
 */
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * Toast state reducer
 * @param {State} state - Current state
 * @param {Object} action - Action to perform
 * @returns {State} New state
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => 
          (t.id === action.toast.id ? { ...t, ...action.toast } : t)
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // Side effects - This could be extracted into a dismissToast() action,
      // but keeping it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
      
    default:
      return state;
  }
};

const listeners = [];

let memoryState = { toasts: [] };

/**
 * Dispatch an action to update toast state
 * @param {Object} action - Action to dispatch
 */
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

/**
 * Create a new toast notification
 * @param {Object} props - Toast properties
 * @param {React.ReactNode} [props.title] - Toast title
 * @param {React.ReactNode} [props.description] - Toast description
 * @param {React.ReactElement} [props.action] - Toast action element
 * @param {'default'|'destructive'} [props.variant] - Toast variant
 * @returns {Object} Toast control object with id, dismiss, and update methods
 */
function toast({ ...props }) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
    
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

/**
 * Hook for managing toast notifications
 * @returns {Object} Toast state and control functions
 */
function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismissAll: () => dispatch({ type: "REMOVE_TOAST" }),
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
    update: (toastId, props) => dispatch({ type: "UPDATE_TOAST", toast: { id: toastId, ...props } }),
  };
}

// PropTypes for useToast hook
useToast.propTypes = {};

export { useToast, toast };