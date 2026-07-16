import React from 'react'
import { LayersMinus } from 'lucide-react';
import Button from "./ui/Button";
import {useOutletContext} from "react-router";

const Navbar = () => {
    const {isSignedIn, userName,signIn,signOut} = useOutletContext<AuthContext>()

    const handleAuthClick = async () => {
        if(isSignedIn) {
            try {
                await signOut()
            }catch (e){
                console.error('Error sign out: ${e}');
            }
            return;
        }
        try {
            await signIn()
        }catch (e){
            console.error('Error sign in: ${e}');
        }
    }
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <LayersMinus className="logo" />
                        <span className="name">BlueprintAI</span>
                    </div>
                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>
                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {userName ? `Hi, ${userName}` : 'Signed in'}
                            </span>
                            <Button size="sm" onClick={handleAuthClick} className="btn">
                                Logout
                            </Button>
                        </>
                        ) : (
                        <>
                            <Button onClick={handleAuthClick}
                                    size="sm" variant="ghost">
                                Login
                            </Button>
                            <a href="#upload" className="cta">Get Started</a>
                            </>)}




                </div>

            </nav>
        </header>
    )
}
export default Navbar
