export const observeAttributes = (
  element: HTMLElement,
  attributes: string[],
  callback: () => void
) => {
  const watchAttributes = (mutationList: MutationRecord[]) => {
    mutationList.forEach((mutation) => {
      const attributeName = mutation.attributeName;
      if (attributeName) callback();
    });
  };

  const observer = new MutationObserver(watchAttributes);
  observer.observe(element, { attributeFilter: attributes });

  return observer;
};
