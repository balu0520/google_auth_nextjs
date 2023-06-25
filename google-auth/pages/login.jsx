import { useState } from 'react'
import styles from './loginpage.module.css'
import {FcGoogle} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'



export default function Login(){
    const [username,setName] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState(false)
    const router = useRouter()

    const onClickSignIn = async () => {
        const result = await signIn('google')
        if (result?.error) {
            console.log(result.error);
          } else {
            router.push('/user');
          }
        
    }

    const handleLogin = async event => {
        event.preventDefault()
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
          });
      
          if (result.error) {
            setErr(true)
            console.error(result.error);
          } else {
            setErr(false)
          }
        };

    return (
        <div className={styles.container}>
            <div className={styles.desktopViewBoard}>
                <h1 className={styles.desktopViewBoardHeading}>Board.</h1>
            </div>
            <div className={styles.loginContainerMain}>
                <div className={styles.signInContainer}>
                   <h1 className={styles.signInHeading}>Sign In</h1>
                   <p className={styles.signInPara}>Sign in to your account</p>
                   <div className={styles.loginContainers}>
                        <button className={styles.loginContainer} onClick={onClickSignIn}>
                            <FcGoogle width={14} height={14}/>
                            <p className={styles.loginContainerPara}>Sign in with google</p>
                        </button>
                        <button className={styles.loginContainer}>
                            <FaApple width={14} height={14}/>
                            <p className={styles.loginContainerPara}>Sign in with mac</p>
                        </button>
                    </div>
                    <form className={styles.loginFormContainer} onSubmit={handleLogin}>
                        <div style={{margin:'auto', width:'85%'}}>
                            <div className={styles.inputFormContainer}>
                                <label className={styles.loginFormName} htmlFor='username'>Email address</label>
                                <input type="text" value={username} onChange={(e) => setName(e.target.value)} id='username' className={styles.loginFormInput}/>
                            </div>
                            <div className={styles.inputFormContainer}>
                                <label className={styles.loginFormName} htmlFor='password'>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className={styles.loginFormInput}/>
                                {err && (<p className={styles.errorMsg}>invalid credentials</p>)}
                            </div>
                            
                            <p className={styles.forgotPassword}>Forgot password?</p>
                            <button type="submit" className={styles.signInBtn}>Sign In</button>
                        </div>
                    </form> 
                    <p className={styles.accountDesription}>Don't have an account? <span style={{color:'#346BD4'}}>Register here</span></p>
                </div>
            </div>
        </div>
    )
}