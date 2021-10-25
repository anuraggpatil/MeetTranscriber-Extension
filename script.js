import { auth } from "./firebase";

const user = auth.currentUser;
console.log(user);
if(user){
    alert("yes");
}
else{
    alert("NO");
}
