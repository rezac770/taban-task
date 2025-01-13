import axios from "axios";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1YjgzMTFiNy01YzA3LTRhNWYtYjE4Zi01OGEyNzc2NzY0YTUiLCJzdWIiOiJUZXN0IFRhYmFuIiwiYXV0aCI6IlJPTEVfQ1VTVE9NRVIiLCJ1c2VyIjoiMmM5YTgwODI4Y2RkMzU3MzAxOGNkZDk1YmRiMzAwMDAiLCJtb2JpbGUiOiIwOTAzMjczNzEyMiIsImtleSI6ImtpcGl0LWNvbnN1bWVyLWtleSIsIm5pZCI6IndTa3ZEcGdwRkY3ZUJkSU4zSGNBeEE9PSIsImhhc2hlZF9uYXRpb25hbF9pZCI6IjAwMjI3ODExMTAiLCJ0eXBlIjoiQ1VTVE9NRVIiLCJjbGllbnQiOjIsImV4cCI6MTczNzIzNjA4NX0.B0mn0hKJOAczUq1GBldj-LzbpCD-vcexM9c_vlnyg4XSamT0mO2uOqzT_Ec-jR0oy68kaeiAjoHrERsMKUt4mw";

const axiosInstanse = axios.create({
  baseURL: "http://130.185.74.15:9080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstanse;
