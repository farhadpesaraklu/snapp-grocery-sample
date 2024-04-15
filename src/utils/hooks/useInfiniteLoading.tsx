import { useCallback, useEffect, useRef } from "react";

interface UseInfiniteLoadingProps {
  scrollingElementSelector: string;
  loaderMethod: () => void;
  toBeWatchedData: any;
  loading: boolean;
}

const useInfiniteLoading = ({
  scrollingElementSelector,
  loaderMethod,
  toBeWatchedData,
  loading,
}: UseInfiniteLoadingProps) => {
  useEffect(() => {
    const scrollingElement = document.querySelector(scrollingElementSelector);
    if (toBeWatchedData && scrollingElement?.scrollHeight! <= scrollingElement?.clientHeight!) {
      setTimeout(loaderMethod, 0);
    }
  }, [toBeWatchedData]);

  const loaderMethodCalled = useRef(false);

  const handleScroll = useCallback(() => {
    const scrollingElement = document.querySelector(scrollingElementSelector);
    const LOAD_MORE_ITEMS_THRESHOLD = 0.4;
    const shouldLoadNewItems =
      scrollingElement?.scrollTop! >
      (scrollingElement?.scrollHeight! - scrollingElement?.clientHeight!) *
        LOAD_MORE_ITEMS_THRESHOLD;
    if (shouldLoadNewItems && !loading && !loaderMethodCalled.current) {
      setTimeout(loaderMethod, 0);
      loaderMethodCalled.current = true;
    }
  }, [loading]);

  useEffect(() => {
    const scrollingElement = document.querySelector(scrollingElementSelector);
    scrollingElement?.addEventListener("scroll", handleScroll);
    return () => {
      loaderMethodCalled.current = false;
      scrollingElement?.removeEventListener("scroll", handleScroll);
    };
  }, [toBeWatchedData]);
};

export default useInfiniteLoading;
