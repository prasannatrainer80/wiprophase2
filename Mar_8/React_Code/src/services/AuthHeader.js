export default function AuthHeader() {
    const token = JSON.parse(localStorage.getItem("token"))
    // const token = "abc";
    alert("Token is  " +token);
    if (token) {
      alert("Entered");
       return { Authorization: 'Bearer ' + token }; // for Spring Boot back-end
    //   return { 'x-access-token': user };       // for Node.js Express back-end
    } else {
      return {};
    }
}