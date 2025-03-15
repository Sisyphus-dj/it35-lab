import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonAlert,
  IonToast,
  IonPage,
  IonButtons,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigation = useIonRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setToastMessage('Successfully logged in!');
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1000);
    } else {
      setToastMessage('Invalid username or password!');
      setShowToast(true);
    }
  };

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }
    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match!');
      setShowAlert(true);
      return;
    }
    setToastMessage('Successfully signed up! Redirecting to login...');
    setShowToast(true);
    setTimeout(() => {
      setIsSignupOpen(false);
    }, 1000);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="login-container">
          <IonIcon icon={personCircleOutline} className="login-icon" />
          <IonCard className="login-card rounded-card">
            <IonCardContent>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput value={username} onIonChange={(e) => setUsername(e.detail.value!)} required placeholder="Enter your username" />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} required placeholder="Enter your password" />
              </IonItem>

              <IonButton onClick={handleLogin} expand="full" shape="round">Login</IonButton>
              <IonButton expand="full" color="secondary" shape="round" onClick={() => setIsSignupOpen(true)}>Sign Up</IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        <IonModal isOpen={isSignupOpen} className="signup-modal">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Sign Up</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsSignupOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="signup-container">
              <IonIcon icon={personCircleOutline} className="signup-icon" />
              <IonCard className="signup-card rounded-card">
                <IonCardContent>
                  <IonItem>
                    <IonLabel position="stacked">Username</IonLabel>
                    <IonInput value={username} onIonChange={(e) => setUsername(e.detail.value!)} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Confirm Password</IonLabel>
                    <IonInput type="password" value={confirmPassword} onIonChange={(e) => setConfirmPassword(e.detail.value!)} required />
                  </IonItem>

                  <IonButton expand="full" color="primary" shape="round" onClick={handleSignup}>Sign Up</IonButton>
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
        </IonModal>

        <IonAlert isOpen={showAlert} onDidDismiss={() => setShowAlert(false)} header="Error" message={alertMessage} buttons={['OK']} />
        <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
      </IonContent>

      <style>
        {`
          .login-container, .signup-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .login-icon, .signup-icon {
            font-size: 80px;
            color: #3880ff;
            margin-bottom: 20px;
          }

          .login-card, .signup-card {
            width: 100%;
            max-width: 450px;
            text-align: center;
            padding: 20px;
          }

          .rounded-card {
            border-radius: 20px;
          }
        `}
      </style>
    </IonPage>
  );
};

export default Login;