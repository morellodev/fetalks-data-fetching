import { useEffect, useReducer } from "react";

const INITIAL_QUERY_STATE = {
  loading: false,
  error: null,
  data: undefined,
};

const DEFAULT_QUERY_OPTIONS = {
  enabled: true,
  initialData: INITIAL_QUERY_STATE.data,
};

function init({ initialData }) {
  return {
    ...INITIAL_QUERY_STATE,
    data: initialData,
  };
}

function queryReducer(state, action) {
  switch (action.type) {
    case "QUERY_START":
      return { ...state, loading: true };
    case "QUERY_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "QUERY_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useQuery(queryFn, options = DEFAULT_QUERY_OPTIONS) {
  const [state, dispatch] = useReducer(queryReducer, options, init);

  useEffect(() => {
    if (options.enabled) {
      dispatch({ type: "QUERY_START" });

      queryFn()
        .then((data) => dispatch({ type: "QUERY_SUCCESS", payload: data }))
        .catch((error) => dispatch({ type: "QUERY_ERROR", payload: error }));
    }
  }, [options.enabled, queryFn]);

  return state;
}
