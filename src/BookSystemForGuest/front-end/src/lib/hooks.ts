import React, { useState } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const useAuthed = () => {
  const [authed, setAuthed] = useState(() => {
    try {
      const session = Cookies.get("session");
      const key = process.env.REACT_APP_JWT_KEY;
      if (session !== undefined && key !== undefined) {
        const res = jwt.verify(session, key);
        return res;
      }
    } catch (err) {
      return false;
    }
  });

  return authed;
};
