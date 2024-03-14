import ReactGA from "react-ga4";

export const createEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
