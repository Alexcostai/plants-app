import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTM1LCJvcmlnaW4iOiJodHRwczovL25leHRqcy1hcHAtYWxwaGEtYmVyeWwudmVyY2VsLmFwcC8iLCJpcCI6bnVsbCwiZXhwaXJlIjoiMjAyMy0wNS0yNiAwMDo1ODozMCArMDAwMCIsImV4cCI6MTY4NTA2MjcxMH0._HcrnrA55BbBQ-yI2IJ1UHb_VXnaL1UL219FpAX1Yk8";

const http = axios.create({
  baseURL: "https://trefle.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getPlants = (page) => {
  return http.get(`/plants?token=${token}`, { page });
};

export default { getPlants };
