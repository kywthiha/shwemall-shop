export const getData = (name, isJson = false) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(name);

    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    } else if (value && value !== "null" && value !== "undefined") {
      if (isJson) {
        try {
          return JSON.parse(value);
        } catch (e) {
          return null;
        }
      } else {
        return value;
      }
    }
  }
};

export const setData = (name, value, isJson = false) => {
  console.log(name, value);
  if (typeof window !== "undefined") {
    if (typeof value === "boolean") {
      localStorage.setItem(name, value);
    } else if (value) {
      if (isJson) {
        try {
          localStorage.setItem(name, JSON.stringify(value));
        } catch (e) {
          localStorage.removeItem(name);
        }
      } else {
        localStorage.setItem(name, value);
      }
    } else {
      localStorage.removeItem(name);
    }
  }
};
