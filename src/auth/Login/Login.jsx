import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.js";
import {useState} from "react";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            console.log("User Logged");
        }catch (e){
            console.log("Error",e);
        }
    }
    const handleGoogleLogin = async (e)=>{
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        try{
            const userCredential = await signInWithPopup(auth,provider);
            console.log("User Logged");
        }catch (e){
            console.log("Error",e);
        }
    }
    return(
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
            <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 text-white p-2 rounded mt-4"
            >
                Sign in with Google
            </button>
        </div>
    )
}
export default Login;